import React from 'react'
import logo from '../../assets/_Layer_.png'
import layer_img from '../../assets/_Layer_.png'
import './Service.css'
import ServiceDetails from '../../Components/contentField'
import addAccount from '../../assets/002-search.png'
import budget from '../../assets/001-budget.png'
import statistics from '../../assets/006-statistics.png'
import tax from '../../assets/005-tax.png'
import setting from '../../assets/004-setting.png'
import revenue from '../../assets/003-revenue.png'

const ServicePage = () => {
  return (
    <div className='service_container'>
      <h1>Services</h1>
      <div className='detail-container'>
      <ServiceDetails 
      srcTitle={"Audit and account"}
      src={`${addAccount}`}
      title={'Audit & account'}
      description={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"}
      />
      <ServiceDetails 
      srcTitle={"Budget and Projections"}
      src={`${budget}`}
      title={'Budget and Projections'}
      description={'Budget and Projections'}
      />
      <ServiceDetails 
      srcTitle={"Payroll & Bookkeeping"}
      src={`${revenue}`}
      title={'Payroll & Bookkeeping'}
      description={'Payroll & Bookkeeping'}
      />
      <ServiceDetails 
      srcTitle={"software Training & IT"}
      src={`${setting}`}
      title={'software Training & IT'}
      description={'software Training & IT'}
      />
      <ServiceDetails 
      srcTitle={"tax planning and return"}
      src={`${tax}`}
      title={'Tax planning & Return '}
      description={'Tax planning & Return'}
      />
      <ServiceDetails 
      srcTitle={"Management Information"}
      src={`${statistics}`}
      title={'Management Information'}
      description={'Management Information'}
      />
      </div>
    </div>
  )
}

export default ServicePage
