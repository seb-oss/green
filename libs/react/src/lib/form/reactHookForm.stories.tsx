import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Form, Button } from '.'
import { Input } from './newInput/input'
import { SubmitHandler, useForm } from 'react-hook-form'

export default {
  title: 'Examples/React Hook Form',
}

export const Simple = () => {
  type Inputs = {
    example: string
    exampleRequired: string
  }

  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input label="Example" info="A simple text input" {...register('example')} />
      <Input label="Example required" info="A text input which must be filled in" {...register('exampleRequired')} required />
      <Button type="submit">Submit</Button>
    </Form>
  )
}