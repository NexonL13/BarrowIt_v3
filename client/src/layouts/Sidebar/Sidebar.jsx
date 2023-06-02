import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx"
import { FiPackage, FiUsers } from "react-icons/fi"
import { AiOutlineCalendar, AiOutlineAudit } from "react-icons/ai"
import { MdOutlineApproval } from "react-icons/md"
import { RiAdminLine } from 'react-icons/ri'

const Sidebar = (props) => {
  const navigate = useNavigate()
  const superAccess = props.adminRole === 'Super Admin' ? 'visible' : 'hidden'
  const sidebarRoutes = [
    {section: "Dashboard", link:"", icon: <RxDashboard/>},
    {section: "Assets", link:"assets", icon:<FiPackage/>},
    {section: "Calendar", link:"calendar", icon:<AiOutlineCalendar/>},
    {section: "Admin Account", link:"admins", icon:<RiAdminLine/>, access: superAccess},
    {section: "User Account", link:"users", icon:<FiUsers/>, access: superAccess},
    {section: "Approval", link:"approval", icon:<MdOutlineApproval/>},
    {section: "Audit Trails", link: "trail", icon: <AiOutlineAudit/>, access: superAccess },
  ]
  return (
    <div className="drawer drawer-mobile">
  <input id="sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex-1 flex-col items-center justify-center">
    {/* <!-- Page content here --> */}
    <div className='min-h-screen p-10'>
    <Outlet />
    </div>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-64 bg-gray-100 text-base-content border border-r-gray-300">
      {/* <!-- Sidebar content here --> */}
      {
        sidebarRoutes.map((route, index)=> (
          <li onClick={() => navigate(route.link)} key={index} className={route.access}>
            <a><span className='text-green-400'>{route.icon}</span><span className='text-green-700'>{route.section}</span></a>
            </li>
        ))
      }
    </ul>
  
  </div>
</div>
  )
}

export default Sidebar