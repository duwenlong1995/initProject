import { Outlet,Link } from 'react-router-dom'
import './Layout.scss'
import { Layout, Space } from 'antd';

const Home=()=>{
  const { Header, Footer, Content } = Layout;
  return (
    <>
    <div className='Layout'>
    {/* <div>
      <Link to="/">主要内容</Link>
      <Link to="/Aside">边框内容</Link>
    </div>
    <div>
      <p>二级路由出口位置</p>
      <Outlet />
    </div> */}
      <Space direction="vertical" style={{width: '100%'}}size={[0, 48]}>
    <Layout style={{ minHeight: '100vh' }}>
      <Header className='Header'>Header</Header>
      <Content className='Content'>Content</Content>
      <Footer className='Footer'>Footer</Footer>
    </Layout>
    </Space>
    </div>
    </>
    )
}
export default Home
