import Image from 'next/image';
import styles from './destaques.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from '../Utils';
import { useRef, useState } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { destaqueDescontos } from '../constants';
import { AiOutlineRight } from 'react-icons/ai';

export function applyDiscount(antigoValor: string, desconto: string) {
    const antigoValorNumber = parseFloat(antigoValor.replace('R$ ', '').replace(',', '.'));
    const descontoNumber = parseFloat(desconto.replace('%', ''));
    const novoValor = antigoValorNumber * (1 - descontoNumber/100);
    return `R$ ${novoValor.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}

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
                {destaqueDescontos.map((item) => {
                    return (
                        <div className={styles.card} >
                            <div className={styles.cardTopDestaques}>
                                <Image src={item.imageUrl} alt={item.alt} width={1440} height={2160} className={styles.DestaquesImg} quality={100} />
                            </div>
                            <div className={styles.gameInformationDestaques}>
                                <p>{item.gameInformation}</p>
                            </div>
                            <div className={styles.cardMiddleDestaques}>
                                <p>{item.nome}</p>
                            </div>
                            <div className={styles.cardBottomDestaques}>
                                <p className={styles.cardDiscountDestaques}>-{item.desconto}</p>
                                <p className={styles.cardOldDestaques}>{item.antigoValor}</p>
                                <p>{applyDiscount(item.antigoValor, item.desconto)}</p>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}