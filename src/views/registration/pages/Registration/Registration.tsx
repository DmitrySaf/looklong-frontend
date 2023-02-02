import PageContainer from '@/components/Layouts/PageContainer/PageContainer'
import { Input } from '@/components/Input'
import { InputCheckbox } from '@/components/InputCheckbox'
import { InputPhoto } from '../../components/InputPhoto'
import { SubmitButton } from '@/components/SubmitButton'

import './Registration.scss'

function Registration() {
  return (
    <PageContainer>
      <form className="registration">
        <h1 className="registration__header">Sign up</h1>
        <div className="registration__input-photo-wrapper">
          <InputPhoto />
        </div>
        <div className="registration__inputs">
          <div className="registration__box">My best username ever</div>
          <Input placeholder="E-mail" required />
          <Input placeholder="Password" required />
          <Input placeholder="Confirm password" required />
        </div>
        <div className="registration__policies">
          <InputCheckbox required>
            <a href="#">Politics</a>
            <span> and </span>
            <a href="#">cookie i vsya zalupa</a>
          </InputCheckbox>
          <InputCheckbox>
            <a href="#">Subcribe to notificates</a>
          </InputCheckbox>
        </div>
        <div className="registration__submit-button-wrapper">
          <SubmitButton text="Continue" disabled={true} />
        </div>
      </form>
    </PageContainer>
  )
}

export default Registration
