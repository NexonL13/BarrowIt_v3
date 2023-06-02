import { Link, useNavigate } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import logo from "../../assets/images/logo.png"
import axios from "axios"

const Header = (props) => {
  const navigate = useNavigate()

  axios.defaults.withCredentials = true
  const logout = async () => {
    try {
      const { data } = await axios.delete(
        "http://localhost:3000/api/v1/auth/logout"
      )
      navigate(data.redirectUrl)
    } catch (error) {
      console.log("Something went wrong")
    }
  }

  return (
    <div className="navbar bg-gray-100 border border-b-gray-300">
      <div className="flex-1">
        <label
          htmlFor="sidebar"
          className="btn bg-transparent border-none text-orange-400 hover:bg-orange-500 hover:text-white drawer-button lg:hidden"
        >
          <GiHamburgerMenu />
        </label>
        <div className="normal-case text-xl flex align-middle justify-center items-center font-bold ps-5 group">
          <Link to="/dashboard" className="flex items-center cursor-pointer">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <span className="text-green-300 group-hover:text-green-600">
              Barrow
            </span>
            <span className="text-orange-400 group-hover:text-orange-700">
              It
            </span>
          </Link>
        </div>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                />
              </svg>

              <span className="badge badge-sm indicator-item">3</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">Notification</span>
              <span className="text-gray-400 text-ellipsis block">
                Lorem ipsum dolor sit amet.
              </span>
              <span className="text-gray-400 text-ellipsis block">
                Lorem ipsum dolor sit amet.
              </span>
              <span className="text-gray-400 text-ellipsis block">
                Lorem ipsum dolor sit amet.
              </span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block btn-sm">
                  Show All
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <span className="text-sm font-medium">{`${props.admin?.firstName} ${props.admin?.lastName}`}</span>
            <li onClick={() => navigate("profile")}>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li onClick={logout}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
