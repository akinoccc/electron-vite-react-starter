import SideMenu from './components/SideMenu';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Content, Sider } = Layout;

function AppLayout(): JSX.Element {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible theme="light">
        <SideMenu />
      </Sider>
      <Content style={{ padding: '20px' }}>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default AppLayout;
