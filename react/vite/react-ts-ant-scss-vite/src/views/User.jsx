import {useSearchParams,useParams}from 'react-router-dom'

/* 1.导入useSearchParams函数
  
  */
const User=()=>{
  // 通过获取searchParams传国开的id参数
  // const [params]=useSearchParams()
  // const id=params.get('id')
  // const name=params.get('name')

  // 获取通过params传过来的参数
  const {id}=useParams()
  return (
    <>
    <div>
    <h1>用户页{id}</h1>
    </div>
    </>
    )
}
export default User