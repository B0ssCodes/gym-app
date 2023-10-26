'use client'
import React from 'react'
import Navbar from './Navbar';
import NavbarToggle from './NavbarToggle';
export default function NavbarState() {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    
    function handleToggleDropdown() {
      setIsDropdownOpen(!isDropdownOpen);
    }

    return(
        <div>
      <NavbarToggle isDropdownOpen={isDropdownOpen} handleToggleDropdown={handleToggleDropdown}/>
      <Navbar isDropdownOpen={isDropdownOpen} handleToggleDropdown={handleToggleDropdown}/>
        </div>
    )
}
