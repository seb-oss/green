import React, { ChangeEvent, ChangeEventHandler } from 'react'

const useForm = () => {
  //Form values
  const [values, setValues] = React.useState({})
  //Errors
  const [errors, setErrors] = React.useState<Record<string, string>>({})

  const validate = (values: Record<string, any>) => {
    if (!values.email) {
      return null
    } else if (values.email) {
      setErrors({
        ...errors,
        email: 'Email address is not valid',
      })
    }

    return errors
  }

  //A method to handle form inputs
  const handleChange: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { type, value } = event.target

    //Let's set these values in state
    setValues({
      ...values,
      [type]: value,
    })
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    validate(values)
    console.log(values)
  }

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  }
}

export default useForm
