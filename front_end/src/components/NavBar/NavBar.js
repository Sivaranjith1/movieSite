import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import { ListItem, ListItemText, ListItemIcon, Divider } from '@material-ui/core/'
//import { Link } from 'react-router-dom'


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  drawer: {
    width: 360
  },
  menuButton: {

  },
  colorTool: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.light,
  },
});

class NavBar extends React.Component{
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
  }


  render () {
    const { classes } = this.props; 
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar className={classes.colorTool}>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={() => this.setState({isOpen: !this.state.isOpen})} >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" align="center" className={classes.root}>
              Title
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer open={this.state.isOpen} onClose={() => this.setState({isOpen: !this.state.isOpen})}>
          <div className={classes.drawer}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CloseIcon onClick={() => this.setState({isOpen: !this.state.isOpen})} />
                </ListItemIcon>
              </ListItem>
              <Divider />
              <ListItem button component="a">
                <ListItemText>
                  Home
                </ListItemText>
              </ListItem>
              <ListItem button component="a">
                <ListItemText>
                  Movies
                </ListItemText>
              </ListItem>
              <ListItem button component="a">
                <ListItemText>
                  Series
                </ListItemText>
              </ListItem>

              <Divider />

              <ListItem button component="a">
                <ListItemText>
                  Watched
                </ListItemText>
              </ListItem>
              <ListItem button component="a">
                <ListItemText>
                  Hearted
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);