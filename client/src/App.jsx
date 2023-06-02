import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Login from "./pages/Login/Login"
import Dashboard from "./pages/Dashboard/Dashboard"
import Reports from "./pages/Reports/Reports"
import Calendar from "./pages/Calendar/Calendar"
import Users from "./pages/Users/Users"
import Approval from "./pages/Approval/Approval"
import ProfileCard from "./pages/ProfileCard/ProfileCard"
import Admins from "./pages/Admins/Admins"
import AddAdmin from "./components/Admins/Services/AddAdmin/AddAdmin"
import UpdateAdmin from "./components/Admins/Services/UpdateAdmin/UpdateAdmin"
import Assets from "./pages/Assets/Assets"
import AddAsset from "./components/Assets/Services/AddAsset/AddAsset"
import UpdateAsset from "./components/Assets/Services/UpdateAsset/UpdateAsset"
import AuditTrail from "./pages/AuditTrail/AuditTrail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Reports />} />
          <Route path="assets" element={<Assets />} />
          <Route path="add_asset" element={<AddAsset />} />
          <Route path="update_asset/:id" element={<UpdateAsset />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="admins" element={<Admins />} />
          <Route path="add_admin" element={<AddAdmin />} />
          <Route path="update_admin/:id" element={<UpdateAdmin />} />
          <Route path="users" element={<Users />} />
          <Route path="approval" element={<Approval />} />
          <Route path="trail" element={<AuditTrail />} />
          <Route path="profile" element={<ProfileCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
