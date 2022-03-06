import React from "react";

import { NavLink } from "react-router-dom";
import { BiCategoryAlt } from "react-icons/bi";
import { VscGraphLine } from "react-icons/vsc";
import { AiOutlineSetting } from "react-icons/ai";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navigation">
      <ul>
        <li className="list active">
          <NavLink to="/" classname="a">
            <span className="icon">
              <BiCategoryAlt className="listIcon" />
            </span>
            <span className="title">Dashboard</span>
          </NavLink>
        </li>
        <li className="data-list">
          <NavLink to="/data">
            <span className="icon">
              <VscGraphLine className="listIcon" />
            </span>
            <span className="title">Live Data</span>
          </NavLink>
        </li>
        <li className="setting-list">
          <NavLink to="/setting">
            <span className="icon">
              <AiOutlineSetting className="listIcon" />
            </span>
            <span className="title">Settings</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

// import React from "react";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <div className="wrapper">
//       <ul>
//         <li>
//           <a href="dashboard.html">Dashboard</a>
//         </li>
//         <li>
//           <a href="/" class="calendar current">
//             Calendar
//           </a>
//         </li>
//         <li>
//           <a href="/setting" class="graphs">
//             Graphs
//           </a>
//         </li>
//         <li>
//           <a href="Add.html" class="add">
//             Add
//           </a>
//         </li>
//         <li>
//           <a href="Settings.html" class="settings">
//             Settings
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Navbar;
