import grid from "./../../assets/gridNew.png";
import album from "./../../assets/Frame 27.png";
import genre from "./../../assets/Frame 28.svg";
import artist from "./../../assets/microphone.svg";
import music from "./../../assets/music.svg";
import list from "./../../assets/Frame 28.png";
import heart from "./../../assets/heart.svg";
import cloud from "./../../assets/download-cloud.svg";
import chevdown from "./../../assets/chevron-down.svg";
import info from "./../../assets/info.svg";


const buttonContent = [
  {image: grid, name: 'Browse'},
  {image: album, name: 'Albums'},
  {image: genre, name: 'Genres'},
  {image: artist, name: 'Artiste'},
]


function SideButton({ children, img}){
  return (
    <div className={`py-2 flex gap-3 ${ children === 'Browse' ? 'text-[#B29DF2]' : 'text-white'} items-center`}>
      <img src={img} alt={children}/>
      <p>{children}</p>
    </div>
  )
}


export default function SideBar() {
  return (
    <div className='justify-between text-xs grid h-[100vh] w-[100vw] grid-cols-[12.5%_70%_17.5%]'>
      <aside className='flex bg-zinc-700  px-5 items-start gap-1 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] py-1.5'>  
        <div className='flex flex-col items-center w-full gap-4 h-screen'>
          <div className='flex pb-4'>
            <div className='text-white self-center bg-green-600 p-1 rounded shadow-[p_4px_4px_0_rgba(0,0,0,0.25)] font-DMSans text-sm not-italic font-normal'>
              Online mode
            </div>
          </div>

          <div className='flex flex-col items-start gap-2 justify-start cursor-pointer'>
            <div>
              <h5 className='font-DM Sans text-sm not-italic font-bold text-white'>
                Menu
              </h5>
            </div>

            <ul>
              {buttonContent.map((item) => <SideButton img={item.image} key={item.name}>{item.name}</SideButton>  )}
            </ul>

            <div className='flex flex-col mt-10 w-40'>
              <div>
                <h6 className='text-white pb-7'>
                  Library
                </h6>
              </div>

              <div>
                <div className='py-2 flex gap-3 text-white items-center'>
                  <img src={music} alt='songs' className='w-6'/>
                  <p>Songs</p>
                </div>

                <div className='py-2 flex gap-3 text-white items-center'>
                  <img src={list} alt='playlist' className="w-6"/>
                  <p>Playlists</p>
                </div>

                <div className='py-2 flex gap-3 text-white items-center'>
                  <img src={heart} alt='favorite' className="w-6"/>
                  <p>Favourite</p>
                </div>

                <div className='py-2 flex gap-3 text-white items-center'>
                  <img src={cloud} alt='downloads' className="w-6"/>
                  <p>Downloaded</p>
                  <img src={chevdown} alt='arrow' className="w-6"/>
                </div>
              </div>
            </div>

            <div className='mt-11'>
              <div>
                <h5 className='text-white pb-7'>Support</h5>
              </div>

              <div className='py-2 flex gap-3 text-white items-center'>
                <img src={info} alt='help' />
                <p>Help</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
