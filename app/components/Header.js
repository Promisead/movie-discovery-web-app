"use client";
import Image from "next/image";
import { useContext } from "react";
import { StateContext } from "../StateProvider";
import { usePathname } from "next/navigation";

export default function Header() {
  const { toggleDisplay, searchTerm, setSearchTerm, fetchSearchData } =
    useContext(StateContext);
  const pathname = usePathname();
  const isInputDisabled = pathname.includes("/movies");

  return (
    <header>
      <nav>
        <h1>Movie Discovery Web App</h1>
        <aside>
          <button onClick={() => toggleDisplay("Home")}>Home</button>
          <button onClick={() => toggleDisplay("Home")}>
            Favourites
          </button>
        </aside>
      </nav>
      <menu>
        <input
          type="search"
          placeholder="What do you want to watch?"
          className="menu-input"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onKeyDown={(e) => {
            fetchSearchData(e);
          }}
          disabled={isInputDisabled}
        />
        <div className="icon-magnify-container">
          <Image
            src="/images/icon-magnify.png"
            alt=""
            fill
            sizes="(min-width: 400px) 100vw"
          />
        </div>
      </menu>
    </header>
  );
}
