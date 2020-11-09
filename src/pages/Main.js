import React from 'react';
import { useTranslation } from 'react-i18next';
import { Blob } from 'react-blob'

const Main = () => {
    return (
        <>
            <Blob
                size="25vh"
                style={{
                    position: "absolute",
                    top: "25%%",
                    right: "75%",
                    zIndex: -1,
                    backgroundColor: "#21D4FD",
                    color: "white",
                    opacity: 1,
                    fontSize: "50vh"
                }}
                animationDuration="5s"
            >
                <i className="fab fa-react"></i>
            </Blob>
            <Blob
                size="25vh"
                style={{
                    position: "absolute",
                    top: "25%",
                    right: "55%",
                    zIndex: -1,
                    backgroundColor: "#21D4FD",
                    color: "white",
                    opacity: 1,
                    fontSize: "50vh"
                }}
                animationDuration="10s"
            >
                <i className="fab fa-react"></i>
            </Blob>
        </>
    )
}

export default Main;