import React, { FC, ReactElement } from "react";
import { Box, Divider, Grid, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        bottom: '0px',
        marginTop: '5%'
      }}
    >
    <Divider />
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <Typography color="textSecondary" style={{padding: '16px'}}>
          {new Date().getFullYear()} - ReactJS-PHP Login System | Developed by <Link href="https://github.com/stutzerik">Erik Stütz</Link>
        </Typography>
      </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;