import { useState } from "react";

import Navbar from "./components/Navbar";
import SearchSection from "./components/SearchSection";
import ProfileCard from "./components/ProfileCard";
import Stats from "./components/Stats";
import RepositoryList from "./components/RepositoryList";

function App() {
  const [username, setUsername] = useState("");

  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchGitHubData(username) {
    try {
      setLoading(true);
      setError("");

      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!userResponse.ok) {
        throw new Error("GitHub user not found");
      }

      const userData = await userResponse.json();

      const formattedUser = {
        name: userData.name,
        username: userData.login,
        bio: userData.bio,
        avatar: userData.avatar_url,
        repositories: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
      };

      const repositoriesResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );

      if (!repositoriesResponse.ok) {
        throw new Error("Could not fetch repositories");
      }

      const repositoriesData = await repositoriesResponse.json();

      const formattedRepositories = repositoriesData.map((repository) => ({
        id: repository.id,
        name: repository.name,
        description: repository.description,
        language: repository.language,
        stars: repository.stargazers_count,
        forks: repository.forks_count,
      }));

      setUser(formattedUser);
      setRepositories(formattedRepositories);
    } catch (error) {
      setError(error.message);
      setUser(null);
      setRepositories([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <SearchSection
        username={username}
        setUsername={setUsername}
        onSearch={fetchGitHubData}
      />

      {loading && (
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-zinc-400">
            Loading GitHub profile...
          </p>
        </div>
      )}

      {error && (
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-center text-red-400">
            {error}
          </div>
        </div>
      )}

      {user && !loading && (
        <div className="mx-auto max-w-7xl px-6 pb-20">
          <ProfileCard user={user} />

          <Stats
            stats={{
              repositories: user.repositories,
              followers: user.followers,
              following: user.following,
              stars: 0,
            }}
          />

          <RepositoryList repositories={repositories} />
        </div>
      )}
    </main>
  );
}

export default App;