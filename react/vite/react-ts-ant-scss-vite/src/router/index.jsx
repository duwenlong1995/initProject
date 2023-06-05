import {createBrowserRouter} from 'react-router-dom'
import Login from "../views/Login"
import Layout from "../views/Layout"
import User from "../views/user"
import Main from "../views/Main"
import Aside from "../views/Aside"
import NotFound from "../views/NotFound"

// 1.引入方法和组件
// createBrowserRouter创建路由实例，在方法中定义路由path和组件的对应关系
// RouterProvider组件渲染，并且传入createBrowserRouter执行后的router实例
// 2.调用create方法生成实例
const router =createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        // 默认二级路由
        index:true,
        element:<Main />
      },  
      {
        path:'/Aside',
        element:<Aside />
      }
    ]
  }, 
  {
    path:'/User/:id',
    element:<User />
  }, 
  {
    path:'/Login',
    element:<Login />
  },  {
    path:'*',
    element:<NotFound />
  },
])
/*
嵌套路由
1.准备二级路由组件Board和Article
2.在路由表中通过children属性进行二级路由配置
3.通过内置组件Outlet渲染二级路由组件
4.使用内置组件link进行声明式导航配置
*/
export default router