
import { useEffect, useState } from 'react'

import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import './App.css'


function App() {
  const [infoUpdate, setInfoUpdate] = useState()
// const url='https://users-crud.academlo.tech'
const url='https://trabajonode2-1.onrender.com'
const [users,getUsers,createUser,deleteUser,updateUser]=useCrud(url)
const [isDisable, setIsDisable] = useState(true)

useEffect(()=>{
  getUsers('/users')
},[])
console.log(users);
const handleNewUser=()=>{
  setIsDisable(false)  
}



  return (
    <>
      <div>
        <div className='nav__div'>
        <h1 className='nav__title'>Users</h1>
        <button className='form__btn__create' onClick={handleNewUser} >+ Create new User</button>
        </div>
       <FormUser 
       createUser={createUser}
       infoUpdate={infoUpdate}
       updateUser={updateUser}
       setInfoUpdate={setInfoUpdate}
       setIsDisable={setIsDisable}
       isDisable={isDisable}
       
       />
       <div className='card__box'>
        {
          users?.map(user=>(
            <UserCard
            key={user.id} 
            user={user}
            deleteUser={deleteUser}
            setInfoUpdate={setInfoUpdate}
            setIsDisable={setIsDisable}/>
            
            ))
        }
       </div>
      </div>
      
    </>
  )
}

export default App
