import React from 'react';

export const bubbleTexture = () => {
    const style = {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '115%',
        height: '120%',
        padding: '2rem',
    }
    return (
        <svg style={style} viewBox="0 0 200 200">
            <defs>
        <linearGradient id="gradient--colors"
                    x1="0" y1="100%"
                    x2="100%" y2="0">
                    <stop offset="0%"
                        stop-color="#E2ECF1" />
                    <stop offset="50%" 
                        stop-color="#E2ECF1" />
                    <stop offset="100%"
                        stop-color="#E2ECF1" />
                </linearGradient>

        <radialGradient id="gradient--colors-transparency"
                    fx="25%" fy="25%">
                    <stop offset="0%"
                        stop-color="black" />
                    <stop offset="30%"
                        stop-color="black"
                        stop-opacity=".2" />
                    <stop offset="97%"
                        stop-color="white"
                        stop-opacity=".4" />
                    <stop offset="100%"
                        stop-color="black" />
                </radialGradient>

        <mask id="mask--colors-transparency">
                    <rect fill="url(#gradient--colors-transparency)"
                        width="100%" height="100%"></rect>
                </mask>

        <radialGradient id="gradient--bw-light" fy="10%">
                    <stop offset="60%"
                        stop-color="black"
                        stop-opacity="0" />
                    <stop offset="90%"
                        stop-color="white"
                        stop-opacity=".25" />
                    <stop offset="100%"
                        stop-color="black" />
                </radialGradient>

        <mask id="mask--light-bottom">
                    <rect fill="url(#gradient--bw-light)"
                        width="100%" height="100%"></rect>
                </mask>

        <mask id="mask--light-top">
                    <rect fill="url(#gradient--bw-light)"
                        width="100%" height="100%"
                        transform="rotate(180, 100, 100)"></rect>
                </mask>

        <radialGradient id="gradient--spot" fy="20%">
                    <stop offset="10%"
                        stop-color="white"
                        stop-opacity=".7" />
                    <stop offset="70%"
                        stop-color="white"
                        stop-opacity="0" />
                </radialGradient>
            </defs>

            <ellipse rx="40" ry="20" cx="150" cy="150"
                fill="url(#gradient--spot)"
                transform="rotate(-225, 150, 150)">
            </ellipse>

            <circle r="50%" cx="50%" cy="50%"
                fill="#E2ECF1"
                mask="url(#mask--light-bottom)">
            </circle>

            <circle r="50%" cx="50%" cy="50%"
                fill="#E2ECF1"
                mask="url(#mask--light-top)">
            </circle>


            <ellipse rx="55" ry="25" cx="55" cy="55"
                fill="url(#gradient--spot)"
                transform="rotate(-45, 55, 55)">
            </ellipse>

            <circle r="50%" cx="50%" cy="50%"
                fill="url(#gradient--colors)"
                mask="url(#mask--colors-transparency)">
            </circle>

        </svg>
    )
}
