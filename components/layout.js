import React from 'react';
import Head from 'next/head';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  footer,
} from '@material-ui/core';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Next E-commerce</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>E-commerce</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All rights reserved. Next E-commerce.</Typography>
      </footer>
    </div>
  );
}
