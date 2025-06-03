import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {Slide} from "../../../../../features/slides/types.tsx";
import './MainSlider.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import MainButton from "../../../common/Button/MainButton.tsx";
import MainHeading from "../../../common/Heading/MainHeading/MainHeading.tsx";

const MainSlider = ({items}) => {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={15}
                slidesPerView={1}
                loop={true}
                autoplay={false}
                navigation
                pagination={{clickable: true}}
                className="main-slider"
            >
                {items.map((item: Slide) => (
                    <SwiperSlide key={item._id}>
                        <div className="swiper-slide__item"
                             style={{ backgroundImage: `url(/${item.image})` }}
                        >
                            <div className="swiper-slide__content text-center">
                                <MainHeading
                                    className="main-title xl-size font-[700]"
                                    data-aos="fade-up"
                                    title={item.title}
                                />
                                <p className="swiper-slide__text text-description size-lg mt-4 px-3.5 lg:px-22"
                                   data-aos="fade-up"
                                   data-aos-duration="200">
                                    {item.description}
                                </p>
                                <div className="swiper-slide__buttons"
                                     data-aos="fade-up"
                                     data-aos-duration="300">
                                    <MainButton
                                        text="Contact Us"
                                        slug={item.slug}
                                        className="main-button main-button-yellow mt-4 lg:mt-15"
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    )
}
export default MainSlider