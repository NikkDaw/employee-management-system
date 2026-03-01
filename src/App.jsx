import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserId, setLoggedInUserId] = useState(null)  

  const authData = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserId(userData.id)   
    }
  }, [])

  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    }
    else if (authData) {
      const employee = authData.employees.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserId(employee.id)  
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', id: employee.id }))
      }
    }
    else {
      alert('invalid credentials')
    }
  }

  const loggedInUserData = authData?.employees?.find(e => e.id === loggedInUserId) || null

  return (
    <>
      {!user
        ? (<Login handleLogin={handleLogin} />)
        : user === 'admin'
          ? (<AdminDashboard changeUser={setUser} />)
          : (<EmployeeDashboard changeUser={setUser} data={loggedInUserData} />)
      }
    </>
  )
}

export default App