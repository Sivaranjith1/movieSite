import React from 'react'
import { connect } from 'react-redux'
import { Dialog, AppBar } from '@material-ui/core'
import { close_video } from '../../actions/close_video'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const VideoFull = props => {
  return (
    <Dialog
        fullScreen
        open={props.open}
        onClose={() => props.close_video()}
    >
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" onClick={() => this.setState({isOpen: !this.state.isOpen})} >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" align="center">
              Title
            </Typography>
          </Toolbar>
        </AppBar>
        <h1>Hei</h1>
    </Dialog>
  )
}

const mapStateToProps = state => ({
    context: state.video.context,
    open: state.video.open,
})

export default connect(mapStateToProps, { close_video })(VideoFull);