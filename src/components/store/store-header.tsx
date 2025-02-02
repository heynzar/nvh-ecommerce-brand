"use client";
import Link from "next/link";
import { CardButton } from "./store-cart-button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header({ products }: { products?: boolean }) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="pt-6 pb-12 sm:py-12 px-4 flex flex-col gap-6 sm:gap-10 max-w-screen-xl mx-auto">
      <h1 className="text-center text-4xl sm:text-6xl md:text-7xl font-bold uppercase">
        NZAR Velvet Hour
      </h1>
      <div
        className={`flex justify-between w-full items-center mx-auto  ${
          products && "max-w-screen-lg"
        }`}
      >
        <Link href="/">
          <h2 className="font-medium text-2xl">NVH®</h2>
        </Link>
        {!products && (
          <nav>
            <ul className="hidden md:flex gap-10">
              <li className="hover:underline underline-offset-8 cursor-pointer">
                <a href="#our-collection">Our Collection</a>
              </li>
              <li className="hover:underline underline-offset-8 cursor-pointer">
                <a href="#client-favorites">Client Favorites</a>
              </li>
              <li className="hover:underline underline-offset-8 cursor-pointer">
                <a href="#why-nvh">Why NVH®</a>
              </li>
              <li className="hover:underline underline-offset-8 cursor-pointer">
                <a href="#about-the-brand">About The Brand</a>
              </li>
            </ul>
          </nav>
        )}

        <div className="flex gap-2">
          {!products && (
            <button
              className="p-1 hover:bg-white/5 transition-colors rounded-lg"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <Menu strokeWidth={1} className="size-7 md:hidden" />
            </button>
          )}

          <CardButton />
        </div>

        <div
          className={`${
            !openMenu && "-translate-y-[100%]"
          } absolute md:hidden bg-neutral-950 inset-0 border-b flex flex-col justify-center items-center w-full p-4 pt-8 h-min transition-transform duration-300`}
        >
          <nav>
            <ul className="flex flex-col justify-center items-center gap-4">
              <li className="hover:underline underline-offset-8 cursor-pointer">
                <a href="#our-collection">Our Collection</a>
              </li>
              <li className="hover:underline underline-offset-8 cursor-pointer">
                <a href="#client-favorites">Client Favorites</a>
              </li>
              <li className="hover:underline underline-offset-8 cursor-pointer">
                <a href="#why-nvh">Why NVH®</a>
              </li>
              <li className="hover:underline underline-offset-8 cursor-pointer">
                <a href="#about-the-brand">About The Brand</a>
              </li>
            </ul>
          </nav>
          <button
            className="mt-2 ml-auto p-1 hover:bg-white/5 transition-colors rounded-lg"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <X strokeWidth={1} className="size-7" />
          </button>
        </div>
      </div>
    </header>
  );
}
