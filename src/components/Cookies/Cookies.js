import React from 'react';
import { Link } from 'react-router-dom'

import './Cookies.scss'

const Cookies = props => {
    const { handleCookies, cookies } = props;
    console.log(cookies)
    return (
        <div className="cookies">
            <div className="cookies__container">
                <p>By continuing to browse the site, you agree to the <Link to='/cookies'>cookie policy</Link></p>
                <button onClick={handleCookies}>Accept</button>
            </div>
        </div>
    )
}

export default Cookies;