import { Outlet } from 'react-router-dom';
import { GlobalStyles } from 'components/styles/GlobalStyles';

const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <Outlet />
    </>
  );
};

export default Layout;
