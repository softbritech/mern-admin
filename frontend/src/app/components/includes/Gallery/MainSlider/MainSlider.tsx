import {Swiper, SwiperSlide} from "swiper/swiper-react";
import {Navigation} from "swiper/types/modules/navigation";

import 'swiper/swiper.css';
import 'swiper/modules/navigation.css';
import 'swiper/modules/pagination.css';
const MainSlider = () => {
    return (
        <>
            <Swiper
                modules={[Navigation]}
                spaceBetween={15}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    }
                }}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                className="main-slider"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </>
    )
}
export default MainSlider