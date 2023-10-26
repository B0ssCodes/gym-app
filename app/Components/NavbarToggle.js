'use client'
import React from 'react'

export default function NavbarToggle() {
      const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    
      function handleToggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
      }
    
      return (
        <div>
        <div className="navbar bg-[#30d5c8] rounded-xl mb-3">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost lg:hidden"
                onClick={handleToggleDropdown}
              >
    </label>
          
    </div>
    </div>
    </div>
    </div>
      )
}
