import useTranslation from "next-translate/useTranslation";

import { Box, Modal, Fade, Typography } from "@mui/material";
import { ListItem, List, ListItemIcon, Link } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

import DetailSwipeImage from "./DetailSwipeImage";
import DetailActive from "./DetailActive";
import { IBody, ICard } from "types/cardType";

import styles from "./CardDetail.module.scss";

interface ICardDetail {
    item: ICard;
    body: IBody;
    openModal: boolean;
    closeModal: () => void;
}

const CardDetail: React.FC<ICardDetail> = ({
    item,
    body,
    openModal,
    closeModal,
}) => {
    const { price, weight, listImg } = item.node;
    const {
        name,
        title,
        sort,
        tm,
        description,
        country,
        textA,
        textB,
        textList,
        link
    } = body;

    let { t } = useTranslation("card");

    const handleClose = () => {
        closeModal();
    };

    return (
        <Modal
            open={openModal}
            onClose={handleClose}
            closeAfterTransition
        >
            <Fade in={openModal}>
                <Box sx={{ bgcolor: "background.paper", boxShadow: 24 }} className={styles.item_list}>
                    <CloseIcon
                        className={styles.item_list_close}
                        onClick={handleClose}
                    />
                    <DetailSwipeImage img={listImg} alt={name} />
                    <Typography sx={listImg.length > 1 ? { mt: 3 } : { mt: 2 }} variant="h6" component="h2">
                        {title} {name}
                    </Typography>
                    <Typography className={styles.item_list_price}>
                        {price}
                        {t("currency")}
                    </Typography>
                    <DetailActive item={item} body={body} closeModal={handleClose} />
                    {weight && (
                        <Typography variant="body2">
                            {t("weight")}
                            {weight}{t("unit")}
                        </Typography>
                    )}
                    {sort && <Typography variant="body2">{sort.key}{": "}{sort.value}</Typography>}
                    {tm && (
                        <Typography variant="body2">
                            {t("made")}
                            {tm}
                        </Typography>
                    )}
                    {country && (
                        <Typography variant="body2">
                            {t("country")}
                            {country}
                        </Typography>
                    )}
                    <Typography sx={{ mt: 2, textAlign: 'justify', mb: (textA || textList) ? 2 : null }} variant="body2">
                        {description}
                    </Typography>
                    {textA?.map((item: string, i: number) => (
                        <Typography key={i} variant="body2" sx={{ textAlign: 'justify' }}>
                            {item}
                        </Typography>
                    ))}
                    <List className="list">
                        {textList?.map((item: string, i: number) => (
                            <ListItem disablePadding key={i}>
                                <ListItemIcon>
                                    <DoneIcon />
                                </ListItemIcon>
                                <Typography variant="body2" sx={{ m: 1 }}>
                                    {item}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                    {textB?.map((item: string, i: number) => (
                        <Typography key={i} variant="body2" sx={{ mt: 1 }}>
                            {item}
                        </Typography>
                    ))}
                    {link &&
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            {link.title}{": "}
                            <Link href={link.value} target='_blank'>
                                {link.value}
                            </Link>
                        </Typography>
                    }
                </Box>
            </Fade>
        </Modal>
    );
}

export default CardDetail;
