import styles from './display.module.scss'
import { displayBestSellers, displayMostPlayeds, displaySales } from '../constants';
import Image from 'next/image';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../Utils';
import { useRef, useState } from 'react';

export default function Display() {
    const sliderRef = useRef<Slider>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const goToNext = () => {
        sliderRef?.current?.slickNext();
    };

    const goToPrev = () => {
        sliderRef?.current?.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrows: false,
        beforeChange: (current: number, next: number) => setCurrentIndex(next),
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            }
        ],
    };

    return (
        <div className={styles.displayApp}>
            <Slider {...settings} ref={sliderRef} className={styles.sliderDisplay}>
                <div className={styles.bestSellers}>
                    <h1>Mais vendidos</h1>
                    {displayBestSellers.map(bestSeller => (
                        <div className={styles.displayInfo}>
                            <Image src={bestSeller.imageUrl} alt={''} width={200} height={180} />
                                <div>
                                    <p>{bestSeller.name}</p>
                                    <div className={styles.devices}>
                                        {bestSeller.devices.map(device => (
                                            <span>{device}</span>
                                        ))}
                                    </div>
                                    <div>
                                        111
                                    </div>
                                </div>
                                <div className={styles.bestSellersPrice}>
                                    <p>{bestSeller.discount}</p>
                                    <p>{bestSeller.price}</p>
                                    <p>{bestSeller.price}</p>
                                </div>
                        </div>
                    ))}
                </div>
                <div className={styles.mostPlayed}>
                <h1>Mais jogados</h1>
                    {displayMostPlayeds.map(mostPlayed => (
                        <div className={styles.displayInfo}>
                            <Image src={mostPlayed.imageUrl} alt={''} width={200} height={180} />
                            <div>
                                <p>{mostPlayed.name}</p>
                                <div className={styles.devices}>
                                    {mostPlayed.devices.map(device => (
                                        <span>{device}</span>
                                    ))}
                                </div>
                                <div>
                                </div>
                            </div>
                            <div>
                                <p>{mostPlayed.discount}</p>
                                <p>{mostPlayed.price}</p>
                                <p>{mostPlayed.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.displaySales}>
                <h1>Ofertas</h1>
                    {displaySales.map(sale => (
                        <div className={styles.displayInfo}>
                            <Image src={sale.imageUrl} alt={''} width={200} height={180} />
                            <div>
                                <p>{sale.name}</p>
                                <div className={styles.devices}>
                                    {sale.devices.map(device => (
                                        <span>{device}</span>
                                    ))}
                                </div>
                                <div>

                                </div>
                            </div>
                            <div>
                                <p>{sale.discount}</p>
                                <p>{sale.price}</p>
                                <p>{sale.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Slider>
        </div>
    )
}