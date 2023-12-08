import {useEffect} from 'react'
import {useIntl} from 'react-intl'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {
  TablesWidget5,
  TablesWidget15,
} from '../../../_metronic/partials/widgets'

const dashboardBreadCrumbs: Array<PageLink> = [
  {
    title: 'Home',
    path: '/dashboard',
    isSeparator: false,
    isActive: false,
  },
]

const DashboardPage = () => {
  useEffect(() => {
    // We have to show toolbar only for dashboard page
    document.getElementById('kt_layout_toolbar')?.classList.remove('d-none')
    return () => {
      document.getElementById('kt_layout_toolbar')?.classList.add('d-none')
    }
  }, [])

  return (
    <>
      <div className='row g-5 gx-xxl-8'>
        
        {/* end::Col */}
        <div className='col-xxl-12'>
          <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8' headerName="Previous Evaluations"/>
        </div>
        {/* begin::Col */}
        <div className='col-xxl-12'>
          <TablesWidget15 className='card-xxl-stretch mb-5 mb-xxl-8' headerName="Current Evaluations"/>
        </div>
        {/* end::Col */}
        <a
          href='#'
          className='btn btn-l btn-primary'
          data-bs-toggle='modal'
          data-bs-target='#kt_modal_offer_a_deal'
        >
          New Evaluation
        </a>
      </div>
      {/* end::Row */}
    </>
  )
}

const DashboardWrapper2 = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={dashboardBreadCrumbs}>
        {intl.formatMessage({id: 'MENU.DASHBOARD'})}
      </PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper2}
