/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string,
  headerName?: string
}

const table_rows = [
  {
    title: "Software Engineer",
    date: "11/11/2022",
    skills: ["Python", "OpenAI", "PHP"],
    status: "Pending",
    iconStatus: "success",
    topCandidate: "Alvena Alvena",
    candidateAccuracy: "80%"
  },
  {
    title: "Scientist",
    date: "11/11/2022",
    skills: ["Research", "Databases"],
    status: "Accepted",
    iconStatus: "primary",
    topCandidate: "Max Meyer",
    candidateAccuracy: "89%"
  },
  {
    title: "Research Assistant",
    date: "01/12/2023",
    skills: ["Python", "React", "TypeScript"],
    status: "Rejected",
    iconStatus: "danger",
    topCandidate: "John Sharp",
    candidateAccuracy: "56%"
  }
]
const TablesWidget5: React.FC<Props> = ({className, headerName}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>{headerName}</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>{table_rows.length} results</span>
        </h3>
        <div className='card-toolbar'>
          <ul className='nav'>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bold px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_14_tab_1'
              >
                Month
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_14_tab_2'
              >
                Week
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4'
                data-bs-toggle='tab'
                href='#kt_table_widget_14_tab_3'
              >
                Day
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-4'>
        <div className='tab-content'>
          {/* begin::Tap pane */}
          <div className='tab-pane fade show active' id='kt_table_widget_14_tab_1'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4'>
                {/* begin::Table head */}
                <thead>
                  <tr className='border-0'>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-110px'></th>
                    <th className='p-0 min-w-50px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  {table_rows.map(val => <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/brand-logos/shell.svg')}
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        {val.title}
                      </a>
                      <span className='text-muted fw-semibold d-block'>{val.date}</span>
                    </td>
                    <td className='text-end text-muted fw-semibold'>{val.skills.join(", ")}</td>
                    
                    <td className='text-end'>
                      <span className={'badge badge-light-' + val.iconStatus}>{val.status}</span>
                    </td>
                    <td className='text-end text-muted fw-semibold'>{val.topCandidate}</td>
                    <td className='text-end text-muted fw-semibold'>
                    <span className='fw-bolder fs-6'>{val.candidateAccuracy}</span>
                    <div className='h-5px mx-3 w-100 bg-light mb-3'>
                    
                  <div
                    className={'bg-' + val.iconStatus +  ' rounded h-5px'}
                    role='progressbar'
                    style={{width: val.candidateAccuracy}}
                  ></div>
                </div>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr>
                  )}
                  {/* <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/brand-logos/telegram.svg')}
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                      Senior Software Engineer
                      </a>
                      <span className='text-muted fw-semibold d-block'>11/11/2022</span>
                    </td>
                    <td className='text-end text-muted fw-semibold'>Research, Databases</td>
                    <td className='text-end'>
                      <span className='badge badge-light-warning'>In Progress</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/brand-logos/vimeo.svg')}
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Head of IT
                      </a>
                      <span className='text-muted fw-semibold d-block'>Hardware, Software, Cloud Computing</span>
                    </td>
                    <td className='text-end text-muted fw-semibold'>Laravel,Metronic</td>
                    <td className='text-end'>
                      <span className='badge badge-light-primary'>Success</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr> */}
                  
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_14_tab_2'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4'>
                {/* begin::Table head */}
                <thead>
                  <tr className='border-0'>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-110px'></th>
                    <th className='p-0 min-w-50px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/brand-logos/plurk.svg')}
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Brad Simmons
                      </a>
                      <span className='text-muted fw-semibold d-block'>Movie Creator</span>
                    </td>
                    <td className='text-end text-muted fw-semibold'>React, HTML</td>
                    <td className='text-end'>
                      <span className='badge badge-light-success'>Approved</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/brand-logos/telegram.svg')}
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Popular Authors
                      </a>
                      <span className='text-muted fw-semibold d-block'>Most Successful</span>
                    </td>
                    <td className='text-end text-muted fw-semibold'>Python, MySQL</td>
                    <td className='text-end'>
                      <span className='badge badge-light-warning'>In Progress</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/brand-logos/bebo.svg')}
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Active Customers
                      </a>
                      <span className='text-muted fw-semibold d-block'>Movie Creator</span>
                    </td>
                    <td className='text-end text-muted fw-semibold'>AngularJS, C#</td>
                    <td className='text-end'>
                      <span className='badge badge-light-danger'>Rejected</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_14_tab_3'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4'>
                {/* begin::Table head */}
                <thead>
                  <tr className='border-0'>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-110px'></th>
                    <th className='p-0 min-w-50px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/brand-logos/kickstarter.svg')}
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Bestseller Theme
                      </a>
                      <span className='text-muted fw-semibold d-block'>Best Customers</span>
                    </td>
                    <td className='text-end text-muted fw-semibold'>ReactJS, Ruby</td>
                    <td className='text-end'>
                      <span className='badge badge-light-warning'>In Progress</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/brand-logos/bebo.svg')}
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Active Customers
                      </a>
                      <span className='text-muted fw-semibold d-block'>Movie Creator</span>
                    </td>
                    <td className='text-end text-muted fw-semibold'>AngularJS, C#</td>
                    <td className='text-end'>
                      <span className='badge badge-light-danger'>Rejected</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/brand-logos/vimeo.svg')}
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        New Users
                      </a>
                      <span className='text-muted fw-semibold d-block'>Awesome Users</span>
                    </td>
                    <td className='text-end text-muted fw-semibold'>Laravel,Metronic</td>
                    <td className='text-end'>
                      <span className='badge badge-light-primary'>Success</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/brand-logos/telegram.svg')}
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Popular Authors
                      </a>
                      <span className='text-muted fw-semibold d-block'>Most Successful</span>
                    </td>
                    <td className='text-end text-muted fw-semibold'>Python, MySQL</td>
                    <td className='text-end'>
                      <span className='badge badge-light-warning'>In Progress</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {TablesWidget5}
