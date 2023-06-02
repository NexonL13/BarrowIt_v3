import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import ViewModal from '../../components/Approval/ViewModal/ViewModal'

const Approval = () => {
  return (
    <div className="overflow-x-auto">
      <div>
        <h1 className="text-xl font-medium py-5">Assets Approval</h1>
      </div>
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Purpose</th>
            <th>Status</th>
            <th>Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Purpose 1</td>
            <td><span className='badge badge-sm badge-accent'>Pending</span></td>
            <td className='flex space-x-5'>
              <button className='btn bg-gray-500 border-none btn-sm rounded-full'><AiOutlineCheck /></button>
              <button className='btn bg-gray-500 border btn-sm bg-transparent text-gray-900 font-medium hover:text-white rounded-full'><RxCross1 /></button>
            </td>
            <td><label htmlFor="purpose" className="badge badge-ghost badge-sm">View</label></td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Purpose 2</td>
            <td><span className='badge badge-sm badge-success text-white'>Approved</span></td>
            <td className='flex space-x-5'>
              <button className='btn bg-gray-500 border-none btn-sm rounded-full'><AiOutlineCheck /></button>
              <button className='btn bg-gray-500 border btn-sm bg-transparent text-gray-900 font-medium hover:text-white rounded-full'><RxCross1 /></button>
            </td>
            <td><label htmlFor="purpose" className="badge badge-ghost badge-sm">View</label></td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Purpose 3</td>
            <td><span className='badge badge-sm badge-success text-white'>Approved</span></td>
            <td className='flex space-x-5'>
              <button className='btn bg-gray-500 border-none btn-sm rounded-full'><AiOutlineCheck /></button>
              <button className='btn bg-gray-500 border btn-sm bg-transparent text-gray-900 font-medium hover:text-white rounded-full'><RxCross1 /></button>
            </td>
            <td><label htmlFor="purpose" className="badge badge-ghost badge-sm">View</label></td>
          </tr>
        </tbody>
      </table>
      <ViewModal />
    </div>
  )
}

export default Approval