import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import { List, ListItem } from "@mui/material";
import { Box, Drawer, Divider, Link as MuiLink } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import classNames from "classnames";

import styles from "./Drawer.module.scss";

interface IDrawerTitle {
    title: string;
    id: string
}

const NavDrawer: React.FC = () => {
    const router = useRouter();
    const [state, setState] = useState(false);
    let { t } = useTranslation("firstblock");

    const groupOfTitle_1: IDrawerTitle[] = [
        { title: t("titleA"), id: "#coffee_list" },
        { title: t("titleB"), id: "#tea_list" },
        { title: t("titleC"), id: "#mills_list" },
        { title: t("titleD"), id: "#acc_list" },
        { title: t("titleE"), id: "#jam_list" },
    ];
    const groupOfTitle_2: IDrawerTitle[] = [
        { title: t("titleX"), id: "#about_block" },
        { title: t("titleY"), id: "#footer_block" },
    ];

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setState(open);
    };

    const handleClick = (data: string) => {
        router.push(`/${data}`)
    }

    return (
        <Box className={styles.drawer}>
            <MenuIcon
                className={styles.drawer_icon}
                onClick={toggleDrawer(true)}
            />
            <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
                <Box
                    className={styles.list_box}
                    sx={{ width: 250 }}
                    //role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List className={styles.list_items}>
                        <Image
                            src={"/logo_256x256.ico"}
                            alt="logo"
                            width={100}
                            height={100}
                        />
                        {groupOfTitle_1.map((text) => (
                            <ListItem key={text.title} disablePadding>
                                <MuiLink
                                    className={styles.list_items_item}
                                    href={text.id}
                                >
                                    {text.title}
                                </MuiLink>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List className={styles.list_items}>
                        {groupOfTitle_2.map((text) => (
                            <ListItem key={text.title} disablePadding>
                                <MuiLink
                                    className={styles.list_items_item}
                                    href={text.id}
                                >
                                    {text.title}
                                </MuiLink>
                            </ListItem>
                        ))}
                    </List>
                    <Box className={styles.link_item}>
                        <Link href="/menu">
                            <span className={styles.link_button}>
                                {t("link_2")}
                            </span>
                        </Link>
                    </Box>
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
                </Box>
            </Drawer>
        </Box>
    );
}

export default NavDrawer;
