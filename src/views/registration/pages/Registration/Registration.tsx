import { useFormik } from 'formik'

import PageContainer from '@/components/Layouts/PageContainer/PageContainer'
import { InputText } from '@/components/InputText'
import { InputCheckbox } from '@/components/InputCheckbox'
import { SubmitButton } from '@/components/SubmitButton'
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
  const { handleSubmit, getFieldProps, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values, formikHelpers) {
      console.log(values, formikHelpers)
    }
  })

  const getErrorMessage = (key: keyof typeof initialValues): string | undefined => {
    return touched[key] ? errors[key] : undefined
  }

  return (
    <PageContainer>
      <form className="registration" onSubmit={handleSubmit}>
        <h1 className="registration__header">Sign up</h1>
        <div className="registration__input-photo-wrapper">
          <InputPhoto />
        </div>
        <div className="registration__inputs">
          <InputText
            placeholder="Username"
            type="text"
            errorMessage={getErrorMessage('username')}
            {...getFieldProps('username')}
          />
          <InputText
            placeholder="E-mail"
            type="email"
            errorMessage={getErrorMessage('email')}
            {...getFieldProps('email')}
          />
          <InputText
            placeholder="Password"
            type="password"
            errorMessage={getErrorMessage('password')}
            {...getFieldProps('password')}
          />
          <InputText
            placeholder="Confirm password"
            type="password"
            errorMessage={getErrorMessage('confirmPassword')}
            {...getFieldProps('confirmPassword')}
          />
        </div>
        <div className="registration__policies">
          <InputCheckbox {...getFieldProps('politics')}>
            <a href="#">Politics</a> and <a href="#">cookie i vsya zalupa</a>
          </InputCheckbox>
          <InputCheckbox {...getFieldProps('notifications')}>
            <a href="#">Subcribe to notificates</a>
          </InputCheckbox>
        </div>
        <div className="registration__submit-button-wrapper">
          <SubmitButton text="Continue" />
        </div>
      </form>
    </PageContainer>
  )
}

export default Registration
