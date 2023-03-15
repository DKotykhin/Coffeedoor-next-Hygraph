import { useState } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation } from "swiper";
import { motion, AnimatePresence } from "framer-motion";

import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Container, Typography } from "@mui/material";

import Card from "../card/Card";
import FilterItems from "../filters/FilterItems";

import { ICard, IFilter } from "types/cardType";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./ItemList.module.scss";

interface IItemList {
    itemList: ICard[];
    id: string;
    title: string;
    subtitle: string;
    filterArray?: IFilter[]
}

const ItemList: React.FC<IItemList> = ({
    itemList,
    id,
    title,
    subtitle,
    filterArray
}) => {
    const [list, setList] = useState(itemList);
    const router = useRouter();
    const matches = useMediaQuery('(min-width:1200px)');

    const onSelectSort = (sort: string) => {
        let data = itemList;
        if (sort) {
            if (router.locale === 'ua') {
                data = itemList.filter(item => item.node.bodyUa.sort?.value === sort);
            }
            if (router.locale === 'ru') {
                data = itemList.filter(item => item.node.bodyRu.sort?.value === sort);
            }
            if (router.locale === 'en') {
                data = itemList.filter(item => item.node.bodyEn.sort?.value === sort);
            }
        }
        setList(data);
    };

    return (
        <Container id={id} maxWidth="xl" className={styles.item_list}>
            <Typography className={styles.item_list_title}>{title}</Typography>
            <Typography className={styles.item_list_subtitle}>
                {subtitle}
            </Typography>
            {filterArray && (
                <FilterItems
                    onSelect={onSelectSort}
                    quantity={list ? list.length : null}
                    filterArray={filterArray}
                />
            )}
            {matches ?
                <Box className={styles.item_list_card} >
                    {list?.map((item) =>
                        <Card key={item.node.id} item={item} lang={router.locale} />)}

                </Box>
                :
                <Swiper
                    slidesPerView={1.2}
                    spaceBetween={10}
                    // breakpoints={{
                    //     850: {
                    //         slidesPerView: 2.2,
                    //         threshold: 20
                    //     },
                    //     1200: {
                    //         slidesPerView: 3,
                    //         threshold: 20
                    //     },
                    // }}
                    // navigation={true}
                    // modules={[Navigation, EffectCards]}
                    modules={[EffectCards]}
                    grabCursor={true}
                    effect={"cards"}
                    cardsEffect={{
                        slideShadows: false
                    }}
                    centeredSlides={true}
                >
                    <AnimatePresence initial={false}>
                        {list?.map((item) => (
                            <SwiperSlide key={item.node.id}>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                // transition={{duration: 0.5}}
                                >
                                    <Card item={item} lang={router.locale} />
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </AnimatePresence>
                </Swiper>
            }
        </Container>
    );
};

export default ItemList;
