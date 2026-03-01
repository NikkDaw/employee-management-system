import React, { useContext } from 'react'
import { useCallback } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const authData= useContext(AuthContext)


  return (
    <> 
    <div id='alltask' className='bg-[#1c1c1c] p-5  mb-5 rounded '>
        <div className='flex justify-between bg-red-700 border-2 border-black px-5 py-2 mb-2 rounded-md h-10'>
                        <h2 className='w-1/5 text-blue-600 '>Name</h2>
                        <h3 className='w-1/5'>New Task</h3>
                        <h5 className='w-1/5 '>Active Task</h5>
                        <h5 className='w-1/5 '>Completed</h5>
                        <h5 className='w-1/5 '>Failed</h5>
        </div>
        <div className='overflow-auto'>
        {authData.employees.map((elem,idx)=>{
            return  <div key={idx} className='flex justify-between bg-black border border-red-500 p-4 px-5 py-2 mb-2 rounded-md h-10 '>
                        <h2 className='w-1/5'>{elem.name} </h2>
                        <h3 className='w-1/5'>{elem.taskNumbers.newTask} </h3>
                        <h5 className='w-1/5'>{elem.taskNumbers.active} </h5>
                        <h5 className='w-1/5 text-green-500'>{elem.taskNumbers.completed} </h5>
                        <h5 className='w-1/5'>{elem.taskNumbers.failed} </h5>
                    </div>
        })}
        </div>
            
    </div>
    </>
  )
}

export default AllTask