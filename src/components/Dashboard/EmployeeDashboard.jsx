import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <>
        <div className='p-10 bg-[#210202] h-screen'>
            <Header changeUser={props.changeUser} data={props.data}/>
            <TaskListNumbers changeUser={props.changeUser} data={props.data}/>
            <TaskList changeUser={props.changeUser} data={props.data}/>
        </div>
    </>
  )
}

export default EmployeeDashboard