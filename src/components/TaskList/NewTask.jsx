import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({ data, employeeId }) => {

    const { employees, updateEmployees } = useContext(AuthContext)

    
    const handleAccept = () => {

        const updatedEmployees = employees.map((emp) => {
            if (emp.id !== employeeId) return emp  

            const updatedTasks = emp.tasks.map((t) => {
                if (t.title === data.title && t.date === data.date) {
                    return { ...t, newTask: false, active: true }
                }
                return t  
            })

            return {
                ...emp,
                tasks: updatedTasks,
                taskNumbers: {
                    ...emp.taskNumbers,
                    newTask: emp.taskNumbers.newTask - 1,  
                    active: emp.taskNumbers.active + 1     
                }
            }
        })

        updateEmployees(updatedEmployees)
    }

    return (
        <>
            <div className='shrink-0 h-full w-77 bg-slate-900 text-slate-100 rounded-2xl p-5 border border-white/5 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200'>
                <div className='flex items-center justify-between'>
                    <h3 className='bg-red-500 rounded text-sm px-3 py-1'>{data.category}</h3>
                    <h4 className='text-slate-400'>{data.date}</h4>
                </div>
                <h2 className='text-lg mt-10 font-semibold text-white'>{data.title}</h2>
                <p className='text-sm mt-3 text-slate-400'>{data.description}</p>
                <div className='flex justify-between mt-15'>
                    <button
                        onClick={handleAccept}
                        className="bg-yellow-600/90 hover:bg-yellow-600 text-white text-xs font-medium px-3 py-1.5 rounded-md transition"
                    >
                        Accept Task
                    </button>
                </div>
            </div>
        </>
    )
}

export default NewTask