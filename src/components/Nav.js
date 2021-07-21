import { MusicNoteIcon } from "@heroicons/react/outline"
function Nav({ setLibraryStatus, libraryStatus }) {
  return (
    <nav className="min-h-sm flex justify-around mt-4 items-center">
      <h1 className="font-bold text-xl mb-9 sm:mb-0">Waves</h1>
      <button
        onClick={() => setLibraryStatus(!libraryStatus)}
        className="nav-btn mb-9 sm:mb-0 flex justify-center items-center p-2 bg-transparent cursor-pointer  text-black border-gray-100 ease-in delay-75 hover:bg-gray-400 hover:text-white"
      >
        Library
        <MusicNoteIcon className="h-6" />
      </button>
    </nav>
  )
}

export default Nav
