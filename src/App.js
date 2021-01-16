import { Layout } from 'antd'

// Components
import Logo from './components/Logo'
import Load from './components/Load'
import Save from './components/Save'
import Settings from './components/Settings'
import TextInput from './components/TextInput'

// Utils
import { Provider } from './utils/Context'

// CSS
import './App.css'
import 'antd/dist/antd.css'

const { Header, Content, Footer } = Layout

function App() {
  return (
    <Provider>
      <Layout className='layout' style={{ height: '100vh' }}>
        <Header>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Logo />
            <div style={{ width: 200, display: 'flex', justifyContent: 'space-around' }}>
              <Load />
              <Save />
              <Settings />
            </div>
          </div>
        </Header>
        <Content className='textInputContainer'>
          <TextInput />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Created by <a href='https://www.github.com/sharadbhat'>Sharad Bhat</a>
          <br />
          Icons by <a href='https://www.flaticon.com/authors/pixel-perfect' title='Pixel perfect'>Pixel perfect</a>
        </Footer>
      </Layout>
    </Provider>
  )
}

export default App