/* eslint-disable jsx-a11y/anchor-is-valid */
import {StepProps} from '../IAppModels'

const Step6 = () => {
  return (
    <div className='pb-5' data-kt-stepper-element='content' style={{height: 300, overflow:'auto'}}>
      <div className='w-100'>
        {/*begin::Form Group */}
        <div className='fv-row'>
          {/* begin::Label */}
          {/* <label className='d-flex align-items-center fs-5 fw-semibold mb-4'>
            <span className='required'>Select Framework</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Specify your apps framework'
            ></i>
          </label> */}
          {/* end::Label */}
          {/*begin:Option */}
          <label className='d-flex align-items-center justify-content-between cursor-pointer mb-6'>
            <span className='d-flex align-items-center me-2'>
              <span className='symbol symbol-50px me-6'>
                <span className='symbol-label bg-light-warning'>
                  <i className='fab fa-html5 text-warning fs-2x'></i>
                </span>
              </span>

              <span className='d-flex flex-column'>
                <span className='fw-bolder fs-6'>HTML5</span>
                <span className='fs-7 text-muted'>Base Web Projec</span>
              </span>
            </span>

            <span className='form-check form-check-custom form-check-solid'>
              <input
                className='form-check-input'
                type='radio'
                name='appFramework'
                value='HTML5'
              />
            </span>
          </label>
          {/*end::Option */}

          {/*begin:Option */}
          <label className='d-flex align-items-center justify-content-between cursor-pointer mb-6'>
            <span className='d-flex align-items-center me-2'>
              <span className='symbol symbol-50px me-6'>
                <span className='symbol-label bg-light-success'>
                  <i className='fab fa-react text-success fs-2x'></i>
                </span>
              </span>

              <span className='d-flex flex-column'>
                <span className='fw-bolder fs-6'>ReactJS</span>
                <span className='fs-7 text-muted'>Robust and flexible app framework</span>
              </span>
            </span>

            <span className='form-check form-check-custom form-check-solid'>
              <input
                className='form-check-input'
                type='radio'
                name='appFramework'
                value='ReactJS'
              />
            </span>
          </label>
          {/*end::Option */}

          {/*begin:Option */}
          <label className='d-flex align-items-center justify-content-between cursor-pointer mb-6'>
            <span className='d-flex align-items-center me-2'>
              <span className='symbol symbol-50px me-6'>
                <span className='symbol-label bg-light-danger'>
                  <i className='fab fa-angular text-danger fs-2x'></i>
                </span>
              </span>

              <span className='d-flex flex-column'>
                <span className='fw-bolder fs-6'>Angular</span>
                <span className='fs-7 text-muted'>Powerful data mangement</span>
              </span>
            </span>

            <span className='form-check form-check-custom form-check-solid'>
              <input
                className='form-check-input'
                type='radio'
                name='appFramework'
                value='Angular'
              />
            </span>
          </label>
          {/*end::Option */}

          {/*begin:Option */}
          <label className='d-flex align-items-center justify-content-between cursor-pointer mb-6'>
            <span className='d-flex align-items-center me-2'>
              <span className='symbol symbol-50px me-6'>
                <span className='symbol-label bg-light-primary'>
                  <i className='fab fa-vuejs text-primary fs-2x'></i>
                </span>
              </span>

              <span className='d-flex flex-column'>
                <span className='fw-bolder fs-6'>Vue</span>
                <span className='fs-7 text-muted'>Lightweight and responsive framework</span>
              </span>
            </span>

            <span className='form-check form-check-custom form-check-solid'>
              <input
                className='form-check-input'
                type='radio'
                name='appFramework'
                value='Vue'
              />
            </span>
          </label>
          {/*end::Option */}

          {/*begin:Option */}
          <label className='d-flex align-items-center justify-content-between cursor-pointer mb-6'>
              <span className='d-flex align-items-center me-2'>
                <span className='symbol symbol-50px me-6'>
                  <span className='symbol-label bg-light-success'>
                    <i className='fas fa-database text-success fs-2x'></i>
                  </span>
                </span>

                <span className='d-flex flex-column'>
                  <span className='fw-bolder fs-6'>MySQL</span>
                  <span className='fs-7 text-muted'>Basic MySQL database</span>
                </span>
              </span>

              <span className='form-check form-check-custom form-check-solid'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='databaseSolution'
                  value='MySQL'
                  
                />
              </span>
            </label>
            {/*end::Option */}

            {/*begin:Option */}
            <label className='d-flex align-items-center justify-content-between cursor-pointer mb-6'>
              <span className='d-flex align-items-center me-2'>
                <span className='symbol symbol-50px me-6'>
                  <span className='symbol-label bg-light-danger'>
                    <i className='fab fa-google text-danger fs-2x'></i>
                  </span>
                </span>

                <span className='d-flex flex-column'>
                  <span className='fw-bolder fs-6'>Firebase</span>
                  <span className='fs-7 text-muted'>Google based app data management</span>
                </span>
              </span>

              <span className='form-check form-check-custom form-check-solid'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='databaseSolution'
                  value='Firebase'
                  
                />
              </span>
            </label>
            {/*end::Option */}

            {/*begin:Option */}
            <label className='d-flex align-items-center justify-content-between cursor-pointer mb-6'>
              <span className='d-flex align-items-center me-2'>
                <span className='symbol symbol-50px me-6'>
                  <span className='symbol-label bg-light-warning'>
                    <i className='fab fa-amazon text-warning fs-2x'></i>
                  </span>
                </span>

                <span className='d-flex flex-column'>
                  <span className='fw-bolder fs-6'>DynamoDB</span>
                  <span className='fs-7 text-muted'>Amazon Fast NoSQL Database</span>
                </span>
              </span>

              <span className='form-check form-check-custom form-check-solid'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='databaseSolution'
                  value='DynamoDB'                
                />
              </span>
            </label>
            {/*end::Option */}

        </div>
        {/*end::Form Group */}
      </div>
    </div>
  )
}

export {Step6}
