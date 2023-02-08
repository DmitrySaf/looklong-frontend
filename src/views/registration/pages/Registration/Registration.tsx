import { useFormik } from 'formik'
import { Link } from 'react-router-dom'

import PageContainer from '@/components/Layouts/PageContainer/PageContainer'
import { InputText } from '@/components/InputText'
import { InputCheckbox } from '@/components/InputCheckbox'
import { SubmitButton } from '@/components/SubmitButton'
import { InputPhoto } from '../../components/InputPhoto'
import { InputUsername } from '../../components/InputUsername'

import {
  createValidationSchema,
  usernameValidation,
  emailValidation,
  passwordValidation,
  confirmPasswordValidation,
  politicsValidation
} from '@/shared/validators'

import './Registration.scss'

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  politics: false,
  notifications: false
}

const validationSchema = createValidationSchema({
  username: usernameValidation(),
  email: emailValidation(),
  password: passwordValidation(),
  confirmPassword: confirmPasswordValidation(),
  politics: politicsValidation()
})

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

  return (
    <PageContainer>
      <form className="registration" onSubmit={handleSubmit}>
        <div className="registration__header-wrapper">
          <Link to={`..`} className="registration__router-link">
            <div className="registration__router-link-arrow">{'<-'}</div> look long/
          </Link>
          <h1 className="registration__header">Sign up</h1>
        </div>
        <div className="registration__input-photo-wrapper">
          <InputPhoto />
        </div>
        <div className="registration__inputs">
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
        </div>
        <div className="registration__policies">
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
        </div>
        <div className="registration__submit-button-wrapper">
          <SubmitButton text="Continue" disabled={!isValid || !dirty} />
        </div>
      </form>
    </PageContainer>
  )
}

export default Registration
