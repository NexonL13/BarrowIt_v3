import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  axios.defaults.withCredentials = true
  const fetchData = async () => {
    try {
        const res = await axios.get(url)
        setData(res.data)
      } catch (error) {
        setError(error.response.data)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return { data, error }
}

export default useFetch