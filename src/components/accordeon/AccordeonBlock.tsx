import React from "react";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";

import AccordeonItem from "./AccordeonItem";
import { IBody, IItem } from "types/menuType";

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

interface IBlock {
    blockItem: IItem    
}

export const AccordeonBlock: React.FC<IBlock> = ({ blockItem }) => {
    return (
        <AccordionDetails>
            {blockItem.subtitle &&
                <Typography sx={{ ml: 2, fontSize: '18px', fontStyle: 'italic' }}>
                    {blockItem.subtitle}
                </Typography>
            }
            {blockItem.body?.map((item: IBody, i: number) => (
                <Box key={i} sx={{ m: 2 }}>
                    <AccordeonItem
                        {...item} />
                </Box>
            ))}
        </AccordionDetails>
    );
};
