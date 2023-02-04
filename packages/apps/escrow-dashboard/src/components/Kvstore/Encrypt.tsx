import {
    Grid,
    Paper,
    Typography,
    Box,
    Button,
    TextField
} from "@mui/material";
import React,{useState} from "react";



export const Encrypt = (): React.ReactElement => {
const [key,setKey]=useState("")
    const [value,setValue]=useState("")

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
                        <Grid item><Typography fontWeight={`500`} padding={`10px`}>Encrypt</Typography></Grid>

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
                        <Box sx={{mt:{md:10,lg:10,xl:10},mb:2}}><Typography>Encrypt using your stored public key</Typography></Box>
                        <TextField
                            sx={{my:2}}
                            id="outlined-basic"
                            label="Key"
                            variant="outlined"
                            value={key}
                            onChange={(e) => setKey(e.target.value)}
                        />
                        <TextField
                            sx={{my:1}}
                            id="outlined-basic"
                            label="Value"
                            variant="outlined"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <Box display={`flex`} width={`100%`} justifyContent={`flex-end`}>
                            <Button sx={{my:1}} variant="contained">Store</Button>
                        </Box>

                        <Box sx={{ width: { xs: 1 } }}>
                            <Box
                                className="pubkey"
                                sx={{
                                backgroundColor: "#f6f7fe",
                                    maxHeight: 200,
                                    marginTop: 2,
                                    overflowY: "scroll",
                                    overflowWrap: "break-word",
                                    padding: 4,
                                    borderRadius: 3
                            }}
                                >
                                s
                            </Box
                                >
                        </Box>
                        <Box sx={{ marginTop: 2, marginBottom: { xs: 2, sm: 2, md: 2, lg: 0 } }}>
                            <Button size="small">Copy</Button>

                        </Box>
                    </Grid>

                </Grid>
            </Paper>
        </Box>
    </Grid>)
}