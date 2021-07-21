import Image from "next/image"

function Song({ currentSong }) {
  return (
    <div className="song-container min-h-full flex flex-col items-center justify-center">
      <Image
        className="  rounded-full "
        src={currentSong.cover}
        width={300}
        height={300}
        object-fit="contain"
      />
      <h2 className="pt-12 pr-4 pb-4 pl-4 font-semibold ">
        {currentSong.name}
      </h2>
      <h3 className="text-base pb-4 font-thin">{currentSong.artist}</h3>
    </div>
  )
}

export default Song
