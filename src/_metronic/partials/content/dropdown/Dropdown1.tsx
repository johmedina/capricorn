/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export function Dropdown1() {
  return (
    <div className='menu menu-sub menu-sub-dropdown w-350px w-md-400px' data-kt-menu='true'>
      {/* •⁠  ⁠Team management: 
•⁠  ⁠Client management: The interviewee demonstrates an understanding of the importance of managing client expectations, establishing clear requirements, and effective communication. This suggests a proficiency in client management.
•⁠  ⁠Critical thinking: The interviewee showcases critical thinking skills by reflecting on the project and realizing the need to set clear requirements and boundaries with clients.
•⁠  ⁠Problem-solving: The interviewee mentions facing challenges with changes to the frontend but does not provide specific problem-solving examples. More information about their problem-solving skills is needed. */}
      <div className='px-7 py-5'>
        <div className='fs-5 text-dark fw-bolder'>⁠Team management</div>
        <span>The interviewee does not explicitly mention team management skills in the transcript. More information about their ability to manage teams is required.</span>
      </div>
      <div className='px-7 py-5'>
        <div className='fs-5 text-dark fw-bolder'>⁠Client management</div>
        <span>The interviewee demonstrates an understanding of the importance of managing client expectations, establishing clear requirements, and effective communication. This suggests a proficiency in client management.</span>
      </div>
      <div className='px-7 py-5'>
        <div className='fs-5 text-dark fw-bolder'>⁠Critical thinking</div>
        <span>The interviewee showcases critical thinking skills by reflecting on the project and realizing the need to set clear requirements and boundaries with clients.</span>
      </div>
      <div className='px-7 py-5'>
        <div className='fs-5 text-dark fw-bolder'>⁠Problem-solving</div>
        <span>The interviewee mentions facing challenges with changes to the frontend but does not provide specific problem-solving examples. More information about their problem-solving skills is needed.</span>
      </div>
      

      {/* <div className='px-7 py-5'>
        <div className='fs-5 text-dark fw-bolder'>Filter Options</div>
      </div>

      <div className='separator border-gray-200'></div>

      <div className='px-7 py-5'>
        <div className='mb-10'>
          <label className='form-label fw-bold'>Status:</label>

          <div>
            <select
              className='form-select form-select-solid'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              defaultValue={'1'}
            >
              <option></option>
              <option value='1'>Approved</option>
              <option value='2'>Pending</option>
              <option value='3'>In Process</option>
              <option value='4'>Rejected</option>
            </select>
          </div>
        </div>

        <div className='mb-10'>
          <label className='form-label fw-bold'>Member Type:</label>

          <div className='d-flex'>
            <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
              <input className='form-check-input' type='checkbox' value='1' />
              <span className='form-check-label'>Author</span>
            </label>

            <label className='form-check form-check-sm form-check-custom form-check-solid'>
              <input className='form-check-input' type='checkbox' value='2' defaultChecked={true} />
              <span className='form-check-label'>Customer</span>
            </label>
          </div>
        </div>

        <div className='mb-10'>
          <label className='form-label fw-bold'>Notifications:</label>

          <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              name='notifications'
              defaultChecked={true}
            />
            <label className='form-check-label'>Enabled</label>
          </div>
        </div>

        <div className='d-flex justify-content-end'>
          <button
            type='reset'
            className='btn btn-sm btn-light btn-active-light-primary me-2'
            data-kt-menu-dismiss='true'
          >
            Reset
          </button>

          <button type='submit' className='btn btn-sm btn-primary' data-kt-menu-dismiss='true'>
            Apply
          </button>
        </div>
      </div> */}
    </div>
  )
}
