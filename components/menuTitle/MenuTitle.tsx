import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import { Container, Typography, Box } from "@mui/material";
import classNames from "classnames";

import styles from "./Menutitle.module.scss";

const MenuTitle: React.FC = () => {
    const router = useRouter();
    let { t } = useTranslation("menutitle");

    return (
        <Container maxWidth="md" className={styles.title_block}>
            <Link href="/">
                <Box className={styles.img}>
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
            {router.locales?.map((locale) => (
                <Link href={router.asPath} locale={locale} key={locale}>
                    <Box
                        className={classNames(
                            styles.lang_button,
                            router.locale === locale
                                ? styles.lang_active
                                : null
                        )}
                    >
                        {locale}
                    </Box>
                </Link>
            ))}
            <Typography className={styles.title} component="h2">
                {t("title")}
            </Typography>
            <Typography className={styles.subtitle} component="h3">
                {t("subtitle")}
            </Typography>
        </Container>
    );
};

export default MenuTitle;
