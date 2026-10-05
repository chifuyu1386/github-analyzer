import Navbar from "./components/Navbar"
import SearchSection from "./components/SearchSection"
import ProfileCard from "./components/ProfileCard"
import Stats from "./components/Stats"
import RepositoryList from "./components/RepositoryList"
import { useState } from "react"


const App = () => {
  const [user, setUser] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchGitHubData(username) {
    try {
      setLoading(true)
      setError("")

      const userResponse = await fetch(`https://api.github.com/users/${username}`)

      if (!userResponse.ok) {
        throw new Error("User not found")
      }

      const userData = await userResponse.json();

      const repositoriesResponse = await fetch(`https://api.github.com/users/${username}/repos`)

      if (!repositoriesResponse.ok) {
        throw new Error("Could not fetch repositories")
      }

      const repositoriesData = await repositoriesResponse.json();

      setUser(userData);
      setRepositories(repositoriesData)
    } catch (err) {

      setError(err.message)
      setUser(null)
      setRepositories([])

    } finally {

      setLoading(false)

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

      <div className="mx-auto max-w-7xl px-6 pb-20">

        <ProfileCard user={user} />

        <Stats stats={stats} />

        <RepositoryList repositories={repositories} />

      </div>
      
    </main>
  )
}

export default App