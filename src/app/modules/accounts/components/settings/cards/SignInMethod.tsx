/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {IUpdateEmail, IUpdatePassword, updateEmail, updatePassword} from '../SettingsModel'
import {connectedAccounts, IConnectedAccounts} from '../SettingsModel'
import { useNavigate } from 'react-router-dom'

const emailFormValidationSchema = Yup.object().shape({
  newEmail: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  confirmPassword: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const passwordFormValidationSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
  newPassword: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
  passwordConfirmation: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required')
    .oneOf([Yup.ref('newPassword')], 'Passwords must match'),
})

const SignInMethod: React.FC = () => {
  const [emailUpdateData, setEmailUpdateData] = useState<IUpdateEmail>(updateEmail)
  const [passwordUpdateData, setPasswordUpdateData] = useState<IUpdatePassword>(updatePassword)
  const [showEmailForm, setShowEmailForm] = useState<boolean>(false)
  const [fileUploaded, setFileUploaded] = useState<boolean>(false)
  const [showPasswordForm, setPasswordForm] = useState<boolean>(false)
  const [data, setData] = useState<IConnectedAccounts>(connectedAccounts)
  const [loading1, setLoading1] = useState(false)

  const navigate = useNavigate()

  const formik1 = useFormik<IUpdateEmail>({
    initialValues: {
      ...emailUpdateData,
    },
    validationSchema: emailFormValidationSchema,
    onSubmit: (values) => {
      setLoading1(true)
      setTimeout((values) => {
        setEmailUpdateData(values)
        setLoading1(false)
        setShowEmailForm(false)
      }, 1000)
    },
  })
  const updateData = (fieldsToUpdate: Partial<IConnectedAccounts>) => {
    const updatedData = {...data, ...fieldsToUpdate}
    setData(updatedData)
  }
  const [loading2, setLoading2] = useState(false)

  const formik2 = useFormik<IUpdatePassword>({
    initialValues: {
      ...passwordUpdateData,
    },
    validationSchema: passwordFormValidationSchema,
    onSubmit: (values) => {
      setLoading2(true)
      setTimeout((values) => {
        setPasswordUpdateData(values)
        setLoading2(false)
        setPasswordForm(false)
      }, 1000)
    },
  })

  return (
    <div className='card mb-5 mb-xl-10'>
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_account_signin_method'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>Upload Assessment</h3>
        </div>
      </div>

      <div id='kt_account_signin_method' className='collapse show'>
        <div className='card-body border-top p-9'>
          <div className='d-flex flex-wrap align-items-center'>
            <div id='kt_signin_email' className={' ' + (showEmailForm && 'd-none')}>
              <div className='fs-6 fw-bolder mb-1'>Assessment Type</div>
              <div className='fw-bold text-gray-600'>Audio</div>
            </div>

            <div
              id='kt_signin_email_edit'
              className={'flex-row-fluid ' + (!showEmailForm && 'd-none')}
            >
              <form
                onSubmit={formik1.handleSubmit}
                id='kt_signin_change_email'
                className='form'
                noValidate
              >
                <div className='row mb-6 '>
                  <div className='col-lg-6 mb-4 mb-lg-0'>
                    <div className='fv-row mb-10'>
                      <label htmlFor='emailaddress' className='form-label fs-6 fw-bolder mb-3'>
                        Enter Assessment Type
                      </label>
                      <div className='py-2'>
            <div className='d-flex flex-stack'>
              <div className='d-flex'>
              <img
                  src={toAbsoluteUrl('/media/svg/brand-logos/video_icon.png')}
                  className='w-50px me-4'
                  alt=''
                />
                <div className='d-flex flex-column mt-10'>
                  <a href='#' className='fs-5 text-dark text-hover-primary fw-bolder'>
                    Video
                  </a>
                  <div className='fs-6 fw-bold text-gray-400'>Formats: MP4, WEBM, MOV</div>
                </div>
              </div>
              <div className='d-flex justify-content-end mt-10'>
                <div className='form-check form-check-solid form-switch'>
                  <input
                    className='form-check-input w-45px h-30px'
                    type='checkbox'
                    id='googleswitch'
                    checked={data.google}
                    onChange={() =>
                      updateData({
                        google: !data.google,
                      })
                    }
                  />
                  <label className='form-check-label' htmlFor='googleswitch'></label>
                </div>
              </div>
            </div>

            <div className='separator separator-dashed my-5'></div>

            <div className='d-flex flex-stack'>
              <div className='d-flex'>
              <img
                  src={toAbsoluteUrl('/media/svg/brand-logos/audio_icon.png')}
                  className='w-50px me-4'
                  alt=''
                />
                <div className='d-flex flex-column'>
                  <a href='#' className='fs-5 text-dark text-hover-primary fw-bolder'>
                    Audio
                  </a>
                  <div className='fs-6 fw-bold text-gray-400'>Formats: MP3, WAV</div>
                </div>
              </div>
              <div className='d-flex justify-content-end'>
                <div className='form-check form-check-solid form-switch'>
                  <input
                    className='form-check-input w-45px h-30px'
                    type='checkbox'
                    id='githubswitch'
                    checked={data.github}
                    onChange={() =>
                      updateData({
                        github: !data.github,
                      })
                    }
                  />
                  <label className='form-check-label' htmlFor='githubswitch'></label>
                </div>
              </div>
            </div>

            <div className='separator separator-dashed my-5'></div>

            <div className='d-flex flex-stack'>
              <div className='d-flex'>
              <img
                  src={toAbsoluteUrl('/media/svg/brand-logos/text_icon.png')}
                  className='w-50px me-4'
                  alt=''
                />
                <div className='d-flex flex-column'>
                  <a href='#' className='fs-5 text-dark text-hover-primary fw-bolder'>
                    Text
                  </a>
                  <div className='fs-6 fw-bold text-gray-400'>Formats: TXT, DOCX</div>
                </div>
              </div>
              <div className='d-flex justify-content-end'>
                <div className='form-check form-check-solid form-switch'>
                  <input
                    className='form-check-input w-45px h-30px'
                    type='checkbox'
                    checked={data.stack}
                    onChange={() =>
                      updateData({
                        stack: !data.stack,
                      })
                    }
                  />
                  <label className='form-check-label' htmlFor='slackswitch'></label>
                </div>
              </div>
            </div>
          </div>
                    </div>
                  </div>
                  {/* <div className='col-lg-6'>
                    <div className='fv-row mb-0'>
                      <label
                        htmlFor='confirmemailpassword'
                        className='form-label fs-6 fw-bolder mb-3'
                      >
                        Confirm Password
                      </label>
                      <input
                        type='password'
                        className='form-control form-control-lg form-control-solid'
                        id='confirmemailpassword'
                        {...formik1.getFieldProps('confirmPassword')}
                      />
                      {formik1.touched.confirmPassword && formik1.errors.confirmPassword && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik1.errors.confirmPassword}</div>
                        </div>
                      )}
                    </div>
                  </div> */}
                </div>
                <div className='d-flex'>
                  <button
                    id='kt_signin_submit'
                    type='submit'
                    className='btn btn-primary  me-2 px-6'
                  >
                    {!loading1 && 'Update Format'}
                    {loading1 && (
                      <span className='indicator-progress' style={{display: 'block'}}>
                        Please wait...{' '}
                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                      </span>
                    )}
                  </button>
                  <button
                    id='kt_signin_cancel'
                    type='button'
                    onClick={() => {
                      setShowEmailForm(false)
                    }}
                    className='btn btn-color-gray-400 btn-active-light-primary px-6'
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>

            <div id='kt_signin_email_button' className={'ms-auto ' + (showEmailForm && 'd-none')}>
              <button
                onClick={() => {
                  setShowEmailForm(true)
                }}
                className='btn btn-light btn-active-light-primary'
              >
                Change Format
              </button>
            </div>
          </div>

          <div className='separator separator-dashed my-6'></div>

          <div className='d-flex flex-wrap align-items-center mb-10'>

            <div
              id='kt_signin_password_edit'
              className={'flex-row-fluid ' + (!showPasswordForm && 'd-none')}
            >
              <form
                onSubmit={formik2.handleSubmit}
                id='kt_signin_change_password'
                className='form'
                noValidate
              >
                <div className='row mb-1'>
                  <div className='col-lg-4'>
                    <div className='fv-row mb-0'>
                      <label htmlFor='currentpassword' className='form-label fs-6 fw-bolder mb-3'>
                        Current Password
                      </label>
                      <input
                        type='password'
                        className='form-control form-control-lg form-control-solid '
                        id='currentpassword'
                        {...formik2.getFieldProps('currentPassword')}
                      />
                      {formik2.touched.currentPassword && formik2.errors.currentPassword && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik2.errors.currentPassword}</div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='col-lg-4'>
                    <div className='fv-row mb-0'>
                      <label htmlFor='newpassword' className='form-label fs-6 fw-bolder mb-3'>
                        New Password
                      </label>
                      <input
                        type='password'
                        className='form-control form-control-lg form-control-solid '
                        id='newpassword'
                        {...formik2.getFieldProps('newPassword')}
                      />
                      {formik2.touched.newPassword && formik2.errors.newPassword && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik2.errors.newPassword}</div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='col-lg-4'>
                    <div className='fv-row mb-0'>
                      <label htmlFor='confirmpassword' className='form-label fs-6 fw-bolder mb-3'>
                        Confirm New Password
                      </label>
                      <input
                        type='password'
                        className='form-control form-control-lg form-control-solid '
                        id='confirmpassword'
                        {...formik2.getFieldProps('passwordConfirmation')}
                      />
                      {formik2.touched.passwordConfirmation && formik2.errors.passwordConfirmation && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik2.errors.passwordConfirmation}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className='form-text mb-5'>
                  Password must be at least 8 character and contain symbols
                </div>

                <div className='d-flex'>
                  <button
                    id='kt_password_submit'
                    type='submit'
                    className='btn btn-primary me-2 px-6'
                  >
                    {!loading2 && 'Update Password'}
                    {loading2 && (
                      <span className='indicator-progress' style={{display: 'block'}}>
                        Please wait...{' '}
                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                      </span>
                    )}
                  </button>
                  <button
                    onClick={() => {
                      setPasswordForm(false)
                    }}
                    id='kt_password_cancel'
                    type='button'
                    className='btn btn-color-gray-400 btn-active-light-primary px-6'
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className='notice d-flex bg-light-primary rounded border-primary border border-dashed p-6'>
            <KTIcon iconName='shield-tick' className='fs-2tx text-primary me-4' />
            <div className='d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap'>
              <div className='mb-3 mb-md-0 fw-bold'>
                <h4 className='text-gray-800 fw-bolder'>Upload the assessment here.</h4>
                <div className='fs-6 text-gray-600 pe-7'>
                  Make sure that you have informed the candidate that the assessment was recorded. 
                </div>
              </div>
              <label className="btn btn-primary px-6 align-self-center text-nowrap">
              {!loading1 && <span>Upload</span>}
                <input type="file" style={{ display: 'none' }} onChange={() => {
                  setLoading1(true);

                  setTimeout(() => {
                    setLoading1(false);
                    navigate("/crafted/account/overview");
                  }, 3000); // 3 seconds in milliseconds
                }}/>
                {loading1 && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {SignInMethod}
