import React from 'react'
import { connect } from 'react-redux'
import { Dialog, AppBar, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { close_video } from '../../actions/close_video'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { withRouter } from 'react-router-dom'

const VideoFull = props => {
  return (
    <Dialog
        fullScreen
        open={props.open}
        onClose={() => props.close_video()}
    >
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" onClick={() => props.close_video()} >
              <CloseIcon />
            </IconButton>
            <Typography variant="title" color="inherit" align="center">
              {props.context.title}
            </Typography>
          </Toolbar>
        </AppBar>
        {
          props.context.video && <div>
          <DialogContent>
            <video width="100%" controls controlsList="nodownload">
              <source src={props.context.video.fil} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
        </DialogContent>
        <DialogTitle>{props.context.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.context.description}
          </DialogContentText>
          <DialogContentText>
            Genre: <b>{props.context.genre.name}</b>
          </DialogContentText>
        </DialogContent>
        </div>
      }
    </Dialog>
  )
}

const mapStateToProps = state => ({
    context: state.video.context,
    open: state.video.open,
})

export default withRouter(connect(mapStateToProps, { close_video })(VideoFull));
//             Maybe change Dialog to card