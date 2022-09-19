import { useState } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import { Typography, Button, Box } from "@mui/material";
import { Card, CardActions, CardContent } from "@mui/material";

import { useAppDispatch } from "../../store/hook";
import { basketAddItems } from "../../store/basketSlice";
import CardDetail from "../cardDetail/CardDetail";
import { IBody, ICard } from "../../types/cardType";

import styles from "./Card.module.scss";

interface ICatalogCard {
    props: ICard;
    lang?: string
}

const CatalogCard: React.FC<ICatalogCard> = ({ props, lang }) => {    
    const { id, bodyUa, bodyRu, bodyEn, price, weight, cardImg, order } = props.node;
    let body: IBody;
    switch (lang) {
        case "ua":
            body = bodyUa;
            break;
        case "ru":
            body = bodyRu;
            break;
        case "en":
            body = bodyEn;
            break;
        default:
            body = bodyUa;
    }
    const { title, name, description, sort } = body;

    const [open, setOpen] = useState(false);
    const dispatch = useAppDispatch();
    let { t } = useTranslation("card");

    const handleDetail = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <>
            <CardDetail
                props={props}
                body={body}
                openModal={open}
                closeModal={closeModal}
            />
            <Card sx={{ maxWidth: 350 }} className={styles.catalog_item} raised>
                <Image
                    src={cardImg?.url || `/wait_1.webp`}
                    loader={() => cardImg.url}
                    alt={name}
                    width={350}
                    height={350}
                    unoptimized={true}
                />
                <CardContent>
                    <Typography className={styles.catalog_item_name}>
                        {title} {name}
                    </Typography>
                    <Typography className={styles.catalog_item_price}>
                        {price}
                        {t("currency")}
                    </Typography>
                    <Box className={styles.catalog_item_desc}>
                        {order && (
                            <Typography color="#ff0000" sx={{ mb: 1 }}>
                                {t("order")}
                            </Typography>
                        )}
                        <Typography color="text.secondary">
                            {description}
                        </Typography>
                    </Box>
                    {sort && (
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mt: 1 }}
                        >
                            {sort.key}{": "}{sort.value}
                        </Typography>
                    )}
                    {weight && (
                        <Typography variant="body2" color="text.secondary">
                            {t("weight")}
                            {weight}
                            {t("unit")}
                        </Typography>
                    )}
                </CardContent>
                <CardActions className={styles.catalog_item_buttons}>
                    <Button
                        className={styles.more_button}
                        onClick={handleDetail}
                    >
                        {t("button_1")}
                    </Button>
                    <Button
                        className={styles.basket_button}
                        onClick={() =>
                            dispatch(
                                basketAddItems({
                                    id,
                                    title,
                                    name,
                                    price,
                                    weight,
                                    quantity: 1,
                                })
                            )
                        }
                    >
                        {t("button_2")}
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};

export default CatalogCard;
