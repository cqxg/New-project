import React, { useRef, useState } from 'react'

import './Audioplayer.scss'
import { PlayBtn, Time, Volume } from './Controls/Controls'

const Audioplayer = ({tourName}) => {
    const ref = useRef(null)
    const [status, setStatus] = useState(true);
    const [duration, setDuration] = useState(0)
    const [toggleVolume, setToggleVolume] = useState(false);
    const [volume, setVolume] = useState([100]);
    const [UI, setUI] = useState(false)
    const [expanded, setExpanded] = useState(false)

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 700 && !expanded && window.innerWidth > 768) setUI(true)
        else setUI(false)
        if (window.pageYOffset < 10) setExpanded(false)
    })

    // ref.current.play();
    const handle = {
        status: () => setStatus(!status),
        duration: (e) => setDuration(e),
        toggleVolume: (e) => setToggleVolume(e),
        setVolume: (e) => {
            setVolume(e)
            ref.current.volume = volume[0] / 100
        },
        play: () => ref.current?.play(),
        pause: () => ref.current?.pause()
    }

    const handleExpand = () => {
        setExpanded(true)
        setUI(false)
    }

    if (!status) handle.play()
    else handle.pause()

    const currentTime = ref.current?.currentTime
    const durationTime = ref.current?.duration

    return (
        <div className={`audioplayer ${UI ? 'small' : ''}`}>
            <PlayBtn handleStatus={handle.status} status={status}/>
            <div className="audioplayer__text">
                <h5>{tourName}</h5>
                <h6>Отрывок экскурсии</h6>
                <div className="audioplayer__progress">
                    <div className="audioplayer__progress-line" style={{width: `${currentTime / durationTime * 100}%`}}></div>
                </div>
                <Time seconds={durationTime - currentTime}/>
            </div>
            <Volume volume={volume} toggleVolume={toggleVolume} setVolume={handle.setVolume} handleToggleVolume={handle.toggleVolume}/>
            {UI ? <span onClick={() => handleExpand()}>Expand</span> : null}
            <audio onEnded={() => setStatus(!status)} onTimeUpdate={() => setDuration(duration + 1)} src="https://sound-pack.net/download/Sound_03720.mp3" ref={ref}/>
        </div>
    )
}

export default Audioplayer;