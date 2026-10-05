import Navbar from "./components/Navbar"
import SearchSection from "./components/SearchSection"
import ProfileCard from "./components/ProfileCard"
import Stats from "./components/Stats"
import RepositoryList from "./components/RepositoryList"


const App = () => {
  const user = {
    name: "Pooyan",
    username: "pooyanmoghadam",
    bio: "frontend developer building modern web applications",
    avatar: "https://github.com/github.png"
  }

  const stats = {
    repositories: 24,
    followers: 128,
    following: 56,
    stars: 342,
  };

  const repositories = [
  {
    id: 1,
    name: "expense-intelligence",
    description: "A modern expense management dashboard built with React.",
    language: "JavaScript",
    stars: 12,
    forks: 3,
  },
  {
    id: 2,
    name: "weather-app",
    description: "A weather application using the OpenWeather API.",
    language: "JavaScript",
    stars: 8,
    forks: 2,
  },
  {
    id: 3,
    name: "github-analyzer",
    description: "Analyze GitHub profiles and repositories.",
    language: "JavaScript",
    stars: 5,
    forks: 1,
  },
];


  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <SearchSection />

      <div className="mx-auto max-w-7xl px-6 pb-20">

        <ProfileCard user={user} />

        <Stats stats={stats} />

        <RepositoryList repositories={repositories} />

      </div>
      
    </main>
  )
}

export default App