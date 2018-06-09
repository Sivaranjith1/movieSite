import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer'

const styles = ({palette, spacing}) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {

  },
  colorTool: {
    backgroudColor: palette.primary.main,
  }
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
        {console.log(this.state)/*                     A CONSOLE LOG                            */}
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
          hei
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
//export default NavBar;