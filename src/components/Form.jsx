import React from 'react'
import styled from 'styled-components'
import {Formik, Form, useField} from 'formik'
import * as Yup from 'yup'
import Flex from './Flex.jsx'

const StyledForm = styled.div`
  padding: 50px;
  width: 380px;
  background-color: lightgray;
  margin: 150px auto;
`

const StyledTextInput = styled.input`
  border: none;
  margin: 3px;
`

const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props)
    return (
        <>
            <Flex justifyContent={'space-between'}>
                <label htmlFor={props.id || props.name}>{label}</label>
                <StyledTextInput {...field} {...props} />
            </Flex>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
}

const Former = () => {
    return (
        <StyledForm>
            <Formik
                initialValues={{firstName: '', lastName: '', email: ''}}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string().email('Invalid email address').required('Required'),
                })}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                    }, 400)
                }}
            >
                <Form>
                    <MyTextInput
                        label="First Name"
                        name="firstName"
                        type="text"
                    />
                    <MyTextInput
                        label="Last Name"
                        name="lastName"
                        type="text"
                    />
                    <MyTextInput
                        label="Email"
                        name="email"
                        type="text"
                    />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </StyledForm>
    )
}

export default Former