import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './Style';

const Contents = () => {
  const classes = useStyles();
  return (
    <>
      <body className={classes.body}>
        <Typography className={classes.text}>
          국내 코로나 현황
        </Typography>
      </body>
    </>
  )
}

export default Contents