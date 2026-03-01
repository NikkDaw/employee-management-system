import React from 'react'

const Header = (props) => {
  const userName = props.data ? props.data.name : 'Admin'

  const handleLogOut = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br />
        <span className='text-3xl font-semibold'>{userName} 👋</span>
      </h1>
      <button onClick={handleLogOut} className='bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-sm'>
        Log out
      </button>
    </div>
  )
}

export default Header