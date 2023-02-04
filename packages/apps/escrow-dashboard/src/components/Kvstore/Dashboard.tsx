import {
  Grid,
  Box
} from "@mui/material";
import React from "react";
import ViewTitle from "../ViewTitle";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {StoredPubkey} from './StoredPubkey'
import {Decrypt} from './Decrypt'
import {Encrypt} from './Encrypt'
export const Dashboard = ({ publicKey }: { publicKey: string }): React.ReactElement => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Grid container>

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        direction="row"
        justifyContent="center"
      >
        <Box marginBottom="1em" display="flex" alignItems="center" flexWrap="wrap">
          <ViewTitle title="ETH KV Store" iconUrl="/images/small_key.svg" />
        </Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider", marginBottom: 2 }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Public Key" />
            <Tab label="Encrypt" />
            <Tab label="Decrypt" />
          </Tabs>
        </Box>
          {value===0 && <StoredPubkey publicKey={publicKey}/>}
          {value===1 && <Encrypt />}
          {value===2 && <Decrypt />}
      </Grid>
    </Grid>
  );
};
