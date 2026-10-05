function ProfileCard({ user }) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
      <div className="flex flex-col items-center gap-6 sm:flex-row">

        <img
          src={user.avatar}
          alt={user.name}
          className="h-24 w-24 rounded-full border-2 border-red-500 object-cover"
        />

        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-white">
            {user.name}
          </h2>

          <p className="mt-1 text-red-500">
            @{user.username}
          </p>

          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
            {user.bio}
          </p>
        </div>

      </div>
    </section>
  );
}

export default ProfileCard;