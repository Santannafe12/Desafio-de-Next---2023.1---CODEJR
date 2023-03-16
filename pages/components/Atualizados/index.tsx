import Image from 'next/image';
import { useRef, useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import Slider from 'react-slick';
import { atualizadosRecentemente, novidadesPopulares } from '../constants';
import { NextArrow, PrevArrow } from '../Utils';
import styles from './atualizados.module.scss'

export default function Atualizados() {
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
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
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
        <div className={styles.AtualizadosApp}>
            <div className={styles.AtualizadosTop}>
                <div>
                    <h1>Atualizados recentemente</h1>
                    <AiOutlineRight className={styles.AtualizadosTopIcon} />
                </div>
                <div className={styles.arrowButtonsAtualizados}>
                    < IoIosArrowDropleftCircle className={styles.prevButtonIconAtualizados} onClick={goToPrev} />
                    < IoIosArrowDroprightCircle className={styles.nextButtonIconAtualizados} onClick={goToNext} />
                </div>
            </div>
            <Slider {...settings} ref={sliderRef} >
                {atualizadosRecentemente.map(item => (
                    <div className={styles.cardAtualizados}>
                        <div className={styles.cardTop}>
                            <Image src={item.imageUrl} alt={item.alt} width={1920} height={1080} className={styles.PopularesImg} />
                        </div>
                        <div className={styles.cardInfo}>
                            <p>{item.info}</p>
                        </div>
                        <div className={styles.gameInformation}>
                            <div><h1>{item.name}</h1></div>
                        </div>
                        <div className={styles.cardMiddle}>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                        <div className={styles.detalhes}>
                            <p>VER DETALHES DA ATUALIZAÇÃO</p>
                        </div>
                        <div className={styles.gameBox}>
                            <div className={styles.gameInfo}>
                                <div className={styles.gameText}>{item.price}</div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </Slider >
        </div >
    )
}