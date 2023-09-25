import { Box, Grid } from '@mui/material'
import React, { Component } from 'react'

import CardSingleData from '../../Partial_Dashboard/C_parts/CardSingleData'
import CardChartDonus from '../../Partial_Dashboard/C_parts/CardChartDonus'

export default class View extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  

  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <CardSingleData/>
        </Grid>
        <Grid item xs={6} md={3}>
          <CardSingleData/>
        </Grid>
        <Grid item xs={6} md={3}>
          <CardSingleData/>
        </Grid>
        <Grid item xs={6} md={3}>
          <CardSingleData/>
        </Grid>

        <Grid item xs={12} md={4}>
          <CardChartDonus/>
        </Grid>
        <Grid item xs={12} md={4}>
          <CardChartDonus/>
        </Grid>
        <Grid item xs={12} md={4}>
          <CardChartDonus/>
        </Grid>


        <Grid item xs={6} md={3}>
          <CardSingleData/>
        </Grid>
        <Grid item xs={6} md={3}>
          <CardSingleData/>
        </Grid>
        <Grid item xs={6} md={3}>
          <CardSingleData/>
        </Grid>
        <Grid item xs={6} md={3}>
          <CardSingleData/>
        </Grid>

        <Grid item xs={12} md={4}>
          <CardChartDonus/>
        </Grid>
        <Grid item xs={12} md={4}>
          <CardChartDonus/>
        </Grid>
        <Grid item xs={12} md={4}>
          <CardChartDonus/>
        </Grid>
      </Grid>
    )
  }
}
