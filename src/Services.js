import React, {Fragment} from 'react';
import Card from './Card';
import SData from './Sdata';

const Services = () => {
  return <Fragment>
    <div className='my-5'>
      <h1 className='text-center'>Our Services</h1>
    </div>
    <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
          <div className='row gy-4'>
            {SData.map((val, key) => {
                return <Card key={key} imgsrc={val.imgsrc} title={val.title} desc={val.desc} link={val.link}/>
            })}
           </div>
          </div>
        </div>
      </div>
  </Fragment>
}

export default Services;