import React from 'react';
import { useAuth0 } from '../../context/auth0-context';
import './styles.css';

function Header() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <header>
      <nav className='navbar is-dark'>
        <div className='container'>
          <div className='navbar-menu is-active'>
            <div className='navbar-brand'>
              <button className='navbar-item'>My Coll App!</button>
            </div>

            <div className='navbar-end'>
              {!isLoading && !user && (
                <button className='navbar-item' onClick={loginWithRedirect}>
                  Login
                </button>
              )}
              {!isLoading && user && (
                <>
                  <button className='navbar-item'>{user.name}</button>
                  <button
                    className='navbar-item'
                    onClick={() => {
                      logout({ returnTo: window.location.origin });
                    }}
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
