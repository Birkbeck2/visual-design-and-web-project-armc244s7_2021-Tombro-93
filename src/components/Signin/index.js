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

const SignIn = () => {
  return (
    <>

      <Container>
        <FormWrapper>
          <Icon to='/'>SPRINT.</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your Account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required placeholder="example@email.com" />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required placeholder='Must contain 8 characters' />
              <FormButton type='submit' to="/">Let's go!</FormButton>
              <Text>Forgot password?</Text>
            </Form>
          </FormContent>
        </FormWrapper>
      </Container>
    </>
  )
}

export default SignIn
