import Link from "next/link";
import { useRef } from "react";

const Navbar = () => {
  const menusRef = useRef(null);
  const backdropRef = useRef(null);
  const menuToggle = () => {
    const menus = menusRef.current;
    const backdrop = backdropRef.current;

    if (menus.classList.contains("navbar-open")) {
      menus.classList.remove("navbar-open");
      menus.classList.add("navbar-closed");
      backdrop.classList.remove("navbar-open-backdrop");
      backdrop.classList.add("navbar-closed-backdrop");
    } else {
      menus.classList.add("navbar-open");
      menus.classList.remove("navbar-closed");
      backdrop.classList.add("navbar-open-backdrop");
      backdrop.classList.remove("navbar-closed-backdrop");
    }
  };

  return (
    <nav className="border-b p-5 fixed w-full z-10 top-0 left-0 bg-white">
      <div className="max-w-screen-md mx-auto flex justify-between">
        <Link href="/" className="font-bold">
          MealApp
        </Link>
        <button className="block md:hidden" onClick={menuToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
          </svg>
        </button>
        <div
          id="backdrop"
          className="navbar-closed-backdrop md:hidden"
          onClick={menuToggle}
          ref={backdropRef}
        ></div>
        <div
          id="menus"
          className="navbar-closed z-20 w-1/2 md:w-auto"
          ref={menusRef}
        >
          <button className="flex justify-end md:hidden" onClick={menuToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
            </svg>
          </button>
          <Link href="/" className="text-gray-500 hover:text-black">
            Home
          </Link>
          <Link href="/foods" className="text-gray-500 hover:text-black">
            Foods
          </Link>
          <Link href="/ingredients" className="text-gray-500 hover:text-black">
            Ingredients
          </Link>
          <Link
            href="/local-culinary"
            className="text-gray-500 hover:text-black"
          >
            Local Culinary
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
