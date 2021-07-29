import React from 'react'
import { Typography, Select, MenuItem, AppBar } from '@material-ui/core'
import useStyles from './Style';

const Header = () => {

  const classes = useStyles();

  return (
    <>
        <AppBar className={classes.appbar} color="primary">
          <toolbar className={classes.toolbar}>
            <Typography variant="h3" className={classes.title} >
              COVID-19
            </Typography>
            <Select className={classes.select}>
              <MenuItem>국내</MenuItem>
              <MenuItem>전세계</MenuItem>
            </Select>
          </toolbar>
        </AppBar>
    </>
  )
}

export default Header