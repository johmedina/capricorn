/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React, {useState} from 'react'
import {KTIcon} from '../../../_metronic/helpers'
import {getLayout, ILayout, LayoutSetup, useLayout} from '../../../_metronic/layout/core'
import { Step6 } from '../../../_metronic/partials/modals/create-app-stepper/steps/Step6'
import { ListsWidget10 } from '../../../_metronic/partials/widgets/lists/ListsWidget10'


const gptInterviewQuestions = [
  `1. Can you discuss your experience in designing, developing, and maintaining feature-rich web applications and software systems using Angular 9, .NET CORE, and C# technologies?
  `,
  `2. How have you collaborated with cross-functional teams, including UI/UX designers and backend developers, to deliver high-quality and user-friendly applications?
  `,
  `3. Can you provide examples of how you have utilized Angular 9 and related technologies (RXJS, TypeScript) to create responsive and intuitive user interfaces that meet high standards of usability and performance?
  `,
  `4. Describe your experience in building and optimizing server-side applications using .NET CORE and C#, including API development and integration with various data sources and services.
  `,
  `5. Can you explain how you implement data models and interfaces for effective data manipulation and communication between front-end and back-end components?
  `,
  `6. Have you developed real-time features using SignalR to enable live updates and interactive user experiences within web applications? If so, can you provide examples?
  `,
  `7. How do you approach creating unit tests using TypeScript to ensure the stability and correctness of the codebase? Can you discuss your experience with automated testing practices?
  `,
  `8. How do you maintain clear and comprehensive technical documentation for the codebase, APIs, and other components?
  `,
  `9. Share your experience with participating in code reviews and performing code refactoring to enhance code maintainability and efficiency.
  `,
  `10. Can you discuss your experience in establishing strong relationships with internal and external stakeholders to understand their needs and provide regular updates on project status?
  `
]




const BuilderPage: React.FC = () => {
  const {setLayout} = useLayout()
  const [tab, setTab] = useState('Job Details')
  const [config, setConfig] = useState<ILayout>(getLayout())
  const [configLoading, setConfigLoading] = useState<boolean>(false)
  const [resetLoading, setResetLoading] = useState<boolean>(false)

  const [role, setRole] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [numOfCandidates, setNumOfCandidates] = useState("")
  const [evaluationPrompt,setEvaluationPrompt] = useState("")
  const [hardSkills, setHardSkills] = useState()
  const [softSkills,setSoftSkills] = useState()
  const [interviewQuestions, setInterviewQuestions] = useState()

  const updateData = (fieldsToUpdate: Partial<ILayout>) => {
    const updatedData = {...config, ...fieldsToUpdate}
    setConfig(updatedData)
  }

  const updateConfig = () => {
    setConfigLoading(true)
    try {
      LayoutSetup.setConfig(config)
    } catch (error) {
      setConfig(getLayout())
    }
    setTimeout(() => {
      setLayout(config)
      setConfigLoading(false)
    }, 1000)
  }

  const reset = () => {
    setResetLoading(true)
    setTimeout(() => {
      setConfig(getLayout())
      setResetLoading(false)
    }, 1000)
  }

  return (
    <>
      <div className='card mb-10'>
        <div className='card-body d-flex align-items-center py-8'>
          {/* begin::Icon */}
          <div className='d-flex h-80px w-80px flex-shrink-0 flex-center position-relative'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='text-primary h-75px w-75px h-lg-100px w-lg-100px position-absolute opacity-5'
            >
              <path
                fill='currentColor'
                d='M10.2,21.23,4.91,18.17a3.58,3.58,0,0,1-1.8-3.11V8.94a3.58,3.58,0,0,1,1.8-3.11L10.2,2.77a3.62,3.62,0,0,1,3.6,0l5.29,3.06a3.58,3.58,0,0,1,1.8,3.11v6.12a3.58,3.58,0,0,1-1.8,3.11L13.8,21.23A3.62,3.62,0,0,1,10.2,21.23Z'
              ></path>
            </svg>
            <KTIcon iconName='wrench' className='fs-2x fs-lg-3x text-primary position-absolute' />
          </div>
          {/* end::Icon */}

          {/* begin::Description */}
          <div className='ms-6'>
            <p className='list-unstyled text-gray-600 fw-bold fs-6 p-0 m-0'>
              The evluation builder is to assist your hiring process and configure your interview 
              specifications with the help of Capricorn which uses Generative AI.
            </p>
            {/* <p className='list-unstyled text-gray-600 fw-bold fs-6 p-0 m-0'>
              Also, you can configurate the Layout in the code (
              <code>src/_metronic/layout/core/DefaultLayoutConfig.ts</code> file). Don't forget
              clear your local storage when you are changing DefaultLayoutConfig.
            </p> */}
          </div>
          {/* end::Description */}
        </div>
      </div>
      <div className='card card-custom'>
        <div className='card-header card-header-stretch overflow-auto'>
          <ul
            className='nav nav-stretch nav-line-tabs fw-bold border-transparent flex-nowrap'
            role='tablist'
          >
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, {
                  active: tab === 'Job Details',
                })}
                onClick={() => setTab('Job Details')}
                role='tab'
              >
                Job Details
              </a>
            </li>

            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, {
                  active: tab === 'EvaluationPrompt',
                })}
                onClick={() => setTab('EvaluationPrompt')}
                role='tab'
              >
                Evaluation Prompt
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, {
                  active: tab === 'Hard Skills',
                })}
                onClick={() => setTab('Hard Skills')}
                role='tab'
              >
                Hard Skills
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, {
                  active: tab === 'Soft Skills',
                })}
                onClick={() => setTab('Soft Skills')}
                role='tab'
              >
                Soft Skills
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, {
                  active: tab === 'Interview Questions',
                })}
                onClick={() => setTab('Interview Questions')}
                role='tab'
              >
                Interview Questions
              </a>
            </li>
          </ul>
        </div>
        {/* end::Header */}

        {/* begin::Form */}
        <form className='form'>
          {/* begin::Body */}
          <div className='card-body'>
            <div className='tab-content pt-3'>
              <div className={clsx('tab-pane', {active: tab === 'Job Details'})}>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Role / Position:</label>
                  <div className='col-lg-9 col-xl-4'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      placeholder='Enter open position / role'
                      value={role}
                    />
                  </div>
                </div>

                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Starting date:</label>
                  <div className='col-lg-9 col-xl-4'>
                    <input
                      type='date'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      value={startDate}
                    />
                  </div>
                </div>

                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>End date:</label>
                  <div className='col-lg-9 col-xl-4'>
                    <input
                      type='date'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      value={endDate}
                    />
                  </div>
                </div>

                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Candidate threshold:</label>
                  <div className='col-lg-9 col-xl-4'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      placeholder='Maximum number of candidates to screen'
                      value={numOfCandidates}
                    />
                  </div>
                </div>

              </div>
              <div className={clsx('tab-pane', {active: tab === 'EvaluationPrompt'})}>
              <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Full Job Description:</label>
                  <div className='col-lg-9 col-xl-4'>
                    <textarea
                      rows={12}
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      placeholder='Enter the full job description which will be used to generate AI-driven interview 
                      questions and metrics for hard and soft skills which will be used to evaluate candidates.'
                      value={numOfCandidates}
                    />
                  </div>
                </div>
              </div>

              <div className={clsx('tab-pane', {active: tab === 'Soft Skills'})}>
                <div className='row mb-10' style={{alignSelf: 'center'}}>
                  <div className='col-lg-12 ' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button className='btn btn-primary text-end mb-5'>
                        Add Skill
                    </button>
                  </div>
                  <div className='col-lg-3 '></div>
                  <div className='col-lg-9 '>
                    <ListsWidget10 />
                  </div>
                </div>
              </div>

              <div className={clsx('tab-pane', {active: tab === 'Hard Skills'})}>
                <div className='row mb-10'>
                  <div className='col-lg-12 ' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button className='btn btn-primary text-end mb-5'>
                        Add Skill
                    </button>
                  </div>
                  <Step6 />
                </div>
              </div>

              <div className={clsx('tab-pane', {active: tab === 'Interview Questions'})}>
                <div className='row mb-10' style={{height: 400, overflow:'auto'}}>
                  <div className='col-lg-12 ' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button className='btn btn-primary text-end mb-5'>
                        Regenerate
                    </button>
                  </div>
                  {gptInterviewQuestions.map((question, index) => (
                    <div className='fs-3 mb-2'>
                      {question}
                    </div>
                  ))}
                  
                </div>
              </div>
            </div>
          </div>
          {/* end::Body */}

          {/* begin::Footer */}
          <div className='card-footer py-6'>
            <div className='row'>
              <div className='col-lg-3'></div>
              <div className='col-lg-9'>
                <button type='button' onClick={updateConfig} className='btn btn-primary me-2'>
                  {!configLoading && <span className='indicator-label'>Next</span>}
                  {configLoading && (
                    <span className='indicator-progress' style={{display: 'block'}}>
                      Please wait...{' '}
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  )}
                </button>

                <button
                  type='button'
                  id='kt_layout_builder_reset'
                  className='btn btn-active-light btn-color-muted'
                  onClick={reset}
                >
                  {!resetLoading && <span className='indicator-label'>Reset</span>}
                  {resetLoading && (
                    <span className='indicator-progress' style={{display: 'block'}}>
                      Please wait...{' '}
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* end::Footer */}
        </form>
        {/* end::Form */}
      </div>
    </>
  )
}

export {BuilderPage}
