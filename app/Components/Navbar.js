'use client'
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleToggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <div className="navbar bg-[#30d5c8] rounded-xl mb-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={handleToggleDropdown}
          >
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
            className={`menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${
              isDropdownOpen ? 'block' : 'hidden'
            }`}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/GymProgram">Complete Gym Program</Link>
            </li>
            <li>
              <Link href="/Tools">Tools</Link>
              <ul className="p-2">
                <li>
                  <Link href="/PRCalculator"> PR Calculator</Link>
                </li>
                <li>
                  <Link href="/BenchProgram">Bench Program Maker</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/AboutUs">About us</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Gym App
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/GymProgram">Complete Gym Program</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Tools</summary>
              <ul className="p-2">
                <li>
                  <Link href="/PRCalculator"> PR Calculator</Link>
                </li>
                <li>
                  <Link href="/BenchProgram">Bench Program Maker</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/AboutUs">About us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/LogIn" className="btn">
          Log In
        </Link>
      </div>
    </div>
  );
}