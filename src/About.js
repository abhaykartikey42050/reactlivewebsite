import React, {Fragment} from 'react';
import Common from './Common';
import web from './images/maxresdefault.jpg'; //import web from '../src/images/1.jpg'; //svg images pixels are very good, pixels faththe nhi hai

const About = () => {
  return <Fragment>
   <Common name='Welcome to About Us Page' desc='We are from DWX' imgsrc={web} visit='/contact' button='Contact Now'/>
  </Fragment>
}

export default About;