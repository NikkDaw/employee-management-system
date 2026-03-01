import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const { employees, updateEmployees } = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [date, setDate] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [assignTo, setAssignTo] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        const employeeIndex = employees.findIndex(
            (emp) => emp.name.toLowerCase() === assignTo.toLowerCase()
        )

        if (employeeIndex === -1) {
            alert(`No employee found with the name "${assignTo}". Please check the name.`)
            return
        }

        const newTask = {
            title: taskTitle,
            description: description,
            task: taskTitle,
            date: date,
            category: category,
            active: false,      
            newTask: true,      
            completed: false,
            failed: false
        }

       
        const updatedEmployees = [...employees]

        updatedEmployees[employeeIndex] = {
            ...updatedEmployees[employeeIndex],
            tasks: [...updatedEmployees[employeeIndex].tasks, newTask],
            taskNumbers: {
                ...updatedEmployees[employeeIndex].taskNumbers,
                newTask: updatedEmployees[employeeIndex].taskNumbers.newTask + 1
            }
        }

       
        updateEmployees(updatedEmployees)

        alert(`✅ Task "${taskTitle}" successfully assigned to ${employees[employeeIndex].name}!`)

        setTaskTitle('')
        setDescription('')
        setDate('')
        setCategory('')
        setAssignTo('')
    }

    return (
        <div>
            <form
                onSubmit={(e) => { submitHandler(e) }}
                className="flex gap-8 p-8 rounded-2xl shadow-lg max-w-5xl mx-auto"
            >
                <div className="flex flex-col gap-5 w-1/2">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-1">Task Title</h3>
                        <input
                            required
                            type="text"
                            placeholder="Make a UI design"
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm
                                    focus:outline-none focus:ring-2 focus:ring-red-500/30
                                    focus:border-red-500 transition"
                        />
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-1">Date</h3>
                        <input
                            required
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm
                                    focus:outline-none focus:ring-2 focus:ring-red-500/30
                                    focus:border-red-500 transition"
                        />
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-1">Assign to</h3>
                        <input
                            required
                            type="text"
                            placeholder="Employee Name"
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm
                                    focus:outline-none focus:ring-2 focus:ring-red-500/30
                                    focus:border-red-500 transition"
                        />
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-1">Category</h3>
                        <input
                            required
                            type="text"
                            placeholder="design, dev, etc"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm
                                    focus:outline-none focus:ring-2 focus:ring-red-500/30
                                    focus:border-red-500 transition"
                        />
                    </div>
                </div>

                <div className="flex flex-col w-1/2">
                    <h3 className="text-sm font-semibold text-gray-700 mb-1">Description</h3>
                    <textarea
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-sm resize-none
                                    focus:outline-none focus:ring-2 focus:ring-red-500/30
                                    focus:border-red-500 transition"
                    ></textarea>

                    <button
                        className="mt-5 bg-red-600 text-white py-3 rounded-lg text-sm font-semibold
                                    hover:bg-red-700 active:scale-95 transition"
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask