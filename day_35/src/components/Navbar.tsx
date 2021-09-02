import React, { useEffect } from "react";
import { getCurrentUser } from "../utils/fetchUsers";
import StoryIcon from "./StoryIcon";

const Navbar = () => {
  let currentUser = getCurrentUser();
  return (
    <header className="bg-white w-full h-14 flex flex-row items-center justify-center">
      <div className="w-full px-2 md:w-7/12 flex flex-row items-center justify-between">
        <div className="pt-2 w-24 md:w-28 lg:w-42">
          <a href="#">
            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
          </a>
        </div>
        <div className="hidden md:block md:w-1/4">
          <input
            className="px-2 py-1 border border-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
            placeholder="Search"
          />
        </div>
        <nav className="w-3/8 h-full">
          <ul className="flex flex-row items-center gap-2 lg:gap-4 h-full">
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="icon"
                  src="https://img.icons8.com/ios/28/000000/compass--v1.png"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg> */}
                {currentUser ? (
                  <StoryIcon user={currentUser} size={9} small={7} />
                ) : (
                  ""
                )}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
