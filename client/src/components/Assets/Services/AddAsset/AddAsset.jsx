import * as Yup from "yup"
import axios from "axios"
import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useNavigate } from "react-router-dom"
import { AiOutlineRollback } from "react-icons/ai"
import FormikControl from "../../../Forms/Formik/FormikControl/FormikControl"
import TextError from "../../../Forms/Formik/TextError/TextError"

const AddAsset = () => {
  const navigate = useNavigate()
  const [fileName, setFileName] = useState()

  const initialValues = {
    image: "",
    name: "",
    brand: "",
    condition: "",
    category: "",
    acquired_date: "",
    lifespan: "",
    maintenance_date: "N/A",
  }

  const category = [
    { key: "Barangay Equipments", value: "Barangay Equipments" },
    { key: "Barangay Furnitures", value: "Barangay Furniture" },
    { key: "Emergency Equipments", value: "Emergency Equipments" },
    { key: "Event Equipments", value: "Event Equipments" },
    { key: "Event Furnitures", value: "Event Furnitures" },
    { key: "Vehicles", value: "Vehicles" },
  ]

  const condition = [
    { key: "Excellent", value: "Excellent" },
    { key: "Good", value: "Good" },
    { key: "Slightly Good", value: "Slightly Good" },
    { key: "Bad", value: "Bad" },
    { key: "Poorly Bad", value: "Poorly Bad" },
  ]

  const vehicleCondition = [
    { key: "Fully Operational", value: "Fully Operational" },
    { key: "Operational", value: "Operational" },
    { key: "Maintenance", value: "Maintenance" },
    { key: "For Repairing", value: "For Repairing" },
  ]

  const MAX_FILE_SIZE = 10 * 1024 * 1024 //10MB

  const validFileExtensions = {
    image: ["jpg", "gif", "png", "jpeg", "svg", "webp"],
  }

  function isValidFileType(fileName, fileType) {
    return (
      fileName &&
      validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
    )
  }

  const validationSchema = Yup.object({
    image: Yup.mixed()
      .required("Image is required")
      .test("is-valid-type", "Not a valid image type", (value) =>
        isValidFileType(value && value.name, "image")
      )
      .test(
        "is-valid-size",
        "Max allowed size is 10MB",
        (value) => value && value.size <= MAX_FILE_SIZE
      ),
    name: Yup.string().required("Asset Name is a required field"),
    brand: Yup.string().required("Brand is a required field"),
    condition: Yup.string()
      .required("Condition is a required field")
      .notOneOf([""], "Select a valid condition"),
    category: Yup.string()
      .required("Category is a required field")
      .notOneOf([""], "Select a valid category"),
    acquired_date: Yup.string().required("Acquired Date is a required field"),
    lifespan: Yup.string().required("Lifespan is a required field"),
  })

  axios.defaults.withCredentials = true
  const onSubmit = async (values) => {
    const formData = new FormData()
    for (let value in values) {
      formData.append(value, values[value])
    }
    try {
      await axios
        .post("http://localhost:3000/api/v1/asset/add", formData)
        .then((res) => {
          navigate("/dashboard/assets")
        })
    } catch (error) {
      console.log("Something went wrong")
    }
  }

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-none">
        <main
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <div className="flex justify-between">
              <h1 className="text-xl font-light">Add Asset</h1>
              <button onClick={() => navigate(-1)}>
                <AiOutlineRollback className="text-orange-500 text-3xl" />
              </button>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              validateOnBlur={false}
              validateOnChange={false}
            >
              {(formik) => (
                <Form className="mt-8 grid grid-cols-12 gap-6">
                  <Field name="image">
                    {() => (
                      <div className="col-span-12 bg-gray-100 rounded-lg shadow-inner h-40">
                        <input
                          type="file"
                          id="image"
                          name="image"
                          accept="image/*"
                          onChange={(e) => {
                            formik.setFieldValue("image", e.target.files[0])
                            setFileName(e.target.files[0].name)
                          }}
                          className="hidden"
                        />
                        <label
                          htmlFor="image"
                          className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
                        >
                          <p className="z-10 text-xs font-light text-center text-gray-500">
                            {fileName
                              ? `${fileName}`
                              : `Drag & Drop your files here`}
                          </p>
                          <svg
                            className="z-10 w-8 h-8 text-orange-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                          </svg>
                        </label>
                        <ErrorMessage name="image" component={TextError} />
                      </div>
                    )}
                  </Field>

                  <div className="col-span-12">
                    <FormikControl
                      control="input"
                      type="text"
                      label="Name"
                      name="name"
                      placeholder="Enter an asset name"
                    />
                  </div>

                  <div className="col-span-12">
                    <FormikControl
                      control="input"
                      type="text"
                      label="Brand"
                      name="brand"
                      placeholder="Enter an asset name"
                    />
                  </div>

                  <div className="col-span-12 sm:col-span-6">
                    <FormikControl
                      control="select"
                      label="Condition"
                      name="condition"
                      options={condition}
                      placeholder="Condition"
                    />
                  </div>

                  <div className="col-span-12 sm:col-span-6">
                    <FormikControl
                      control="select"
                      label="Category"
                      name="category"
                      options={category}
                      placeholder="Select a category"
                    />
                  </div>

                  <div className="col-span-6">
                    <FormikControl
                      control="input"
                      type="date"
                      label="Acquired Date"
                      name="acquired_date"
                    />
                  </div>

                  <div className="col-span-6">
                    <FormikControl
                      control="input"
                      type="date"
                      label="Lifespan"
                      name="lifespan"
                    />
                  </div>

                  <div className="col-span-12 sm:flex sm:items-center sm:gap-4 sm:px-auto">
                    <button
                      type="submit"
                      className="inline-block shrink-0 rounded-md border border-orange-500 bg-orange-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-500 focus:outline-none focus:ring active:text-orange-600 w-full"
                    >
                      Add Asset
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </main>
      </div>
    </section>
  )
}

export default AddAsset
