function RepositoryCard({ repository }) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-red-500/50">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">
            {repository.name}
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-400">
            {repository.description}
          </p>
        </div>

        <span className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
          {repository.language}
        </span>
      </div>

      <div className="mt-6 flex items-center gap-6 text-sm text-zinc-500">
        <span>⭐ {repository.stars}</span>

        <span>Forks {repository.forks}</span>
      </div>
    </article>
  );
}

export default RepositoryCard;