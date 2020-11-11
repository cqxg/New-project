import React from 'react'
import parse from 'html-react-parser'

import { Blob } from 'react-blob'
import { useTranslation } from 'react-i18next';

import './About.scss'

const About = () => {
    const { t } = useTranslation();

    const renderBlobs = () => {
        return (
            <>
                {/* Left blobs */}
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
                    animationDuration="25s"
                    animationTimingFunction="ease-in-out"
                >
                    <i className="fab fa-react"></i>
                </Blob>

                {/* Right blobs */}
                <Blob
                    size="40vh"
                    style={{
                        zIndex: -1,
                        backgroundColor: "#D5EFFB",
                        color: "white",
                        fontSize: "80vh",
                        position: 'absolute',
                        top: '15%',
                        height: '50vh',
                        right: '10%',
                    }}
                    animationDuration="50s"
                    animationTimingFunction="ease-in-out"
                >
                    <i className="fab fa-react"></i>
                </Blob>
                <Blob
                    size="10vh"
                    style={{
                        zIndex: -1,
                        backgroundColor: "#D5EFFB",
                        color: "white",
                        fontSize: "80vh",
                        position: 'absolute',
                        top: '15%',
                        right: '30%',
                    }}
                    animationDuration="30s"
                >
                    <i className="fab fa-react"></i>
                </Blob>
            </>
        )
    }

    return (
        <div className="about">
            {renderBlobs()}
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