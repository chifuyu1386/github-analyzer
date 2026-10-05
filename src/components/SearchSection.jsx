import { useState } from "react"

const SearchSection = () => {
  const [username, setUsername] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(username)
  }

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">

        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-red-500">
          GitHub Analytics
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          Analyze any
          <span className="text-red-500"> GitHub Profile</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
          Explore repositories, followers, languages, stars and more
          through a powerful GitHub profile analyzer.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter GitHub username..."
            className="h-14 flex-1 rounded-lg border border-zinc-800 bg-zinc-950 px-5 text-white outline-none placeholder:text-zinc-600 focus:border-red-500"
          />

          <button
            type="submit"
            className="h-14 rounded-lg bg-red-600 px-8 font-semibold text-white transition hover:bg-red-500"
          >
            Analyze
          </button>
        </form>

      </div>
    </section>
  )
}

export default SearchSection