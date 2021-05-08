import React, {Fragment} from 'react';
//import { NavLink } from 'react-router-dom';
import web from './images/1.jpg'; //import web from '../src/images/1.jpg'; //svg images pixels are very good, pixels faththe nhi hai
import Common from './Common';

const Home = () => {
  return <Fragment>
   <Common name='Celebrate and Enjoy with ' desc='We are the Team of Developers' imgsrc={web} visit='/services' button='Get Started'/>
  </Fragment>
}

export default Home;