import {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {BuilderPage} from './BuilderPage'

const BuilderPageWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Evaluation Builder</PageTitle>
      <BuilderPage />
    </>
  )
}

export default BuilderPageWrapper
