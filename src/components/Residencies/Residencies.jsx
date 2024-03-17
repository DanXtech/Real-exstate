import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
// import swiper styles
import "swiper/css"
import "swiper/css/navigation"
// import "swiper/css/pagination"
import "swiper/css/scrollbar"
import data from "../../utils/slider.json"
import "./residencies.css"
// import { sliderSettings } from "../../utils/common"

const Residencies = () => {
    return (
        <section className='residencies__wrappper' id='Residencies'>
            <div className="paddings innerWidth residencies_container">
                <div className="residencies__head flexColStart">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residencies</span>
                </div>
                <Swiper
                    // {...sliderSettings}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={4}
                    // navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                        480: {
                            width: 480,
                            sliderPerView: 1,
                        },
                        500: {
                            width: 500,
                            sliderPerView: 1,
                        },
                        750: {
                            // width: 750,
                            sliderPerView: 3,
                        },
                        1000: {
                            // width: 1000,
                            sliderPerView: 4,
                        },

                    }}
                >
                    <SliderButtons />
                    {data.map((card, i) => (
                        <>
                            <div className='slider__card__center'>
                                <SwiperSlide key={i}>
                                    <div className="flexColStart residencies__card">
                                        <img src={card.image} alt="home" />

                                        <span className='secondaryText residencies__price'>
                                            <span style={{ color: "orange" }}>$</span>
                                            <span>{card.price}</span>
                                        </span>
                                        <span className='primaryText'>{card.name}</span>
                                        <span className='secondaryText'>{card.detail}</span>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </>
                    ))}

                </Swiper>
            </div>
        </section>
    )
}

export default Residencies


const SliderButtons = () => {

    const swiper = useSwiper();
    return (
        <div className="flexCenter residencies__button">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}