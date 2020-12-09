import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../Buttons/Button';
import RenderBackgroundBubbles from '../RenderBgBubbles';

import './Cookies.scss';

const Cookies = (props) => {
  const { handleCookies } = props;
  const { t } = useTranslation();
  return (
    <div className="cookies">
      {RenderBackgroundBubbles()}
      <div className="cookies__container">
        <p>
          By continuing to browse the site, you agree to the&nbsp;
          <Link to="/cookies">cookie policy</Link>
        </p>
        <Button onClick={handleCookies} type="secondary" text={t('cookieBtnText')} />
      </div>
    </div>
  );
};

export default Cookies;
