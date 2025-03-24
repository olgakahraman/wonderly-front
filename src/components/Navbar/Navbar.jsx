import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import styles from './Navbar.module.css';

function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, login, logout } = useAuth();

  const handleLogin = () => {
    login();
    navigate('/');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg ${styles.navNavbar}`}
      role='navigation'
      aria-label='Main navigation'
    >
      <div className='container-fluid'>
        <NavLink
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.activeLink : ''}`
          }
          to='/'
          title='Home'
        >
          Wanderly
        </NavLink>
        <div className='navbarNav' id='navbarNav'>
          <ul className='navbar-nav d-flex flex-row'>
            {isAuthenticated && (
              <li className='nav-item me-3 auth-link'>
                <NavLink
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                  }
                  to='/create-post'
                  title='Create a Post'
                  aria-label='Create a Post'
                >
                  <i
                    className='fa-solid fa-square-plus d-md-none'
                    aria-hidden='true'
                  ></i>
                  <span className='d-none d-md-inline text'>Create a Post</span>
                </NavLink>
              </li>
            )}
            {isAuthenticated && (
              <li className='nav-item me-3 auth-link'>
                <NavLink
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                  }
                  to='/profile'
                  title='Profile'
                  aria-label='Go to Profile'
                >
                  <i
                    className='fa-solid fa-user d-md-none'
                    aria-hidden='true'
                  ></i>
                  <span className={`d-none d-md-inline ${styles.text}`}>
                    Profile
                  </span>
                </NavLink>
              </li>
            )}
            {!isAuthenticated && (
              <li className='nav-item me-3'>
                <button
                  onClick={handleLogin}
                  className={styles.navLink}
                  title='Login'
                  type='button'
                  aria-label='Log in to account'
                >
                  <i
                    className='fa-solid fa-right-to-bracket d-md-none'
                    aria-hidden='true'
                  ></i>
                  <span className='d-none d-md-inline text'>Login</span>
                </button>
              </li>
            )}
            {isAuthenticated && (
              <li className='nav-item me-3 auth-link'>
                <button
                  onClick={handleLogout}
                  className={styles.navLink}
                  title='Logout'
                  type='button'
                  aria-label='Log out from account'
                >
                  <i
                    className='fa-solid fa-right-from-bracket d-md-none'
                    aria-hidden='true'
                  ></i>
                  <span className='d-none d-md-inline text'>Logout</span>
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
