import React, {Fragment} from 'react';
//import { NavLink } from 'react-router-dom';
//import web from './images/4.jpg';

const Card = (props) => {
  return <Fragment>
    
        <div className='col-md-4 col-10 mx-auto'>
            <div className="card">
                <img src={props.imgsrc} className="card-img-top" alt="services img" />
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">{props.desc}</p>
                  {/*<NavLink to="" className="btn btn-primary">Go</NavLink> */}
                  <a href={props.link} className="btn btn-primary">Visit Website</a> 
                </div>
              </div>
            </div>       
           
  </Fragment>
}

export default Card;