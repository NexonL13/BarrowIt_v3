import Header from "../../layouts/Header/Header"
import Sidebar from "../../layouts/Sidebar/Sidebar"
import useFetch from "../../hooks/useFetch"
import { Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const Dashboard = () => {
  const [admin, setAdmin] = useState({})

  axios.defaults.withCredentials = true
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/auth/current")
      setAdmin(res.data)
    } catch (error) {
      setAdmin(undefined)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return typeof admin !== "undefined" ? (
    <div className="relative">
      <Header admin={admin} />
      <Sidebar adminRole={admin?.role} />
    </div>
  ) : (
    <Navigate to="/" />
  )
}

export default Dashboard
