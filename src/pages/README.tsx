import { Avatar, Divider, Space, Typography } from 'antd';
import styled from 'styled-components';

const { Title, Paragraph, Text } = Typography;

const Ul = styled.ul`
  list-style: circle;
  li {
    list-style: circle;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const CodeBlock = styled.pre`
  color: #cccccc !important;
  background: #282c34 !important;
`;

function Home(): JSX.Element {
  return (
    <Typography style={{ overflowY: 'scroll' }}>
      <Title>🎉Electron-react-starter</Title>
      <Paragraph>
        <Space size="middle">
          <Div>
            <Avatar
              src={<img src="electron-logo.svg" alt="avatar" />}
              size="small"
            />
            <Text strong>Electron</Text>
          </Div>
          <Div>
            <Avatar
              src={<img src="vite-logo.svg" alt="avatar" />}
              size="small"
            />
            <Text strong>Vite</Text>
          </Div>
          <Div>
            <Avatar
              src={<img src="react-logo.svg" alt="avatar" />}
              size="small"
            />
            <Text strong>React</Text>
          </Div>
        </Space>
      </Paragraph>
      <Divider />
      <Title level={2}>🚀Feature</Title>
      <Paragraph>
        <Ul>
          <li>Develop by react and build by vite.</li>
          <li>Format code style by prettier and eslint.</li>
          <li>Configured electron-builder and husky and commitlint.</li>
        </Ul>
      </Paragraph>
      <Title level={2}>📖Usage</Title>
      <Title level={3}>Dev</Title>
      <Paragraph>
        Install
        <CodeBlock>yarn</CodeBlock>
        Start
        <CodeBlock>yarn dev</CodeBlock>
      </Paragraph>
      <Title level={4}>Package</Title>
      <CodeBlock>yarn build:[platform]</CodeBlock>
      <Paragraph></Paragraph>
    </Typography>
  );
}

export default Home;
