import {
    Grid,
    Paper,
    Typography,
    Box,
    Button
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { showIPFS } from "../../services/index";


export const StoredPubkey = ({ publicKey }: { publicKey: string }): React.ReactElement => {
    const [pubkey, setPubkey] = useState<string>("");
    useEffect(() => {
        showIPFS(publicKey).then(a => setPubkey(a));
        }, [publicKey]);
    return (  <Grid
        item
        xs={12}
        sm={12}
        md={12}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"

        >
        <Box sx={{ width: { xs: 1, lg: "50%", xl: "40%" } }}>

            <Paper>
                <Box sx={{ borderBottom: "1px solid #CBCFE6" }}>
                    <Grid container direction="row" justifyContent={"space-between"}
                        flexDirection={{ xs: "column-reverse", md: "row" }}>
                        <Grid item><Typography fontWeight={`500`} padding={`10px`}>Stored Public key:</Typography></Grid>
                        <Grid item><Button sx={{ margin: "10px" }} variant="outlined" size="small">Import New Key</Button>
                            <Button sx={{ marginRight: "10px" }} variant="contained" size="small">Generate New Key</Button>
                        </Grid>
                    </Grid>
                </Box>
                <Grid container direction="column" sx={{
                    padding: {
                        xs: "0px 80px 0px 80px",
                        md: "0px 80px 0px 80px",
                        lg: "0px 80px 0px 80px",
                        xl: "0px 80px 0px 80px"
                    }
                }}>
                    <Grid
                        item
                        container
                        direction="column"

                        sx={{
                        marginBottom: { lg: 10 }


                    }}
                        >
                        <Box sx={{ width: { xs: 1 } }}>
                            <Box
                                className="pubkey"
                                sx={{
                                backgroundColor: "#f6f7fe",
                                    height: 200,
                                    marginTop: 2,
                                    overflowY: "scroll",
                                    overflowWrap: "break-word",
                                    padding: 4,
                                    borderRadius: 3
                            }}
                                >
                                <Typography align="justify" variant="body2" color="primary">
                                    {pubkey}
                                </Typography>
                            </Box
                                >
                        </Box>
                        <Box sx={{ marginTop: 2, marginBottom: { xs: 2, sm: 2, md: 2, lg: 0 } }}>
                            <Button size="small">Copy</Button>
                            <Button size="small">Refresh</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Paper>
        </Box>
    </Grid>)
}