import { Layout } from 'antd';
import MainRoutes from './routes/main.routes';
import MainNav from './components/Layout/MainNav';
import MainFooter from './components/Layout/MainFooter';
import 'antd/dist/antd.min.css'

const { Content } = Layout;

function App() {
  return (
      <Layout className="layout">
        <MainNav />
        <Content className="main-container">
          <MainRoutes />
        </Content>
        <MainFooter />
      </Layout>
  );
}

export default App;
