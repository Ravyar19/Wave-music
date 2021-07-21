import {
  PlayIcon,
  RewindIcon,
  FastForwardIcon,
  PauseIcon,
} from "@heroicons/react/outline"

function Player({
  currentSong,
  songs,
  isPlaying,
  setIsPlaying,
  audioRef,
  setSongInfo,
  songInfo,
  setCurrentSong,
  setSongs,
}) {
  const getTime = (time) => {
    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
  }

  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
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
  }

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(!isPlaying)
    } else {
      audioRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }

  const dragSongHandler = (e) => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({ ...songInfo, currentTime: e.target.value })
  }

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length])
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1])
        activeLibraryHandler(songs[songs.length - 1])

        if (isPlaying) audioRef.current.play()

        return
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length])
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length])
    }
    if (isPlaying) audioRef.current.play()
  }

  //Add styles

  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  }
  return (
    <div className="min-h-small flex flex-col items-center justify-between">
      <div className="w-full sm:w-8/12 flex mt-2  ">
        <p className="px-8">{getTime(songInfo.currentTime)}</p>
        <div
          className="track justify-center items-center mt-1  "
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
        >
          <input
            onChange={dragSongHandler}
            type="range"
            className=" justify-center items-center w-full h-10 py-4 inputRange"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p className="px-8">
          {songInfo.duration ? getTime(songInfo.duration) : "0:00"}
        </p>
      </div>
      <div className="flex justify-between items-center p-4 w-3/5 md:w-1/4">
        <RewindIcon
          className="icons  "
          onClick={() => skipTrackHandler("skip-back")}
        />
        {isPlaying ? (
          <PlayIcon
            onClick={playSongHandler}
            className="icons animate-bounce"
          />
        ) : (
          <PauseIcon onClick={playSongHandler} className="icons" />
        )}
        <FastForwardIcon
          className="icons"
          onClick={() => skipTrackHandler("skip-forward")}
        />
      </div>
    </div>
  )
}

export default Player
