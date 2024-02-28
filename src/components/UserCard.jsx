import './styles/UserCard.css'

const UserCard = ({user,deleteUser,setInfoUpdate,setIsDisable}) => {
    
    const handleDelete=()=>{
        deleteUser('/users',user.id)
    }
    const handleEdit =()=>{
      setInfoUpdate(user)
      setIsDisable(false)
    }

  return (
    <article className='cardd'>
        <h2 className='card__name'>{user.first_name} {user.last_name}</h2>
        <hr />
        <ul className='card__ul'>
            <li className='card__li'>
            <h3 className='card__subtitle'>Email:</h3><span className='card__span'>{user.email}</span>
            </li>
            <li className='card__li'>
            <h3 className='card__subtitle card__subtitle--birthday'>Birthday:</h3><span className='card__span'>{user.birthday}</span>
            </li>
        </ul>
        <div className='botones'>
        <button className='card__button card__button--delete' onClick={handleDelete}><i className='bx bx-trash'></i></button>
        <button className='card__button card__button--edit' onClick={handleEdit}><i className='bx bx-edit-alt' ></i></button>
        </div>
        
    </article>
  )
}

export default UserCard