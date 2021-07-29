import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './Style';

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <header className={classes.header}>
        <Typography variant="h3" className={classes.title} >
          Hello! Dev91!
        </Typography>
      </header>
    </>
  )
}

export default Header
