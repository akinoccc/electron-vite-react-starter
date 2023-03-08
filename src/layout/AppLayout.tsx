import SideMenu from './components/SideMenu';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Sider from 'antd/es/layout/Sider';

function AppLayout(): JSX.Element {
  return (
    <Layout style={{ padding: 0 }}>
      <Sider style={{ minHeight: '100vh' }} collapsible theme="light">
        <SideMenu />
      </Sider>
      <Outlet />
    </Layout>
  );
}

export default AppLayout;
