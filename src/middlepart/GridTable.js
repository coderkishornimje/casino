import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#00FFFF',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginTop:'20px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function GridTable() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16} justifyContent={'center'}>
        <Grid item xs={5}>
          <Item>ID:35442343124</Item>
        </Grid>
        <Grid item xs={5}>
          <Item><h4>Slot-Random</h4></Item>
        </Grid>
        <Grid item xs={5}>
          <Item>Time</Item>
        </Grid>
      </Grid>
      
    </Box>
  );
}
