import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const menuItems = [
    { name: "home", link: "/" },
    { name: "about", link: "/" },
    { name: "services", link: "/" },
    { name: "contact", link: "/" },
  ];

  const menu = (
    <>
      {menuItems.map((item) => (
        <li key={item.link}>
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
    </>
  );

  return (
    <nav className="bg-base-100 z-50 sticky top-0">
      <div className="navbar container mx-auto py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <Link to={"/"} className="lg:text-3xl text-xl font-bold">
            Book <span className="text-primary">House</span>
          </Link>
        </div>
        <div className="navbar-center w-1/2 hidden md:flex">
          <div className="form-control w-full">
            <div className="input-group">
              <select className="select select-bordered">
                <option>Book</option>
                <option>Writer</option>
                <option>Publisher</option>
                <option>Category</option>
              </select>
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered w-full"
              />
              <button className="btn btn-square btn-primary text-white text-3xl">
                <AiOutlineSearch />
              </button>
            </div>
          </div>
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a>
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div> */}
        <div className="navbar-end">
          <button className="btn btn-ghost text-4xl">
            <AiOutlineShoppingCart />
          </button>
          <button className="btn btn-primary btn-outline lg:btn btn-sm normal-case ml-3">
            Sign In
          </button>
        </div>
      </div>
      <div className="hidden lg:block text-xl container mx-auto">
        <ul className="menu menu-horizontal p-0">{menu}</ul>
      </div>
      <div className="form-control container mx-auto md:hidden px-4">
        <div className="input-group">
          <select className="select select-bordered">
            <option>Book</option>
            <option>Writer</option>
            <option>Publisher</option>
            <option>Category</option>
          </select>
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered w-full"
          />
          <button className="btn btn-square btn-primary text-white text-3xl">
            <AiOutlineSearch />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
