import { FormEvent } from 'react'
import { useFormik } from 'formik'

import PageContainer from '@/components/Layouts/PageContainer/PageContainer'
import { InputText } from '@/components/InputText'
import { InputCheckbox } from '@/components/InputCheckbox'
import { SubmitButton } from '@/components/SubmitButton'
import { FieldTooltip } from '@/components/FieldTooltip'
import { InputPhoto } from '../../components/InputPhoto'

import { REGISTRATION_VALIDATION_SCHEMA as validationSchema } from '@/shared/validators'

import './Registration.scss'

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  politics: false,
  notifications: false
}

function Registration() {
  const { handleSubmit, getFieldProps, errors, touched, isValid, dirty } = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values, formikHelpers) {
      console.log(values, formikHelpers)
    }
  })

  const getErrorMessage = (key: keyof typeof initialValues): string | undefined => {
    return touched[key] ? errors[key] : undefined
  }

  const handleSubmitFn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    handleSubmit()
  }

  return (
    <PageContainer>
      <form className="registration" onSubmit={handleSubmitFn}>
        <h1 className="registration__header">Sign up</h1>
        <div className="registration__input-photo-wrapper">
          <InputPhoto />
        </div>
        <div className="registration__inputs">
          <InputText
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
        </div>
        <div className="registration__policies">
          <FieldTooltip text={getErrorMessage('politics')}>
            <InputCheckbox required {...getFieldProps('politics')}>
              <a href="#">Politics</a> and <a href="#">cookie i vsya zalupa</a>
            </InputCheckbox>
          </FieldTooltip>
          <InputCheckbox {...getFieldProps('notifications')}>
            <a href="#">Subcribe to notificates</a>
          </InputCheckbox>
        </div>
        <div className="registration__submit-button-wrapper">
          <SubmitButton text="Continue" disabled={!isValid || !dirty} />
        </div>
      </form>
    </PageContainer>
  )
}

export default Registration
