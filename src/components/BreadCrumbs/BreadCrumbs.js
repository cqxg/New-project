import React from 'react'
import {Link} from 'react-router-dom'
import './BreadCrumbs.scss'   

const BreadCrumbs = props => {
    const { scheme } = props;
    const routes = []

    switch (scheme) {
        case 'lanzarote':
                routes.push({text: 'Main', link: '/'})
                routes.push({text: 'About island'})
            break;
        default:
            break;
    }
 
    return (
        <div className="breadcrumbs">
            <div className="container">
            {routes.map((item) => item.link ? <Link to={item?.link}>{item.text}</Link> : <span>{item.text}</span>)}
            </div>
        </div>
    )
}

export default BreadCrumbs