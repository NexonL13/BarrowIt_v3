import { Field, ErrorMessage } from "formik"
import TextError from "../TextError/TextError"

const TextArea = (props) => {
  const { label, name, ...rest } = props
  return (
    <>
      <label htmlFor={name} className="block text-sm font-medium text-gray-70">
        {label}
      </label>
      <Field
        as="textarea"
        id={name}
        name={name}
        {...rest}
        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm border py-2 px-2"
      />
      <ErrorMessage name={name} component={TextError} />
    </>
  )
}

export default TextArea
