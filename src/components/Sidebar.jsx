import React, { Component } from 'react'
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();
    const activeClass = 'rounded-md bg-gray-600 text-white p-2';

    const NavLinkFunction = () => {
        const sideBarArray = new Map([
          ['Dashboard', '/dashboard'],
          ['Admin', '/admin'],
          ['Students', '/students'],
          ['Message', '/message'],
          ['Content', '/content'],

        ]);
        
  
        return (
                <ul>
                {[...sideBarArray].map(([key, value]) => (
                  <li key={value} className="mb-2">
                    <NavLink
                      exact= "true"
                      to={value}
                      className={`from-purple-600 to-red-600 ${location.pathname === value ? activeClass : ''}`}
                    >
                      {key}
                    </NavLink>
                  </li>
                ))}
              </ul>
          
        );
     }
     
    return (
      <aside className="bg-gray-200 w-64 px-4 py-8">
        <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
        {NavLinkFunction()}
      </aside>
    );
  }
  
export default Sidebar