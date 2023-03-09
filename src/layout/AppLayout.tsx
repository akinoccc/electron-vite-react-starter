import SideMenu from './components/SideMenu';
import { Layout, Spin } from 'antd';
import { RouteObject, useRoutes } from 'react-router-dom';
import { Suspense } from 'react';
import routes from '@renderer/routers';
import styled from 'styled-components';

const { Content, Sider } = Layout;

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

function AppLayout(): JSX.Element {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible theme="light">
        <SideMenu />
      </Sider>
      <Content style={{ overflow: 'auto', maxHeight: '100vh', padding: 20 }}>
        <Suspense
          fallback={
            <CenterDiv>
              <Spin size="large" tip="Loading..." />
            </CenterDiv>
          }
        >
          {useRoutes(routes as RouteObject[])}
        </Suspense>
      </Content>
    </Layout>
  );
}

export default AppLayout;
