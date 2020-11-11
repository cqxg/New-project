import React from 'react'
import parse from 'html-react-parser'

import { Blob } from 'react-blob'
import { useTranslation } from 'react-i18next';

import './About.scss'

const About = () => {
    const { t } = useTranslation();
    return (
        <div className="about">
            <Blob
                size="15vh"
                style={{
                    zIndex: -1,
                    backgroundColor: "#D5EFFB",
                    color: "white",
                    fontSize: "80vh",
                    position: 'absolute',
                    left: '12%',
                    top: '2%'
                }}
                animationDuration="15s"
            >
                <i className="fab fa-react"></i>
            </Blob>
            <Blob
                size="32vh"
                style={{
                    zIndex: -1,
                    backgroundColor: "#D5EFFB",
                    color: "white",
                    fontSize: "80vh",
                    position: 'absolute',
                    left: '20%'
                }}
                animationDuration="35s"
            >
                <i className="fab fa-react"></i>
            </Blob>

            <div className="container">
                <h1>About Island</h1>
                <div className="about__flex">
                    <div className="about__left">
                        <p>
                            {parse(t('LanzaroteAboutLeftBlock'))}
                        </p>
                    </div>
                    <div className="about__right">
                        <p>
                            {parse(t('LanzaroteAboutRightBlock'))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;