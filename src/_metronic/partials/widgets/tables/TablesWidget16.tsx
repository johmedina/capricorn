/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const TablesWidget16: React.FC<Props> = ({className}) => {
    return (
      <div className={`card ${className}`}>
        {/* begin::Header */}
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Softskills Evaluation</span>
          </h3>
          <div className='card-toolbar'>
            {/* begin::Menu */}
            <button
              type='button'
              className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
              data-kt-menu-flip='top-end'
            >
              <KTIcon iconName='category' className='fs-2' />
            </button>
            {/* begin::Menu 1 */}
            <Dropdown1 />
            {/* end::Menu 1 */}
            {/* end::Menu */}
          </div>
        </div>
        <div className='d-flex flex-wrap flex-stack'>
              <div className='d-flex flex-column flex-grow-1 pe-8'>
                <div className='d-flex flex-wrap' style={{marginLeft: 100}}>
                  
                  <div className='border border-gray-300 border-dashed rounded min-w-220px py-7 px-20 me-10 mb-10 mr-10'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='arrow-up' className='fs-3 text-success me-2' />
                      <div className='fs-2 fw-bolder'>80%</div>
                    </div>
                    <div className='fw-bold fs-6 text-gray-400'>Confident</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-220px py-7 px-18 me-10 mb-10 mr-10'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='arrow-down' className='fs-3 text-danger me-2' />
                      <div className='fs-2 fw-bolder'>50%</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Hesitant</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-220px py-7 px-20 me-10 mb-10 mr-10'>
                    <div className='d-flex align-items-center'>
                    <KTIcon iconName='arrow-down' className='fs-3 text-danger me-2' />
                      <div className='fs-2 fw-bolder'>50%</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Entusiastic</div>
                  </div>
                  <div className='border border-gray-300 border-dashed rounded min-w-220px py-7 px-18 me-10 mb-10 mr-10'>
                    <div className='d-flex align-items-center'>
                    <KTIcon iconName='arrow-down' className='fs-3 text-danger me-2' />
                      <div className='fs-2 fw-bolder'>50%</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Reserved</div>
                  </div>
                </div>
                
              </div>
            </div>
            <div className='d-flex flex-wrap flex-stack'>
              <div className='d-flex flex-column flex-grow-1 pe-8'>
                <div className='d-flex flex-wrap' style={{marginLeft: 100}}>
                  <div className='border border-gray-300 border-dashed rounded min-w-220px py-7 px-20 me-10 mb-10 mr-10'>
                    <div className='d-flex align-items-center'>
                    <KTIcon iconName='arrow-up' className='fs-3 text-success me-2' />
                      <div className='fs-2 fw-bolder'>75%</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Positive</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-220px py-7 px-20 me-10 mb-10 mr-10'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='arrow-down' className='fs-3 text-danger me-2' />
                      <div className='fs-2 fw-bolder'>25%</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Negative</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-220px py-7 px-20 me-10 mb-10 mr-10'>
                    <div className='d-flex align-items-center'>
                    <KTIcon iconName='arrow-up' className='fs-3 text-success me-2' />
                      <div className='fs-2 fw-bolder'>90%</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Determined</div>
                  </div>
                  <div className='border border-gray-300 border-dashed rounded min-w-260px py-7 px-20 me-10 mb-10 mr-10'>
                    <div className='d-flex align-items-center'>
                    <KTIcon iconName='arrow-down' className='fs-3 text-danger me-2' />
                      <div className='fs-2 fw-bolder'>10%</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Doubtful</div>
                  </div>
                </div>
                
              </div>
            </div>
      </div>
    )
  }

export {TablesWidget16}

{/* <div className='d-flex flex-wrap flex-stack'>
              <div className='d-flex flex-column flex-grow-1 pe-8'>
                <div className='d-flex flex-wrap'>
                  <div className='border border-gray-300 border-dashed rounded min-w-220px py-7 px-20 me-10 mb-10 mr-10'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='arrow-up' className='fs-3 text-success me-2' />
                      <div className='fs-2 fw-bolder'>80%</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Confident</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-220px py-7 px-20 me-10 mb-10 mr-10'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='arrow-down' className='fs-3 text-danger me-2' />
                      <div className='fs-2 fw-bolder'>50%</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Enthusiastic</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-220px py-7 px-20 me-10 mb-10 mr-10'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='arrow-up' className='fs-3 text-success me-2' />
                      <div className='fs-2 fw-bolder'>75%</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Positive</div>
                  </div>
                  <div className='border border-gray-300 border-dashed rounded min-w-220px py-7 px-20 me-10 mb-10 mr-10'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='arrow-up' className='fs-3 text-success me-2' />
                      <div className='fs-2 fw-bolder'>75%</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Positive</div>
                  </div>
                </div>
                
              </div>

              <div className='d-flex align-items-center w-200px w-sm-300px flex-column mt-3'>
                <div className='d-flex justify-content-between w-100 mt-auto mb-2'>
                  <span className='fw-bold fs-6 text-gray-400'>Overall Score</span>
                  <span className='fw-bolder fs-6'>85%</span>
                </div>
                <div className='h-5px mx-3 w-100 bg-light mb-3'>
                  <div
                    className='bg-success rounded h-5px'
                    role='progressbar'
                    style={{width: '85%'}}
                  ></div>
                </div>
              </div>
            </div>
            <div className='d-flex flex-wrap flex-stack'>
              <div className='d-flex flex-column flex-grow-1 pe-8'>
                <div className='d-flex flex-wrap'>
                  <div className='border border-gray-300 border-dashed rounded min-w-220px py-7 px-20 me-10 mb-10 mr-10'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='arrow-up' className='fs-3 text-success me-2' />
                      <div className='fs-2 fw-bolder'>80%</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Hesi</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-220px py-7 px-20 me-10 mb-10 mr-10'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='arrow-down' className='fs-3 text-danger me-2' />
                      <div className='fs-2 fw-bolder'>50%</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Enthusiastic</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-220px py-7 px-20 me-10 mb-10 mr-10'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='arrow-up' className='fs-3 text-success me-2' />
                      <div className='fs-2 fw-bolder'>75%</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Positive</div>
                  </div>
                  <div className='border border-gray-300 border-dashed rounded min-w-220px py-7 px-20 me-10 mb-10 mr-10'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='arrow-up' className='fs-3 text-success me-2' />
                      <div className='fs-2 fw-bolder'>75%</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Positive</div>
                  </div>
                </div>
                
              </div>
            </div> */}