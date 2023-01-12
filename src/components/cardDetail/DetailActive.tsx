import { useState } from "react";
import useTranslation from "next-translate/useTranslation";

import { Button, Typography } from "@mui/material";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { useAppDispatch } from "store/hook";
import { basketAddItems } from "store/basketSlice";
import { IBody, ICard } from "types/cardType";
import { IBasket } from "types/basketType";

import styles from "./CardDetail.module.scss";
interface IDetailActive {
    item: ICard;
    body: IBody;
    closeModal: () => void;
}

const DetailActive: React.FC<IDetailActive> = ({ item, body, closeModal }) => {
    const { id, price, weight } = item.node;
    const { title, name } = body;
    const [quantity, setQuantity] = useState<number>(1);
    const dispatch = useAppDispatch();
    let { t } = useTranslation("card");

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };
    const handleBasket = () => {
        closeModal();
        const fullData: IBasket = {
            title,
            name,
            price,
            weight,
            quantity,
            id
        };
        // console.log(fullData);
        dispatch(basketAddItems(fullData));
    };

    return (
        <Typography className={styles.item_list_quantity}>
            <RemoveCircleOutlineIcon
                className={styles.item_list_remove}
                onClick={handleDecrement}
            />
            {quantity}
            <AddCircleOutlineIcon
                className={styles.item_list_add}
                onClick={handleIncrement}
            />
            <Button className={styles.item_list_button} onClick={handleBasket}>
                {t("button_2")}
            </Button>
        </Typography>
    );
};

export default DetailActive;
