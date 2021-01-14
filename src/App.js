import { Layout } from 'antd';

// CSS
import "./App.css";
import "antd/dist/antd.css";
import TextInput from './components/TextInput';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout" style={{ height: "100vh" }}>
    <Header>
      <div className="logo" />
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div style={{ paddingTop: 20 }}>
      <TextInput />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Created by Sharad Bhat
      <div>
        Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
    </Footer>
  </Layout>
  );
}

export default App;