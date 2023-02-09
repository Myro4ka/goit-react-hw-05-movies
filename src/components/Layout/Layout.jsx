import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'movies'}>Movies</NavLink>
          </li>
        </ul>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
