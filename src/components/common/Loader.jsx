function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-brand-gold border-t-transparent animate-spin" />
        <p className="text-gray-500 text-sm font-medium">Loading…</p>
      </div>
    </div>
  )
}

export default Loader
