/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import { interviewdata } from './interviewdata'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

type Props = {
  className: string
}



const ListsWidget5: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header align-items-center border-0 mt-4'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='fw-bold mb-2 text-dark'>Transcript Analysis</span>
          <span className='text-muted fw-semibold fs-7'>Interview Chunks</span>
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
          {/* <Dropdown1 /> */}
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-5'>
        {/* begin::Timeline */}
        <div className='timeline-label'>
          {interviewdata.map((chunk, index) => {
            return(
              <div className='timeline-item'>
                {/* begin::Label */}
                <div className='timeline-label fw-bold text-gray-800 fs-6'>{chunk.time.begin.toFixed(2)}</div>
                {/* end::Label */}
                {/* begin::Badge */}
                <div className='timeline-badge'>
                  <i className='fa fa-genderless text-success fs-1'></i>
                </div>
                {/* end::Badge */}
                {/* begin::Content */}
                <div className='timeline-content d-flex'>
                <OverlayTrigger
                  placement='top'
                  overlay={
                    <Tooltip id={`tooltip-${index}`}>
                      {Object.keys(chunk.emotions).map((emotion) => {
                        return(
                          <div>{emotion}: {chunk.emotions[emotion].toFixed(2)} {"\n"}</div>
                        )
                      })}
                    </Tooltip>
                  }
                >
                  <span className='fw-bold text-gray-800 ps-3'>{chunk.text}</span>
                </OverlayTrigger>
                </div>
                {/* end::Content */}
              </div>
            )
            
          })}
          
           

       
          
          
        </div>
        {/* end::Timeline */}
      </div>
      {/* end: Card Body */}
    </div>
  )
}

export {ListsWidget5}
