import SideMenu from './components/SideMenu';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

function AppLayout(): JSX.Element {
  return (
    <Layout>
      <SideMenu />
      <Outlet />
    </Layout>
  );
}

export default AppLayout;
