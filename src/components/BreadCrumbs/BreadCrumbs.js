import React from 'react';
import { Link } from 'react-router-dom';
import './BreadCrumbs.scss';

const BreadCrumbs = (props) => {
  const { scheme } = props;
  const routes = [];

  switch (scheme) {
    case 'lanzarote':
      routes.push({ text: 'Main', link: '/' });
      routes.push({ text: '>' });
      routes.push({ text: 'About island', link: 'about' });
      break;
    case 'catalog':
      routes.push({ text: 'Main', link: '/' });
      routes.push({ text: '>' });
      routes.push({ text: 'Catalog', link: 'tours' });
      break;
    case 'grandTour':
      routes.push({ text: 'Main', link: '/' });
      routes.push({ text: '>' });
      routes.push({ text: 'Catalog', link: 'tours' });
      routes.push({ text: '>' });
      routes.push({ text: 'Grand Tour', link: 'grand-tour' });
      break;
    case 'northTour':
      routes.push({ text: 'Main', link: '/' });
      routes.push({ text: '>' });
      routes.push({ text: 'Catalog', link: 'tours' });
      routes.push({ text: '>' });
      routes.push({ text: 'North Tour', link: 'north-tour' });
      break;
    case 'southTour':
      routes.push({ text: 'Main', link: '/' });
      routes.push({ text: '>' });
      routes.push({ text: 'Catalog', link: 'tours' });
      routes.push({ text: '>' });
      routes.push({ text: 'South Tour', link: 'south-tour' });
      break;
    case 'cookies':
      routes.push({ text: 'Main', link: '/' });
      routes.push({ text: '>' });
      routes.push({ text: 'Our Policy', link: 'cookies' });
      break;
    case 'faq':
      routes.push({ text: 'Main', link: '/' });
      routes.push({ text: '>' });
      routes.push({ text: 'FAQ', link: 'faq' });
      break;
    case 'contacts':
      routes.push({ text: 'Main', link: '/' });
      routes.push({ text: '>' });
      routes.push({ text: 'Contacts', link: 'Contacts' });
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
