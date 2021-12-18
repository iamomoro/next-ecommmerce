import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

export default function layout({children}) {
  return (
    <div>
      <Head>
        <title>Next E-commerce</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>commerce</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        {children}
      </Container>
    </div>
  );
}
