import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

interface IDetailSwipeImage {
    img: {
        url: string
    }[];
    alt: string
}

const DetailSwipeImage: React.FC<IDetailSwipeImage> = ({ img, alt }) => {
    return (
        <>
            {img.length ?
                <Swiper
                    effect={"cube"}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 10,
                        shadowScale: 0.8,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination]}
                >
                    {img.map((item, i) => (
                        <SwiperSlide key={i}>
                            <Image
                                src={item.url}
                                loader={() => item.url}
                                alt={alt}
                                width={350}
                                height={350}
                                unoptimized={true}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                :
                <Image
                    src={"/wait_1.webp"}
                    alt={'wait for photo'}
                    width={350}
                    height={350}
                />
            }
        </>
    );
};

export default DetailSwipeImage;
