/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Card2} from '../../../../_metronic/partials/content/cards/Card2'
import {IconUserModel} from '../ProfileModels'
import { Link } from 'react-router-dom'

export function Projects2() {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          Candidates
          <span className='fs-6 text-gray-400 fw-bold ms-1'>Active</span>
        </h3>

        <div className='d-flex flex-wrap my-2'>
          <div className='me-4'>
            <select
              name='status'
              data-control='select2'
              data-hide-search='true'
              className='form-select form-select-sm form-select-white w-125px'
              defaultValue='Active'
            >
              <option value='Active'>Active</option>
              <option value='Approved'>In Progress</option>
              <option value='Declined'>To Do</option>
              <option value='In Progress'>Completed</option>
            </select>
          </div>
          <Link
            to='/crafted/new-account/new-settings'
            className='btn btn-primary btn-sm'
          >
            New Candidate
          </Link>
        </div>
      </div>

      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/avatars/300-6.jpg'
            badgeColor='primary'
            status='In Process'
            statusColor='warning'
            title='Emily Johnson'
            description='Qatar University'
            date='November 10, 2023'
            topSkill='Confidence'
            progress={72}
            users={users1}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/avatars/300-1.jpg'
            badgeColor='primary'
            status='In Process'
            statusColor='primary'
            title='Max Smith'
            description='Texas A&M'
            date='November 10, 2023'
            topSkill='Determination'
            progress={85}
            users={users2}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/avatars/300-2.jpg'
            badgeColor='primary'
            status='In Process'
            statusColor='primary'
            title='Sarah Davis'
            description='Hamad Bin Khalifa University'
            date='November 14, 2023'
            topSkill='Commitment'
            progress={95}
            users={users3}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/avatars/300-11.jpg'
            badgeColor='primary'
            status='In Process'
            statusColor='primary'
            title='David Miller'
            description='Carnegie Mellon University'
            date='November 14, 2023'
            topSkill='Positivity'
            progress={90}
            users={users4}
          />
        </div>

        {/* <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/avatars/300-4.jpg'
            badgeColor='primary'
            status='In Process'
            statusColor='warning'
            title='Jennifer Brown'
            description='Hamad Bin Khalifa University'
            date='November 14, 2023'
            topSkill='Determination'
            progress={68}
            users={users5}
          />
        </div> */}

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/avatars/300-5.jpg'
            badgeColor='danger'
            status='Rejected'
            statusColor='danger'
            title='Michael Wilson'
            description='University of Doha for Science and Tech'
            date='November 14, 2023'
            topSkill='Positivity'
            progress={45}
            users={users6}
          />
        </div>

       
      </div>

      <div className='d-flex flex-stack flex-wrap pt-10'>
        <div className='fs-6 fw-bold text-gray-700'>Showing 1 to 6 of 8 entries</div>

        <ul className='pagination'>
          <li className='page-item previous'>
            <a href='#' className='page-link'>
              <i className='previous'></i>
            </a>
          </li>

          <li className='page-item active'>
            <a href='#' className='page-link'>
              1
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              2
            </a>
          </li>

          

          <li className='page-item next'>
            <a href='#' className='page-link'>
              <i className='next'></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

const users1: Array<IconUserModel> = [
  {name: 'Emma Smith', avatar: '/media/avatars/300-6.jpg'},
  {name: 'Rudy Stone', avatar: '/media/avatars/300-1.jpg'},
  {name: 'Susan Redwood', initials: 'S', color: 'primary'},
]

const users2 = [
  {name: 'Alan Warden', initials: 'A', color: 'warning'},
  {name: 'Brian Cox', avatar: '/media/avatars/300-5.jpg'},
]

const users3 = [
  {name: 'Mad Masy', avatar: '/media/avatars/300-6.jpg'},
  {name: 'Cris Willson', avatar: '/media/avatars/300-1.jpg'},
  {name: 'Mike Garcie', initials: 'M', color: 'info'},
]

const users4 = [
  {name: 'Nich Warden', initials: 'N', color: 'warning'},
  {name: 'Rob Otto', initials: 'R', color: 'success'},
]

const users5 = [
  {name: 'Francis Mitcham', avatar: '/media/avatars/300-20.jpg'},
  {name: 'Michelle Swanston', avatar: '/media/avatars/300-7.jpg'},
  {name: 'Susan Redwood', initials: 'S', color: 'primary'},
]

const users6 = [
  {name: 'Emma Smith', avatar: '/media/avatars/300-6.jpg'},
  {name: 'Rudy Stone', avatar: '/media/avatars/300-1.jpg'},
  {name: 'Susan Redwood', initials: 'S', color: 'primary'},
]

const users7 = [
  {name: 'Meloday Macy', avatar: '/media/avatars/300-2.jpg'},
  {name: 'Rabbin Watterman', initials: 'S', color: 'success'},
]

const users8 = [
  {name: 'Emma Smith', avatar: '/media/avatars/300-6.jpg'},
  {name: 'Rudy Stone', avatar: '/media/avatars/300-1.jpg'},
  {name: 'Susan Redwood', initials: 'S', color: 'primary'},
]

const users9 = [
  {name: 'Meloday Macy', avatar: '/media/avatars/300-2.jpg'},
  {name: 'Rabbin Watterman', initials: 'S', color: 'danger'},
]
