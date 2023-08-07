import chevleft from "./../../assets/chevron-left.png";
import chevright from "./../../assets/chevron-right.png";
import rectangle from "./../../assets/Rectangle 7.png";
import rect from "./../../assets/Rectangle 6.png";



export default function Browser() {
  return (
    <section>
      <div className='mt-20 flex px-4 justify-between'>
        <h1 className=" text-4xl font-semibold">Browse</h1>

        <div className='nextPreviousBtn flex gap-14 h-6'>
          <button>
            <img src={chevleft} alt='click left' className='cursor-pointer'/>

          </button>
          <button>
            <img src={chevright} alt='click right' className='cursor-pointer'/>
          </button>
        </div>

      </div>

      <ul className='flex'>
        <li>
            <p className='h-[1rem] px-4 pt-2 pb-5'>Album of the week</p>

          <div className='text-white px-4 mt-4'>
            <div className='flex flex-col gap-1 font-["Dm Sans"] text-sm'>
              <div>
                <p>Rave & Roses</p>
              </div>
              <div>
                <p>Rema</p>
              </div>
            </div>
            <img src={rectangle} alt='album' className='mt-2'/>
          </div>
        </li>

        <li>
          <div className='px-4 py-2'>
            <h1>Playlist of the week</h1>
          </div>
          <div className='text-white px-4 mt-2'>
            <div className='flex flex-col gap-1 font-["Dm Sans"] text-sm'>
              <div>
                <p>BNXN Bad Since 97</p>
              </div>
              <div>
                <p>Buju</p>
              </div>
            </div>
            <img src={rect} alt='buju' className='mt-2'/>
          </div>
        </li>
      </ul>
    </section>
  );
}
