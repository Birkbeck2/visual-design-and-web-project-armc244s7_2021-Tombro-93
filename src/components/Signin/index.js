import React from 'react'
import { 
  Container,
  FormWrapper,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormButton, 
  FormInput,
  Text,
} from './SigninElements'
import Footer from '../Footer'
import Navbar from '../Navbar'

const SignIn = () => {
  return (
    <>

      <Container>
        <FormWrapper>
          <Icon to="/">SPRINT.</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your Account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Let's go!</FormButton>
              <Text>Forgot password?</Text>
            </Form>
          </FormContent>
        </FormWrapper>
      </Container>
    </>
  )
}

export default SignIn
