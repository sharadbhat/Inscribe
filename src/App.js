import { Layout } from 'antd';

// Components
import TextInput from './components/TextInput';
import logo256 from './images/logo256.png';

// CSS
import './App.css';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className='layout' style={{ height: '100vh' }}>
    <Header>
      <a href='/' title='Inscribe'>
        <img src={logo256} alt='logo' width='40' />
      </a>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div className='textInputDiv'>
        <TextInput />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Created by <a href='https://www.github.com/sharadbhat'>Sharad Bhat</a>
      <div>
        Icons made by <a href='https://www.flaticon.com/authors/pixel-perfect' title='Pixel perfect'>Pixel perfect</a> from <a href='https://www.flaticon.com/' title='Flaticon'>www.flaticon.com</a>
      </div>
    </Footer>
  </Layout>
  );
}

export default App;