import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
//import web from './images/1.jpg'; //import web from '../src/images/1.jpg'; //svg images pixels are very good, pixels faththe nhi hai

const Common = (props) => {
  return <Fragment>
    <section id='header' className='d-flex align-items-center'>
    <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row'>
            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                <h1>{props.name} <strong className='brand-name'>KARTIKEY</strong></h1>
                <h2 className='my-3'>{props.desc}</h2>
                <div className='mt-3'>
                  <NavLink exact to={props.visit} className='btn-get-started'> {props.button} </NavLink>
                </div>
            </div>
            <div className='col-lg-6 order-1 order-lg-2 header-img'>
              <img src={props.imgsrc} className='img-fluid animated' alt={props.name}/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
}

export default Common;