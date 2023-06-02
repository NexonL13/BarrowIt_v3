import * as Yup from 'yup'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Formik, Form} from 'formik'
import { useNavigate, useParams } from 'react-router-dom'
import FormikControl from '../../../Forms/Formik/FormikControl/FormikControl'
import WarningError from '../../../Forms/Formik/WarningError/WarningError'
import { AiOutlineRollback, AiOutlineEdit, AiOutlineUserDelete } from 'react-icons/ai'
import AdminModal from '../../AdminModal/AdminModal'
import useFetch from '../../../../hooks/useFetch'

const UpdateAdmin = () => {
  const navigate = useNavigate()
  const [exist,setExist] = useState(false)
  const params = useParams()

  const {data: admin} = useFetch(`http://localhost:3000/api/v1/auth/admin/${params.id}`)

  const dropdownOptions = [
    {key:"Chairman", value: "Chairman"},
    {key:"Property Custodian", value: "Property Custodian"},
    {key:"Admin Clerk", value: "Admin Clerk"},
    {key:"Secretary", value: "Secretary"},
    {key:"Super Admin", value: "Super Admin"},
  ]

  const initialValues= {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    role: ""
  }
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is a required field'),
    middleName: Yup.string().min(2, "Must be at least 2 characters").nullable(true),
    lastName: Yup.string().required('Last Name is a required field'),
    email: Yup.string().email('Must be a valid email').required('Email is a required field'),
    role: Yup.string().required("Role is a required field").notOneOf([""], "Select a valid role")
  })
  const onSubmit = async (values) => {
    try {
      await axios.put(`http://localhost:3000/api/v1/auth/admin/${params.id}`, values).then((res)=> {
      if(res.data.error) {
        setExist(true)
      }
      navigate('/dashboard/admins')
      })
    } catch (error) {
      console.log(error.response.data)
    }
    
  }

  const deleteAdmin = async () => {
    await axios.delete(`http://localhost:3000/auth/admin/${params.id}`).then(()=> {
      navigate('/dashboard/users')
    })
  }


  return (
  <section>
  <div className="lg:grid lg:min-h-screen lg:grid-cols-24">
    <main
      aria-label="Main"
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
      <div className='flex'>
      <h1 className="text-xl font-light">Update Admin</h1>
      <button onClick={() => navigate(-1)} className='ms-auto'><AiOutlineRollback className="text-blue-400 text-3xl"/></button>
      </div>
        <Formik
         initialValues={admin ?? initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit}
         validateOnBlur={false}
         validateOnChange={false}
         enableReinitialize={true}
        >
        <Form className="mt-8 grid grid-cols-6 gap-6">
        <div className={`${
          exist ? "visible" : "hidden"} col-span-6 sm:col-span-6`}>
        <WarningError warningTitle="Account Already Exist" warningText="This account is already used."/>
        </div>
          <div className="col-span-6 sm:col-span-2">
          <FormikControl
                control="input"
                type="text"
                label="First Name"
                name="firstName"
                placeholder="Enter your first name"
              />
          </div>

          <div className="col-span-6 sm:col-span-2 ">
          <FormikControl
                control="input"
                type="text"
                label="Middle Name"
                name="middleName"
                placeholder="M.I"
              />
          </div>

          <div className="col-span-6 sm:col-span-2">
          <FormikControl
                control="input"
                type="text"
                label="Last Name"
                name="lastName"
                placeholder="Enter your last name"
              />
          </div>

          <div className="col-span-6">
          <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
                placeholder="Enter an email"
              />
          </div>

          <div className="col-span-6">
          <FormikControl
            control="select"
            label="Admin Role"
            name="role"
            options={dropdownOptions}
            placeholder="Select a role"
          />
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4 sm:px-auto flex justify-normal">
            <button
              type="submit"
              className="inline-flex shrink-0 rounded-md border border-blue-400 bg-blue-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-400 focus:outline-none focus:ring active:text-blue-500 items-center"
              >
              <AiOutlineEdit className='text-lg'/>
              <span>Update</span>
            </button>
            <label htmlFor='delete-admin'
              type="submit"
              className="inline-flex shrink-0 rounded-md border border-red-400 bg-red-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-red-400 focus:outline-none focus:ring active:text-red-500"
              >
              <AiOutlineUserDelete className='text-lg'/>
              Delete
            </label>
          </div>
        </Form>
        </Formik>
      </div>
    </main>
  </div>
  <AdminModal admin={admin}/>
</section>
  )
}

export default UpdateAdmin