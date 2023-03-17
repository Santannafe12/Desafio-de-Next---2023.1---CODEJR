import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import Slider from 'react-slick'
import { applyDiscount, calculateValueReviews, indies } from '../constants'
import { Tooltip } from "@chakra-ui/react";
import { NextArrow, PrevArrow } from '../Utils'
import styles from './indies.module.scss'
import Tooltip1 from '../Tooltip'

export default function Indies() {
    const sliderRef = useRef<Slider>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleMouseEnter = (index: any) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(-1);
    };

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
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrows: false,
        beforeChange: (current: number, next: number) => {
            setCurrentIndex(next);
        },
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
                    <h1>Desenvolvedores indies</h1>
                    <AiOutlineRight className={styles.AtualizadosTopIcon} />
                </div>
                <div className={styles.arrowButtonsAtualizados}>
                    <IoIosArrowDropleftCircle className={styles.prevButtonIconAtualizados} onClick={goToPrev} />
                    <IoIosArrowDroprightCircle className={styles.nextButtonIconAtualizados} onClick={goToNext} />
                </div>
            </div>
            <Slider {...settings} ref={sliderRef}>
                {indies.map((item, index) => (
                    <div className={styles.cardAtualizados}
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}>
                        <div className={styles.cardTop}>
                            <Tooltip
                                className={styles.tooltip}
                                hasArrow={true}
                                placement="right"
                                maxW="350px"
                                closeDelay={120}
                                openDelay={450}
                                background="linear-gradient(132deg, rgba(186,245,246,1) 0%, rgba(171,218,235,1) 100%)"
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
                            <div>
                                <h1>{item.name}</h1>
                            </div>
                        </div>
                        <div>
                            <div className={styles.cardBottom}>
                                <p>{item.developer}</p>
                                <div className={styles.cardBottomIcons}>
                                    {item.devices.map((device, deviceIndex) => (
                                        <span key={deviceIndex}>{device}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={styles.mostPlayedPrice}>
                            {item.discount !== '' && (
                                <>
                                    <p className={styles.discount}>{item.discount}</p>
                                    <p className={styles.oldPrice}>{item.price}</p>
                                </>
                            )}
                            <p className={styles.newPrice}>{item.discount !== '' ? applyDiscount(item.price, item.discount) : item.price}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );

}
