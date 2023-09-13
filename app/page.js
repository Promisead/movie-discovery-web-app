"use client";
import HomeCom from "./components/HomeCom";
import FavouritesCom from "./components/FavouritesCom";
import { useContext } from "react";
import { StateContext } from "./StateProvider";

export default function Home() {
  const { componentDisplay } = useContext(StateContext);

  return <>{componentDisplay === "Home" ? <HomeCom /> : <FavouritesCom />}</>;
}
