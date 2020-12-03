import React from 'react';
import { Link } from 'react-router-dom';
import './BreadCrumbs.scss';

const BreadCrumbs = (props) => {
  const { scheme } = props;
  const routes = [];

  switch (scheme) {
    case 'lanzarote':
      routes.push({ text: 'Main', link: '/' });
      routes.push({ text: 'About island' });
      break;
    case 'catalog':
      routes.push({ text: 'Main', link: '/' });
      routes.push({ text: 'Catalog' });
      break;
    case 'grandTour':
      routes.push({ text: 'Main', link: '/' });
      routes.push({ text: 'Catalog', link: 'tours' });
      routes.push({ text: 'Grand Tour' });
      break;
    default:
      break;
  }

  return (
    <div className="breadcrumbs">
      <div className="container">
        {routes.map((item) => (item.link ? <Link to={item?.link}>{item.text}</Link> : <span>{item.text}</span>))}
      </div>
    </div>
  );
};

export default BreadCrumbs;
