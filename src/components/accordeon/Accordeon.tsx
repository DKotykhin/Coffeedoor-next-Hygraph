import { useState } from "react";
import { useRouter } from "next/router";

import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';

import ExpandMoreIcon from "@mui/icons-material/ExpandCircleDown";

import { AccordeonBlock } from "./AccordeonBlock";
import { IMenu, IMenuList } from "types/menuType";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, .05)"
            : "rgba(0, 0, 0, .03)",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
        color: "#00a1b6",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
    },
}));


interface IAccordeon {
    menulist: IMenuList
}

const Accordeon: React.FC<IAccordeon> = ({ menulist }) => {
    const [expanded, setExpanded] = useState("");
    const router = useRouter();

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : "");
    };

    return (
        <Container maxWidth="md" sx={{ marginTop: '50px', marginBottom: '100px' }}>
            {menulist.menuList.edges?.map((item: IMenu, i: number) => (
                <Accordion
                    key={i}
                    expanded={expanded === `panel${i}`}
                    onChange={handleChange(`panel${i}`)}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography sx={{ fontWeight: 700, fontSize: 22, mr: 2 }}>
                            {router.locale === 'ua'
                                ? item.node.ua.title
                                : router.locale === 'en'
                                    ? item.node.en.title
                                    : item.node.ru.title}
                        </Typography>
                    </AccordionSummary>
                    <AccordeonBlock blockItem={router.locale === 'ua'
                        ? item.node.ua
                        : router.locale === 'en'
                            ? item.node.en
                            : item.node.ru}
                    />
                </Accordion>
            ))}
        </Container>
    );
}

export default Accordeon;
