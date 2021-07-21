import Image from "next/image"

function LibrarySong({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) {
  const songSelectHandler = async () => {
    await setCurrentSong(song)
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        }
      } else {
        return {
          ...song,
          active: false,
        }
      }
    })
    setSongs(newSongs)
    if (isPlaying) audioRef.current.play()
  }

  return (
    <div
      onClick={songSelectHandler}
      className={`flex items-center pt-4 pr-8 pl-4 pb-8 cursor-pointer hover:bg-blue-200 ${
        song.active ? "bg-blue-200" : ""
      } `}
    >
      <Image src={song.cover} width={100} height={100} objectFit="contain" />
      <div className="pl-1">
        <h3 className="text-gray-500">{song.name}</h3>
        <h3 className=" text-gray-500 text-xs">{song.artist}</h3>
      </div>
    </div>
  )
}

export default LibrarySong
