import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext=  createContext()

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState({
        employees: [],
        admin: null
    })


    useEffect(() => {
        const data = getLocalStorage()

        if (!data.employees||!data.admin) {
            setLocalStorage()
        }

        const {employees,admin} = getLocalStorage()
        
        setUserData({
            employees: employees || [],
            admin: admin || null
        })
    }, [])

    const updateEmployees = (updatedEmployees) => {
        localStorage.setItem('employees', JSON.stringify(updatedEmployees))
        setUserData(prev => ({ ...prev, employees: updatedEmployees }))
    }
    
    return (
        <div>
            <AuthContext.Provider value={{...userData,updateEmployees}} >
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider