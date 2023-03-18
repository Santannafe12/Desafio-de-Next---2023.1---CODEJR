import { Tooltip } from '@chakra-ui/react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import Slider from 'react-slick';
import { applyDiscount, atualizadosRecentemente, calculateValueReviews, novidadesPopulares } from '../constants';
import Tooltip1 from '../Tooltip';
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
                            <Tooltip
                                className={styles.tooltip}
                                placement="right"
                                maxW="350px"
                                closeDelay={120}
                                openDelay={380}
                                background="gainsboro"
                                hasArrow={true}
                                label={
                                    <Tooltip1
                                        name={item.name}
                                        releaseDate={item.releaseDate}
                                        description={item.description}
                                        totalReviews={item.totalReviews}
                                        positiveReviews={item.positiveReviews}
                                        valueReviews={calculateValueReviews(item.positiveReviews)}
                                        categories={item.categories}
                                        devices={item.devices}
                                        friends={item.friends}
                                    />}>
                                <Image src={item.imageUrl} alt={item.alt} width={1920} height={1080} className={styles.PopularesImg} />
                            </Tooltip>
                        </div>
                        <div className={styles.cardInfo}>
                            <p>{item.info}</p>
                        </div>
                        <div className={styles.gameInformation}>
                            <div><h1>{item.name}</h1></div>
                        </div>
                        <div className={styles.cardMiddle}>
                            <p className={styles.description}>{item.descriptionUpdate}</p>
                        </div>
                        <div className={styles.detalhes}>
                            <p>VER DETALHES DA ATUALIZAÇÃO</p>
                        </div>
                        <div className={styles.mostPlayedPrice}>
                            {item.discount !== '' && (
                                <>
                                    <p className={styles.discount}>-{item.discount}</p>
                                    <p className={styles.oldPrice}>{item.price}</p>
                                </>
                            )}
                            <p className={styles.newPrice}>{item.discount !== '' ? applyDiscount(item.price, item.discount) : item.price}</p>
                        </div>
                    </div>
                ))
                }
            </Slider >
        </div >
    )
}