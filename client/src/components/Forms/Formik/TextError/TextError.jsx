import React from "react"

const TextError = (props) => {
  return (
    <>
      <label className="block text-xs font-medium text-red-400 italic">{`* ${props.children}.`}</label>
    </>
  )
}

export default TextError
