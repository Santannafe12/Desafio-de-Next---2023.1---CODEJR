import React, { useState } from 'react';
import { FaHome, FaAddressBook, FaUsers, FaCog, FaSignInAlt, FaBars, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md'

import styles from './sidebar.module.scss'

function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const sidebarContent = (
    <div className={styles.content}>
      <nav>
        <ul>
          <li>
            <span className={styles.icon}>
              <FaHome />
            </span>
            <a href="#">Home</a>
          </li>
          <li>
            <span className={styles.icon}>
              <FaAddressBook />
            </span>
            <a href="#">Contact</a>
          </li>
          <li>
            <span className={styles.icon}>
              <FaUsers />
            </span>
            <a href="#">Employees</a>
          </li>
          <li>
            <span className={styles.icon}>
              <FaCog />
            </span>
            <a href="#">Admin</a>
          </li>
          <li>
            <span className={styles.icon}>
              <FaSignInAlt />
            </span>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
      <div className={styles.loggedInUser}>
        <span className={styles.icon}>
          <FaUser />
        </span>
        <span>Username</span>
        <button className={styles.logoutButton}>
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className={`${styles.sidebar} ${expanded ? styles.expanded : ''}`}>
      <div className={`${styles.header} ${expanded ? styles.headerExpanded : ''}`}>
		{expanded ? (
			<h1>Games Emporium</h1>
		) : (
			''
		)}
        {expanded ? (
          <button className={styles.shrinkButton} onClick={toggleSidebar}>
            <MdCancel />
          </button>
        ) : (
          <button className={styles.expandButton} onClick={toggleSidebar}>
            <FaBars />
          </button>
        )}
      </div>
      {expanded && sidebarContent}
    </div>
  );
}

export default Sidebar;
