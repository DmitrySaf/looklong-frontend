import { useFormik } from 'formik'
import * as Yup from 'yup'

import PageContainer from '@/components/Layouts/PageContainer/PageContainer'
import { InputText } from '@/components/InputText'
import { InputCheckbox } from '@/components/InputCheckbox'
import { SubmitButton } from '@/components/SubmitButton'
import { InputPhoto } from '../../components/InputPhoto'

import { USERNAME_REGEX } from '@/shared/validators'

import './Registration.scss'

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  politics: false,
  notifications: false
}

const REQUIRED_MESSAGE = 'Required Field'

const validationSchema = Yup.object({
  username: Yup.string().matches(USERNAME_REGEX, 'Invalid Username').required(REQUIRED_MESSAGE),
  email: Yup.string().email('Invalid E-Mail').required(REQUIRED_MESSAGE),
  password: Yup.string().required(REQUIRED_MESSAGE),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'No match')
    .required(REQUIRED_MESSAGE),
  politics: Yup.boolean().required(REQUIRED_MESSAGE)
})

function Registration() {
  const { handleSubmit, getFieldProps, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values, formikHelpers) {
      console.log(values, formikHelpers)
    }
  })

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
            errorMessage={errors.username}
            {...getFieldProps('username')}
          />
          <InputText
            placeholder="E-mail"
            type="email"
            errorMessage={errors.email}
            {...getFieldProps('email')}
          />
          <InputText
            placeholder="Password"
            type="password"
            errorMessage={errors.password}
            {...getFieldProps('password')}
          />
          <InputText
            placeholder="Confirm password"
            type="password"
            errorMessage={errors.confirmPassword}
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
