import {useNavigate}from 'react-router-dom'

  /*
  1.导入一个useNavigate钩子函数
  2.执行useNavigate函数得到的跳转函数
  3.在时间中执行跳转函数完成路由跳转
  */

const Logon=()=>{
// 执行useNavigate得到一个跳转函数
const navigate =useNavigate()
const goUser=()=>{
//实现跳转
// navigate('/User')
// {replace:true}替换上次的路由
// navigate('/User',{replace:true})


//路由传参方式一：searchParams
// navigate('/User?id=199535&name=狗牙')
//路由传参方式二：params
navigate('/User/199535')
  }
  return (
    <>
    <div>
  <button onClick={goUser}>go User</button>
    </div>
    </>
    )
}
export default Logon