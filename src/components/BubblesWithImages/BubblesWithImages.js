import React from 'react'
import { useTranslation } from 'react-i18next';
import { Blob } from '../Blob/Blob';

import Button from '../Buttons/Button';
import './BubblesWithImages.scss'

const BubblesWithImages = props => {
    const { constructor } = props
    const bubbleConstructor = constructor.bubblesWithImages
    const { t } = useTranslation();
    console.log(constructor)

    const renderItems = () => {
        return bubbleConstructor.items.map((item, index) => {
            return (
                <div className={`bubblesWithImages__flex ${index % 2 === 0 ? '' : 'bubblesWithImages__flex-reverse'}`}>
                    <div className="bubblesWithImages__left">
                        <div className="bubblesWithImages__title">
                            {item.icon ? <img src={item.icon} alt="tour" /> : null}
                            <h3>{t(item.title)}</h3>
                        </div>
                        <p>{t(item.text)}</p>
                        <Button type={item.button.type} text={item.button.text} />
                    </div>
                    <div className="bubblesWithImages__right">
                        <Blob
                            size="380px"
                            style={{
                                backgroundColor: "#fff",
                            }}
                            animationDuration="15s"
                        >
                            <img src={item.image} alt={item.text} />
                        </Blob>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="bubblesWithImages">
            <div className="container">
                <div className="bubblesWithImages__buttons">
                    <h1>{t(bubbleConstructor.title)}</h1>
                    {bubbleConstructor.buttons ?
                        <div className="bubblesWithImages__buttons-items">
                            {bubbleConstructor.buttons.map((button) => {
                                return <Button type={button.type} icon={button.icon} text={button.text} />
                            })}
                        </div>
                        : null}
                </div>
                {renderItems()}
            </div>
        </div>
    )
}

export default BubblesWithImages