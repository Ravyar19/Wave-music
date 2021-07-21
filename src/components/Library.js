import LibrarySong from "./LibrarySong"

function Library({
  songs,
  libraryStatus,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) {
  return (
    <div
      className={` opacity-0 duration-700 fixed top-0 left-0 w-full sm:w-80 bg-white h-full overflow-scroll  shadow-md mt-2 ${
        libraryStatus ? "opacity-100 translate-y-0" : ""
      }`}
    >
      <h2 className="p-4 font-bold text-xl">Library</h2>
      <div>
        {songs.map((song) => (
          <LibrarySong
            setSongs={setSongs}
            isPlaying={isPlaying}
            audioRef={audioRef}
            songs={songs}
            song={song}
            setCurrentSong={setCurrentSong}
            id={song.id}
            key={song.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Library
