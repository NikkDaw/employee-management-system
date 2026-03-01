import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({ data, employeeId }) => {

    const { employees, updateEmployees } = useContext(AuthContext)

    const handleComplete = () => {
        const updatedEmployees = employees.map((emp) => {
            if (emp.id !== employeeId) return emp

            const updatedTasks = emp.tasks.map((t) => {
                if (t.title === data.title && t.date === data.date) {
                    return { ...t, active: false, completed: true }
                }
                return t
            })

            return {
                ...emp,
                tasks: updatedTasks,
                taskNumbers: {
                    ...emp.taskNumbers,
                    active: emp.taskNumbers.active - 1,       
                    completed: emp.taskNumbers.completed + 1 
                }
            }
        })

        updateEmployees(updatedEmployees)
    }

    const handleFailed = () => {
        const updatedEmployees = employees.map((emp) => {
            if (emp.id !== employeeId) return emp

            const updatedTasks = emp.tasks.map((t) => {
                if (t.title === data.title && t.date === data.date) {
                    return { ...t, active: false, failed: true }
                }
                return t
            })

            return {
                ...emp,
                tasks: updatedTasks,
                taskNumbers: {
                    ...emp.taskNumbers,
                    active: emp.taskNumbers.active - 1,  
                    failed: emp.taskNumbers.failed + 1    
                }
            }
        })

        updateEmployees(updatedEmployees)
    }

    return (
        <>
            <div className='shrink-0 h-full w-77 bg-zinc-900 rounded-2xl p-5 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200'>
                <div className='flex items-center justify-between'>
                    <h3 className='bg-red-500 rounded text-sm px-3 py-1'>{data.category}</h3>
                    <h4 className=''>{data.date}</h4>
                </div>
                <h2 className='text-xl mt-10 font-semibold'>{data.title}</h2>
                <p className='text-sm mt-3'>{data.description}</p>
                <div className='flex justify-between mt-15'>
                    <button
                        onClick={handleComplete}
                        className="bg-green-600/90 hover:bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded-md transition"
                    >
                        Mark as Completed
                    </button>
                    <button
                        onClick={handleFailed}
                        className="bg-rose-600/90 hover:bg-rose-600 text-white text-xs font-medium px-3 py-1.5 rounded-md transition"
                    >
                        Mark as Failed
                    </button>
                </div>
            </div>
        </>
    )
}

export default AcceptTask