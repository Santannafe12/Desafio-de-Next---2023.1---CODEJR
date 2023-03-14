import styles from './display.module.scss'
import { displayBestSellers, displayMostPlayeds, displaySales } from '../constants';
import Image from 'next/image';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../Utils';
import { useRef, useState } from 'react';
import { applyDiscount } from '../Destaques';

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
                <div className={styles.mostPlayed}>
                    <div className={styles.title}>
                        <h1>Mais vendidos</h1>
                        <button>Ver mais</button>
                    </div>
                    {displayBestSellers.map(bestSeller => (
                        <div className={styles.info}>
                            <Image src={bestSeller.imageUrl} alt={''} width={1440} height={2160} className={styles.image} />
                            <div className={styles.gameInfo}>
                                <p className={styles.gameName}>{bestSeller.name}</p>
                                <div className={styles.mostPlayedPrice}>
                                {bestSeller.discount !== '' && (
                                        <>
                                            <p className={styles.discount}>{bestSeller.discount}</p>
                                            <p className={styles.oldPrice}>{bestSeller.price}</p>
                                        </>
                                    )}
                                    <p className={styles.newPrice}>{bestSeller.discount !== '' ? applyDiscount(bestSeller.price, bestSeller.discount) : bestSeller.price}</p>
                                </div>
                                <div className={styles.devices}>
                                    {bestSeller.devices.map(device => (
                                        <span>{device}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.mostPlayed}>
                    <div className={styles.title}>
                        <h1>Mais jogados</h1>
                        <button>Ver mais</button>
                    </div>
                    {displayMostPlayeds.map(mostPlayed => (
                        <div className={styles.info}>
                            <Image src={mostPlayed.imageUrl} alt={''} width={1440} height={2160} className={styles.image} />
                            <div className={styles.gameInfo}>
                                <p className={styles.gameName}>{mostPlayed.name}</p>
                                <div className={styles.mostPlayedPrice}>
                                    {mostPlayed.discount !== '' && (
                                        <>
                                            <p className={styles.discount}>{mostPlayed.discount}</p>
                                            <p className={styles.oldPrice}>{mostPlayed.price}</p>
                                        </>
                                    )}
                                    <p className={styles.newPrice}>{mostPlayed.discount !== '' ? applyDiscount(mostPlayed.price, mostPlayed.discount) : mostPlayed.price}</p>
                                </div>
                                <div className={styles.devices}>
                                    {mostPlayed.devices.map(device => (
                                        <span>{device}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.mostPlayed}>
                    <div className={styles.title}>
                        <h1>Promoções</h1>
                        <button>Ver mais</button>
                    </div>
                    {displaySales.map(sale => (
                        <div className={styles.info}>
                            <Image src={sale.imageUrl} alt={''} width={1440} height={2160} className={styles.image} />
                            <div className={styles.gameInfo}>
                                <p className={styles.gameName}>{sale.name}</p>
                                <div className={styles.mostPlayedPrice}>
                                {sale.discount !== '' && (
                                        <>
                                            <p className={styles.discount}>{sale.discount}</p>
                                            <p className={styles.oldPrice}>{sale.price}</p>
                                        </>
                                    )}
                                    <p className={styles.newPrice}>{sale.discount !== '' ? applyDiscount(sale.price, sale.discount) : sale.price}</p>
                                </div>
                                <div className={styles.devices}>
                                    {sale.devices.map(device => (
                                        <span>{device}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Slider>
        </div>
    )
}