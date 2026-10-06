import RepositoryCard from "./RepositoryCard";

function RepositoryList({ repositories, search, setSearch }) {
  return (
    <section className="mt-10">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-red-500">
            GitHub Activity
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            Repositories
          </h2>
        </div>

        <span className="text-sm text-zinc-500">
          {repositories.length} repositories
        </span>
      </div>

      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search repositories..."
        className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-white outline-none placeholder:text-zinc-600 focus:border-red-500 mb-[16px]"
      />

      <div className="grid gap-4 md:grid-cols-2">
        {repositories.map((repository) => (
          <RepositoryCard
            key={repository.id}
            repository={repository}
          />
        ))}
      </div>
    </section>
  );
}

export default RepositoryList;