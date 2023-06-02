import { useState } from "react"
import { Formik, Form } from "formik"
import { Link, useNavigate } from "react-router-dom"
import WarningError from "../../components/Forms/Formik/WarningError/WarningError"
import FormikControl from "../../components/Forms/Formik/FormikControl/FormikControl"
import * as Yup from "yup"
import axios from "axios"
import barangayImage from "../../assets/images/Barangay.jpeg"
import logo from "../../assets/images/logo.png"

const Login = () => {
  const navigate = useNavigate()
  const [incorrect, setIncorrect] = useState(false)
  const initialValues = {
    email: "",
    password: "",
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Must be a valid email")
      .required("Email is a required field"),
    password: Yup.string()
      .min(6, "Must be at least 6 characters")
      .max(20, "Must be at most 20 characters")
      .required("Password is a required field"),
  })

  axios.defaults.withCredentials = true
  const onSubmit = async (values) => {
    try {
      await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        values
      )
      navigate("/dashboard")
    } catch (error) {
      setIncorrect(true)
    }
  }

  return (
    <section className="bg-gray-100">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src={barangayImage}
            className="absolute inset-0 h-full w-full opacity-80 object-fill"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <Link className="block text-white max-w-max" to="/">
              <span className="sr-only">Home</span>
              <div>
                <img src={logo} alt="logo" className="object-cover h-28" />
              </div>
            </Link>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Admin Login
            </h2>
          </div>
        </section>

        <main
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <Link
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                to="/"
              >
                <span className="sr-only">Home</span>
                <div>
                  <img src={logo} alt="logo"/>
                </div>
              </Link>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Admin Login
              </h1>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              validateOnBlur={false}
              validateOnChange={false}
            >
              <Form className="mt-8 grid grid-cols-6 gap-6">
                <div
                  className={`${
                    incorrect ? "visible" : "hidden"
                  } col-span-6 sm:col-span-6`}
                >
                  <WarningError
                    warningTitle="Incorrect Account"
                    warningText="Incorrect Account Credential"
                  />
                </div>
                <div className="col-span-6">
                  <FormikControl
                    control="input"
                    type="text"
                    label="Email"
                    name="email"
                    placeholder="Enter an email"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6">
                  <FormikControl
                    control="input"
                    type="password"
                    label="Password"
                    name="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="col-span-15 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-green-400 bg-green-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-green-400 focus:outline-none focus:ring active:text-green-500"
                  >
                    Login
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </main>
      </div>
    </section>
  )
}

export default Login
