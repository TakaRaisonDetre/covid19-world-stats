import React from 'react';
import {Card, CartContent, Typography, Grid, CardContent} from '@material-ui/core'
import styles from './Card.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'


const Cards  = ({data}) =>{
    const {confirmed, recovered, deaths, lastUpdate} = data
     console.log(confirmed)
    if(!confirmed){
        return 'loading ... '
    }
    return (
       <div className={styles.container}>
           <Grid container spacing={5} justify="center">
               <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
               <CardContent>
                   <Typography color="textSecondary" gutterBottom> Infected </Typography>
                   <Typography variant="h5"> <CountUp start={0} end={confirmed.value} duration ={2.5} separator=","></CountUp></Typography>
    <Typography color="textSecondary"> Last Updated : {new Date(lastUpdate).toDateString()}</Typography>
                   <Typography variant="body2"> Number of active cases of COVID19 </Typography>
               </CardContent>
               </Grid>
               <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
               <CardContent>
                   <Typography color="textSecondary" gutterBottom> Recovered </Typography>
                   <Typography variant="h5"> <CountUp start={0} end={recovered.value} duration ={2.5} separator=","></CountUp></Typography>
                   <Typography color="textSecondary">  Last Updated : {new Date(lastUpdate).toDateString()}</Typography>
                   <Typography variant="body2"> Number of recovery cases of COVID19 </Typography>
               </CardContent>
               </Grid>
               <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
               <CardContent>
                   <Typography color="textSecondary" gutterBottom> Deaths </Typography>
                   <Typography variant="h5"> <CountUp start={0} end={deaths.value} duration ={2.5} separator=","></CountUp> </Typography>
                   <Typography color="textSecondary">  Last Updated : {new Date(lastUpdate).toDateString()} </Typography>
                   <Typography variant="body2"> Number of deaths caused by COVID19 </Typography>
               </CardContent>
               </Grid>
           </Grid>
       </div>
        
    )
}

export default Cards