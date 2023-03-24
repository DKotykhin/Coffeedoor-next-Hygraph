import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import styles from "./error.module.scss";
import ReturnButton from "components/returnButton/ReturnButton";

const Error: React.FC = () => {
    return (
        <Box className={styles.error}>
            <Box className={styles.error_image}>
                <Image
                    src={"/sorry_1.webp"}
                    alt="error"
                    width={270}
                    height={270}
                />
            </Box>
            <Typography className={styles.error_title}>
                Сторінка не знайдена
            </Typography>
            <ReturnButton />
        </Box>
    );
};

export default Error;
