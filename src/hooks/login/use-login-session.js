import { useState, useEffect, useCallback } from "react"
import axios from "axios"
import jwtDecode from 'jwt-decode'
import { useNavigate } from "react-router-dom"

export function UseLoginSession() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const ClaimTypes = {
    Role: "role"
  }

  useEffect(() => {
    const token = localStorage.getItem("jwt")
    if (token) {
      setUser(jwtDecode(token))
    }
  }, [])



  const login = useCallback((username, password, captchaToken) => {
    setLoading(true)
    axios
      .post(`${process.env.REACT_APP_API}/api/login/user`, {
        "username": username,
        "password": password,
        "captchaToken": captchaToken,
      })
      .then((response) => { // gebruiker en jwt token zetten
        setUser(response.data.user);
        if(response.data.token != null){
          localStorage.setItem("jwt", response.data.token);
          const decoded = jwtDecode(response.data.token);
          const roles = decoded[ClaimTypes.Role];
          setUser({roles: roles});
        }
        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
        if (user === "Admin"){
          navigate("/admin");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const navigate = useNavigate()
  function logout() {
    localStorage.removeItem("jwt")
    delete axios.defaults.headers.common["Authorization"]
    setUser(null)
    navigate("/")
  }

  return { user, loading, error, login, logout, ClaimTypes }
}
