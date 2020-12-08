import React from 'react'
import { useTranslation } from 'react-i18next';
import { Tab, Nav } from 'react-bootstrap'
import parse from 'html-react-parser';

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'

import './CookiesPage.scss'
import constructor from '../../constructors/constructor';
import Footer from '../../components/Footer/Footer';

const CookiesPage = () => {
    const { t } = useTranslation()

    const renderContent = (type) => {
        return constructor.cookies[type].map((item) => {
            const { subTitle, text } = item;
            return (
                <div className="cookiesPage__content">
                    <h3>{t(subTitle)}</h3>
                    <p>{parse(t(text))}</p>
                </div>
            )
        })
    }


    return (
        <div className="cookiesPage">
            <BreadCrumbs scheme="cookies" />
            <div className="container">
                <Tab.Container id="left-tabs-example" defaultActiveKey="terms">
                    <div className="cookiesPage__flex">
                        <div>
                            <Tab.Content>
                                <Tab.Pane eventKey="terms">
                                    <div className="cookiesPageTitle">
                                        <h1>{t('termsOfUse')}</h1>
                                        {renderContent('cookies')}
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="privacy">
                                    <div className="cookiesPageTitle">
                                        <h1>{t('privacyPolicy')}</h1>
                                        {renderContent('cookies')}
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="gdpr">
                                    <div className="cookiesPageTitle">
                                        <h1>{t('GDPR')}</h1>
                                        {renderContent('cookies')}
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="cookies">
                                    <div className="cookiesPageTitle">
                                        <h1>{t('cookiesTitle')}</h1>
                                        {renderContent('cookies')}
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                        <div>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="terms">{t('termsOfUse')}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="privacy">{t('privacyPolicy')}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="gdpr">{t('GDPR')}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="cookies">{t('cookiesPolicy')}</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                </Tab.Container>
            </div>
            <Footer />
        </div>
    )
}

export default CookiesPage