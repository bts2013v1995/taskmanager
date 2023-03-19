
import React from 'react'
 
function Header() {
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            <h3 className="brand" href="#">
              Today's Tasks
            </h3>
          </div>
          <div className="nav-right">
            <div className="tabs">
              <h5>Daily Task Manager</h5>
            </div>
          </div>
        </nav>
      </div>
    );
}
 
export default Header;