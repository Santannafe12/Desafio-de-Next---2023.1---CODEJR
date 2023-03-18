import Image from 'next/image'
import { useRef, useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle, IoMdThumbsDown, IoMdThumbsUp, } from 'react-icons/io'
import { VscPreview } from 'react-icons/vsc'
import Slider from 'react-slick'
import { applyDiscount, avaliados } from '../constants'
import { NextArrow, PrevArrow } from '../Utils'
import styles from './avaliados.module.scss'

export default function Avaliados() {
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
                    slidesToScroll: 2,
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
        <div className={styles.avaliadosApp}>
            <div className={styles.DestaquesTop}>
                <div>
                    <h1>Jogos mais bem avaliados!</h1>
                    <AiOutlineRight className={styles.DestaquesTopIcon} />
                </div>
                <div className={styles.arrowButtonsDestaques}>
                    <IoIosArrowDropleftCircle className={styles.prevButtonIconDestaques} onClick={goToPrev} />
                    <IoIosArrowDroprightCircle className={styles.nextButtonIconDestaques} onClick={goToNext} />
                </div>
            </div>
            <Slider {...settings} ref={sliderRef}>
                {avaliados.map(avaliado => (
                    <div className={styles.avaliadosCard}>
                        <div className={styles.avaliadosImageDiv}>
                            <Image className={styles.avaliadosImage} src={avaliado.imageUrl} alt={''} width={1920} height={1080} quality={100} />
                        </div>
                        <div className={styles.avaliadosTitle}>
                            <p>{avaliado.name}</p>
                            {/* <div>
                            {avaliado.devices.map(device => (
                                <span>{device}</span>
                            ))}
                            </div> */}
                        </div>
                        <div className={styles.avaliadosDescription}>
                            <p>{avaliado.description}</p>
                        </div>
                        <div className={styles.avaliadosReviews}>
                            <h5>Análises de usuários:</h5>
                            <div className={styles.reviewsNumbers}>
                                <p className={styles.numbersTotal}><span><VscPreview /></span> Todas ({avaliado.totalReview}+) </p>
                                <p className={styles.numbersPositive}><span><IoMdThumbsUp /></span> {avaliado.positiveReview}</p>
                                <p className={styles.numbersNegative}><span><IoMdThumbsDown /></span> {avaliado.negativeReview}</p>
                            </div>
                        </div>
                        <div className={styles.avaliadosPrice}>
                            {avaliado.discount !== '' && (
                                <>
                                    <p className={styles.discount}>{avaliado.discount}</p>
                                    <p className={styles.oldPrice}>{avaliado.price}</p>
                                </>
                            )}
                            <p className={styles.newPrice}>{avaliado.discount !== '' ? applyDiscount(avaliado.price, avaliado.discount) : avaliado.price}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}