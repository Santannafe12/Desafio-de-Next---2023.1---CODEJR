import Image from 'next/image';
import styles from './destaques.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from '../Utils';
import { useRef, useState } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { applyDiscount, destaqueDescontos } from '../constants';
import { AiOutlineRight } from 'react-icons/ai';

export default function Destaques() {
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
        slidesToShow: 4,
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
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    return (
        <div className={styles.AppDestaques}>
            <div className={styles.DestaquesTop}>
                <div>
                    <h1>Destaques dos descontos dessa semana</h1>
                    <AiOutlineRight className={styles.DestaquesTopIcon} />
                </div>
                <div className={styles.arrowButtonsDestaques}>
                    <IoIosArrowDropleftCircle className={styles.prevButtonIconDestaques} onClick={goToPrev} />
                    <IoIosArrowDroprightCircle className={styles.nextButtonIconDestaques} onClick={goToNext} />
                </div>
            </div>
            <Slider {...settings} ref={sliderRef} >
                {destaqueDescontos.map((item, index) => {
                    return (
                        <div className={styles.card} key={index}>
                            <div className={styles.cardTopDestaques}>
                                <Image src={item.imageUrl} alt={item.alt} width={1440} height={2160} className={styles.DestaquesImg} quality={100} />
                            </div>
                            <div className={styles.cardInfo}>
                                <p>{item.info}</p>
                            </div>
                            <div className={styles.cardTitle}>
                                <h1>{item.name}</h1>
                            </div>
                            <div className={styles.cardBottomDestaques}>
                                <p className={styles.cardDiscountDestaques}>-{item.discount}</p>
                                <p className={styles.cardOldDestaques}>{item.price}</p>
                                <p>{applyDiscount(item.price, item.discount)}</p>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}