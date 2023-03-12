import { useState } from 'react'
import { useFormik } from 'formik'

import PageContainer from '@/components/Layouts/PageContainer/PageContainer'
import { InputText } from '@/components/InputText'
import { InputCheckbox } from '@/components/InputCheckbox'
import { SubmitButton } from '@/components/SubmitButton'
import { InputPhoto } from '../../components/InputPhoto'
import { InputUsername } from '../../components/InputUsername'

import { createRegistrationFormPayload, initialValues } from '@/features/registration'

import {
  createValidationSchema,
  usernameValidation,
  emailValidation,
  passwordValidation,
  confirmPasswordValidation,
  politicsValidation
} from '@/shared/validators'

import {
  Header,
  Form,
  InputPhotoWrapper,
  InputsWrapper,
  Policies,
  SubmitButtonWrapper,
  RounterLink,
  RouterLinkArrow
} from './styled'

const validationSchema = createValidationSchema({
  username: usernameValidation(),
  email: emailValidation(),
  password: passwordValidation(),
  confirmPassword: confirmPasswordValidation(),
  politics: politicsValidation()
})

export function Registration() {
  const [loading, setLoading] = useState(false)
  const { handleSubmit, getFieldProps, errors, touched, isValid, dirty } = useFormik({
    initialValues,
    validationSchema,
    async onSubmit(values) {
      const data = createRegistrationFormPayload(values)

      setLoading(true)
      await fetch('http://cf57662.tw1.ru/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      setLoading(false)
    }
  })

  const getErrorMessage = (key: keyof typeof initialValues): string | undefined => {
    return touched[key] ? errors[key] : undefined
  }

  return (
    <PageContainer>
      <Form onSubmit={handleSubmit}>
        <div>
          <RounterLink to={`..`}>
            <RouterLinkArrow>{'<-'}</RouterLinkArrow> look long/
          </RounterLink>
          <Header>Sign up</Header>
        </div>
        <InputPhotoWrapper>
          <InputPhoto />
        </InputPhotoWrapper>
        <InputsWrapper>
          <InputUsername
            placeholder="Username"
            type="text"
            required
            errorMessage={getErrorMessage('username')}
            {...getFieldProps('username')}
          />
          <InputText
            placeholder="E-mail"
            type="email"
            required
            errorMessage={getErrorMessage('email')}
            {...getFieldProps('email')}
          />
          <InputText
            placeholder="Password"
            type="password"
            required
            errorMessage={getErrorMessage('password')}
            {...getFieldProps('password')}
          />
          <InputText
            placeholder="Confirm password"
            type="password"
            required
            errorMessage={getErrorMessage('confirmPassword')}
            {...getFieldProps('confirmPassword')}
          />
        </InputsWrapper>
        <Policies>
          <InputCheckbox
            required
            errorMessage={getErrorMessage('politics')}
            {...getFieldProps('politics')}
          >
            <a href="#">Politics</a> and <a href="#">cookie i vsya zalupa</a>
          </InputCheckbox>
          <InputCheckbox {...getFieldProps('notifications')}>
            <a href="#">Subcribe to notificates</a>
          </InputCheckbox>
        </Policies>
        <SubmitButtonWrapper>
          <SubmitButton text="Continue" disabled={!isValid || !dirty} loading={loading} />
        </SubmitButtonWrapper>
      </Form>
    </PageContainer>
  )
}
