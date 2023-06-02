import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminModal = ({admin}) => {
  const navigate = useNavigate()
  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/auth/admin/${id}`).then(() => {
        navigate('/dashboard/admins')
    })
    } catch (error) {
     console.log(error.response.data) 
    }
  }
  return (
    <>
    <input type="checkbox" id="delete-admin" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure?
          </h3>
          <p className="py-4">
            Are you sure you want to delete this account?
          </p>
          <p>{`Name: ${admin?.firstName} ${admin?.middleName} ${admin?.lastName}`}</p>
          <p>{`Email: ${admin?.firstName}`}</p>
          <p>{`Role: ${admin?.role}`}</p>
          <div className="modal-action">
            <label htmlFor="delete-admin" className="btn" onClick={() => deleteHandler(admin?.id)}>
              Confirm
            </label>
            <label htmlFor="delete-admin" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminModal