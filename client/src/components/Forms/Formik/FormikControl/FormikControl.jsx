import React from "react"
import Input from "../Input/Input"
import TextArea from "../TextArea/TextArea"
import Select from "../Select/Select"
import RadioButtons from "../RadioButtons/RadioButtons"

const FormikControl = (props) => {
  const { control, ...rest } = props

  switch (control) {
    case "input":
      return <Input {...rest} />
    case "textarea":
      return <TextArea {...rest} />
    case "select":
      return <Select {...rest} />
    case "radio":
      return <RadioButtons {...rest} />
    default:
      return null
  }
}

export default FormikControl
