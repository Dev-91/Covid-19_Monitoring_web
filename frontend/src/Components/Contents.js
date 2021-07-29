import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './Style';

const Contents = () => {
  const classes = useStyles();
  return (
    <>
      <body className={classes.body}>
        <Typography className={classes.text}>
          This is my basic react setting.
        </Typography>
      </body>
    </>
  )
}

export default Contents
