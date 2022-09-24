import React from "react";
import { Box } from "@mui/system";
import Spin from "../../public/svg/spinner.svg"

const Spinner: React.FC = () => {
    return (
        <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            <Spin />
        </Box>
    )
}

export default Spinner;