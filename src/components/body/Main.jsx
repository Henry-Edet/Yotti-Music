import SideBar from "./Sidebar";
import Browser from "./Browser";
import SongList from "./SongList";

import Collections from "./Collections";

export default function Main() {
  return (
    <main className=" grid h-fit w-[100vw] grid-cols-[12.5%_70%_17.5%] text-white ">
      <aside>
        <SideBar />
      </aside>
      <section className=" flex flex-col gap-[2rem] overflow-x-hidden px-[1rem] ">
        <Browser />
        <Collections title={"Discover an Artist"} />
        <Collections title={"Top Albums"} />
        <Collections title={"Playlists For You"} />
        <Collections title={"Popular Genres"} />
      </section>
      <aside>
        <SongList />
      </aside>
    </main>
  );
}
