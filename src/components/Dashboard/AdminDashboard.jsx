import React from 'react'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import Header from '../other/Header'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-10'>
        <Header changeUser={props.changeUser}/>
        <CreateTask changeUser={props.changeUser}/>
        <AllTask changeUser={props.changeUser}/>
    </div>
  )
}

export default AdminDashboard