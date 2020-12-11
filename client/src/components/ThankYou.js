// Michal Franczel
import React from 'react';

import { Container, Alert} from 'reactstrap';
import NavBar from '../components/Navbar'
import ProductList from '../components/ProductList'
import axios from 'axios';

function ThankYou(props) {

    const openAd = () => {
        axios.post('/api/counter', {counterID: 1})
        window.open("http://www.5z8.info/this-page-will-steal-all-of-your-personal-data_p3h5ss_10101110010110101001", "_blank")
        window.location.replace('/')
    }

    return (
        <div>
            <Alert color="success">
                
                <div className="text-center">
                <h4 className="alert-heading">Thank you for your order!</h4>
                    <p>I. H. B. P. F. J. A. S. T. M. N. E.</p>
                    <p>Y. N. E. </p>
                    <p>D. M. M. K. Y. </p>
                    <p>A. M. A. I. T. T. R. T. D.</p>
                    <p>I. Y. A. N. W. M. T. Y. A. M. E.</p>
                    <p>O. A. S. D. I. A. I. W. D. W. I. M.</p>
                    <p>Y. W. T.</p>
                </div>
                <hr />
                <div className="text-center">
                    <a className="mb-0" onClick={()=> openAd()} >
                    BaNnEr - ClIcK HeRe
                    </a>
                </div>
            </Alert>
        </div>
    )
}

export default ThankYou