import {
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  TextField,
    Divider
} from "@mui/material";
import React, { useState } from "react";

export const Decrypt = (): React.ReactElement => {
  const [key, setKey] = useState("");
  const [passphrase, setPassphrase] = useState("");
  return (<Grid
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
            <Grid item><Typography fontWeight={`500`} padding={`10px`}>Decrypt</Typography></Grid>

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
              <Box sx={{ mt: { md: 10, lg: 10, xl: 10 }, mb: 2 }}><Typography>Decrypt using your public key and private key</Typography></Box>

            <TextField
              sx={{ my: 1 }}
              id="outlined-basic"
              label="Key"
              variant="outlined"
              value={key}
              onChange={(e) => setKey(e.target.value)}
            />
            <Box>
              <Button sx={{ my: 1 }} variant="outlined">Get</Button>
            </Box>
            <Box><Typography>Value</Typography></Box>
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
                a
              </Box
              >
            </Box>
            <Box sx={{ marginBottom: { xs: 2, sm: 2, md: 2, lg: 0 } }}>
              <Button size="small">Copy</Button>

            </Box>
              <Divider sx={{my:2}} light />
            <Box><Typography>Decrypt </Typography></Box>
              <Box>
                  <Button sx={{ my: 1 }} variant="outlined" size="small">Upload private key</Button>
              </Box>
              <TextField
                  sx={{ my: 1 }}
                  id="outlined-basic"
                  label="Passphrase"
                  variant="outlined"
                  value={passphrase}
                  onChange={(e) => setPassphrase(e.target.value)}
              />
              <Box display={`flex`} width={`100%`} justifyContent={`flex-end`}>
                  <Button sx={{my:1}} variant="contained">Decrypt</Button>
              </Box>
              <Box><Typography fontWeight={`500`}>Decrypted Value </Typography></Box>
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
                  a
              </Box>
              <Box sx={{ marginBottom: { xs: 2, sm: 2, md: 2, lg: 0 } }}>
                  <Button size="small">Copy</Button>
              </Box>
          </Grid>

        </Grid>
      </Paper>
    </Box>
  </Grid>);
};