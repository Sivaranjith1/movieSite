import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Divider from 'material-ui/Divider'
import Typography from 'material-ui/styles/typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui/Menu'

const NavBar = () => {
  return (
      <AppBar>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" noWrap>
            Netflix
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default NavBar;