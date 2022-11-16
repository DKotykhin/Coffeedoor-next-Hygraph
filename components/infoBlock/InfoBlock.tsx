import useTranslation from "next-translate/useTranslation";

import {
    Container,
    Typography,
    ListItem,
    ListItemText,
    Link,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import { Phone } from "../footer/footerData";

import styles from "./Infoblock.module.scss";

const InfoBlock: React.FC = () => {
    let { t } = useTranslation("infoblock");

    return (
        <Container maxWidth="md" className={styles.infoblock}>
            <Typography className={styles.infoblock_title} component="h1">
                {t("title")}
            </Typography>
            <Typography className={styles.infoblock_subtitle} component="h2">
                {t("subtitle")}
            </Typography>
            <ListItem>
                <AccessTimeIcon className={styles.infoblock_icon} />
                <ListItemText className={styles.infoblock_items}>
                    <Typography className={styles.infoblock_item_1}>
                        {t("openTimesTitle")}
                    </Typography>
                    <Typography className={styles.infoblock_item_2}>
                        {t("openTimes_1")}
                    </Typography>
                    <Typography className={styles.infoblock_item_2}>
                        {t("openTimes_2")}
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem>
                <LocalShippingOutlinedIcon className={styles.infoblock_icon} />
                <ListItemText className={styles.infoblock_items}>
                    <Typography className={styles.infoblock_item_1}>
                        {t("deliveryTitle")}
                    </Typography>
                    <Typography className={styles.infoblock_item_2}>
                        {t("deliveryOptions")}
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem>
                <LocationOnOutlinedIcon className={styles.infoblock_icon} />
                <ListItemText className={styles.infoblock_items}>
                    <Typography className={styles.infoblock_item_1}>
                        {t("contactsTitle")}
                    </Typography>
                    <Typography className={styles.infoblock_item_2}>
                        {t("address")}
                    </Typography>
                    <Link
                        className={styles.infoblock_item_3}
                        href={Phone['href']}
                    >
                        {t("phone")}
                        {Phone['phone']}
                    </Link>
                </ListItemText>
            </ListItem>
        </Container>
    );
};

export default InfoBlock;
