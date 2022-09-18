import { useState } from "react";
import { useRouter } from "next/router";

import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandCircleDown";

import AccordeonItem from "./AccordeonItem";
import { IBody, IMenu, IMenuList } from "../../types/menuType";

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

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
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
                        <Typography sx={{ fontWeight: 700, fontSize: 22 }}>
                            {router.locale === 'ua' ? item.node.ua.title : null}
                            {router.locale === 'en' ? item.node.en.title : null}
                            {router.locale === 'ru' ? item.node.ru.title : null}
                        </Typography>
                    </AccordionSummary>

                    {router.locale === 'ua' &&
                        <AccordionDetails>
                            {item.node.ua.subtitle &&
                                <Typography sx={{ml:2, fontSize: '18px', fontStyle: 'italic'}}>
                                    {item.node.ua.subtitle}
                                </Typography>
                            }
                            {item.node.ua.body?.map((item: IBody, i: number) => (
                                <Box key={i} sx={{ m: 2 }}>
                                    <AccordeonItem
                                        {...item} />
                                </Box>
                            ))}
                        </AccordionDetails>
                    }
                    {router.locale === 'en' &&
                        <AccordionDetails>
                            {item.node.en.body?.map((item: IBody, i: number) => (
                                <Box key={i} sx={{ m: 2 }}>
                                    <AccordeonItem
                                        {...item} />
                                </Box>
                            ))}
                        </AccordionDetails>
                    }
                    {router.locale === 'ru' &&
                        <AccordionDetails>
                            {item.node.ru.body?.map((item: IBody, i: number) => (
                                <Box key={i} sx={{ m: 2 }}>
                                    <AccordeonItem
                                        {...item} />
                                </Box>
                            ))}
                        </AccordionDetails>
                    }
                </Accordion>
            ))}
        </Container>
    );
}

export default Accordeon;
