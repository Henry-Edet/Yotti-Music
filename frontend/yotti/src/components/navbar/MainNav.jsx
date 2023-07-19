import NEXT from "./../../assets/next.png";
import PLAY from "./../../assets/play.png";
import PREVIEW from "./../../assets/preview.png";
import PLAYING from "./../../assets/playing.png";
import SHUFFLE from "./../../assets/shuffle.png";
import VOLUME from "./../../assets/volume-2.png";
import REPEAT from "./../../assets/repeat.png";

export default function MainNav({ onHandleSubmit }) {
  return (
    <div className="mainNav flex h-[100%] w-[100%] flex-col justify-center gap-2  ">
      <form onSubmit={onHandleSubmit} className="self-center">
        <input
          className="h-5 w-[25rem]"
          placeholder={`Search any music, playlist, album here`}
          type="search"
        />
      </form>
      <div className="musicControl flex h-[3rem] items-center justify-center  bg-stone-500">
        <div className="playFunc flex w-[30%] items-center gap-3 px-11 py-6">
          <img className=" object-contain" src={SHUFFLE} alt="shuffle" />
          <img className=" object-contain" src={PREVIEW} alt="preview" />
          <img className=" object-contain" src={PLAY} alt="play" />
          <img className=" object-contain" src={NEXT} alt="next" />
          <img className=" object-contain" src={REPEAT} alt="repeat" />
        </div>
        <div className="song flex w-[50%] items-center ">
          <div className=" h-[3rem] w-[15%] ">
            <img
              className=" h-[100%] object-contain"
              src={PLAYING}
              alt="song"
            />
          </div>
          <div className="lyrics flex h-[3rem] w-[85%] flex-col items-center justify-center border-b-red-300 pb-1 pt-3">
            <p>Yoga Yoga</p>
            <small> I dey on my way</small>
          </div>
        </div>
        <div className="volume flex h-[3rem] w-[20%] items-center bg-stone-700 px-4">
          <img className=" h-6 object-contain" src={VOLUME} alt="volume" />
          <input className="h-[0.12rem] w-[7rem] " type="range" />
        </div>
      </div>
    </div>
  );
}
