import React from "react"
import { Field, ErrorMessage } from "formik"
import TextError from "../TextError/TextError"

const Input = (props) => {
  const { label, name, ...rest } = props
  return (
    <>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        {...rest}
        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm border py-2 px-2"
      />
      <ErrorMessage name={name} component={TextError} />
    </>
  )
}

export default Input
