import React from 'react'

import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import { Blob } from '../Blob/Blob';

import './Slider.scss'
import '@brainhubeu/react-carousel/lib/style.css';

const Slider = props => {
    const { constructor } = props;
    const sliderConstructor = constructor.slider
    return (
        <div className="slider">
            <div className="container">
                <h1>{sliderConstructor.title}</h1>
                <Carousel
                    plugins={[
                        'infinite',
                        'arrows',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 3
                            }
                        },
                    ]}
                >
                    {sliderConstructor.items.map((item) => {
                        return (
                            <Blob
                                size="30vh"
                                style={{
                                    backgroundColor: "#fff",
                                }}
                                animationDuration="15s"
                            >
                                <img src={item.image} alt='slide' />
                            </Blob>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}

export default Slider;