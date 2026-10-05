import StatsCard from "./StatsCard";

function Stats({ stats }) {
  return (
    <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

      <StatsCard
        label="Repositories"
        value={stats.repositories}
      />

      <StatsCard
        label="Followers"
        value={stats.followers}
      />

      <StatsCard
        label="Following"
        value={stats.following}
      />

      <StatsCard
        label="Total Stars"
        value={stats.stars}
      />

    </section>
  );
}

export default Stats;