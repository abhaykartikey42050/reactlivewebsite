import React, {Fragment} from 'react';

const Footer = () => {
    var d = new Date();
    var Y = d.getFullYear();
    return <Fragment>
        <footer className='bg-light text-center'>
            <p>Kartikey © {Y} All Rights Reserved</p>
        </footer>
    </Fragment>
}

export default Footer;