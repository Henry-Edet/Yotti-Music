export default function SongList() {
  return (
    <aside className='block py-0.5 px-1.5 gap-1 bg-zinc-700 w-[15.7rem] h-[25rem] rounded-b-lg'>
      <div>
        <div className='pb-2'>
          <h5 className='font-["Dm Sans"] text-white'>Recent</h5>
        </div>

        <div className='flex border border-white px-1 py-1 rounded-lg w-[15rem]'>
          <div className='flex text-xs gap-2'>
            <div className='font-["Dm Sans"] text-white'>
              <button className='bg-[#4C19EA] px-1 py-1 rounded cursor-pointer'>Songs</button>
            </div>

            <div className='font-["Dm Sans"] text-white'>
              <button className='px-1 py-1 rounded cursor-pointer'>Playlists</button>
            </div>

            <div className='font-["Dm Sans"] text-white'> 
              <button className='px-1 rounded py-1 cursor-pointer'>Albums</button>
            </div>

            <div className='font-["Dm Sans"] text-white'>
              <button className='px-1 rounded py-1 cursor-pointer'>Up next</button>
            </div>
          </div>
        </div>
      </div>

      <div className='my-10'>
        <div className='flex px-5 py-5 items-center gap-2'></div>

        <div className='flex items-center my-4 gap-1'>
          <div className='w-9 h-10'></div>
          <div className='w-36 h-10 flex justify-center items-center place-items-baseline'>
            <p className='text-white self-end font-["Dm Sans"] text-xs'>No recents</p>
          </div>
          <div className='w-9 h-10'></div>
        </div>
        <div className='flex items-center my-4 gap-1'>
          <div className='w-9 h-10'></div>
          <div className='w-36 h-10 flex justify-center items-center place-items-baseline'>
            <p className='text-white self-start font-["Dm Sans"] text-xs'>Play something first</p>
          </div>
          <div className='w-9 h-10'></div>
        </div>
        <div className='flex px-5 py-5 items-center gap-2'></div>
      </div>
    </aside>
  );
}
