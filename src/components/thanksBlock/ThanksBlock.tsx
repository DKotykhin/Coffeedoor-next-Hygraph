import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

import ReturnButton from "../returnButton/ReturnButton";
import styles from "./Thanksblock.module.scss";

const ThanksBlock: React.FC = () => {
    let { t } = useTranslation("thanksblock");

    return (
        <Container maxWidth="md" className={styles.thanks_block}>
            <Link href="/">
                <Box className={styles.thanks_img}>
                    <Image
                        src={"/logo/logo_700x191.webp"}
                        alt="logo"
                        width={700}
                        height={191}
                        placeholder="blur"
                        blurDataURL="/logo/logo_700x191.webp"
                    />
                </Box>
            </Link>
            <Typography component="h1" className={styles.thanks_title}>
                {t("title")}
            </Typography>
            <Typography component="h2" className={styles.thanks_subtitle}>
                {t("subtitle")}
            </Typography>
            <ReturnButton />
        </Container>
    );
};

export default ThanksBlock;
