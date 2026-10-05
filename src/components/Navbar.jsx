const Navbar = () => {
  return (
    <nav className="border-b border-zinc-800 bg-black">
      <div className="mx-auto flex max-w-7xl item-center justify-between px-6 py-5">

        <div>
          <h1 className="text-xl font-bold tracking-tight text-white">
            GitHub <span className="text-red-500">Analyzer</span>
          </h1>
        </div>

        <div className="hidden text-sm text-zinc-400 md:block">
            Analyze GitHub Profiles
        </div>
      </div>
    </nav>
  )
}

export default Navbar