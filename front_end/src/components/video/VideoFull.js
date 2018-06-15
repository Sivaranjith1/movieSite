import React from 'react'
import { connect } from 'react-redux'
import { Dialog, AppBar, DialogContent, DialogContentText, DialogTitle, DialogActions, Button } from '@material-ui/core'
import { close_video } from '../../actions/close_video'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { withRouter } from 'react-router-dom'
import { next_episode, prev_episode } from '../../actions/change_episode'
import { withStyles } from '@material-ui/core/styles'

const style = theme => ({
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '0',
    paddingBottom: '15px',
  }
})

const VideoFull = props => {
  const { classes } = props
  let videoUrl
  let ifSerie
  let epsNum = props.epsNum
  if (props.open && props.context.genre) {
    videoUrl = props.isSerie ? (props.context.episode && props.context.episode[epsNum].video && props.context.episode[epsNum].video.fil ) : props.context.video.fil
    ifSerie = props.isSerie && props.context.episode && props.context.episode[epsNum].video ? true : false
  }
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
          props.open && props.context.genre && <div>
          <DialogContent style={{height: '55vw'}}>
            <video width="100%" controls controlsList="nodownload" src={videoUrl}>
              {/*<source  type="video/mp4" />*/}
              Your browser does not support HTML5 video.
            </video>
        </DialogContent>
        <DialogContent className={classes.flex}>
          <DialogTitle>{props.context.title}{ifSerie && `: ${props.context.episode[epsNum].title}`}</DialogTitle>
          {ifSerie && 
            <DialogActions style={{flexWrap: 'wrap'}}>
              <Button onClick={props.prev_episode} disabled={epsNum === 0}>Previous episode</Button>
              <Button onClick={props.next_episode} disabled={epsNum === Object.keys(props.context.episode).length - 1}>Next episode</Button>
            </DialogActions>
          }
        </DialogContent>
        
        <DialogContent>
          <DialogContentText>
            {ifSerie && `${props.context.episode[epsNum].episode_number} episode of ${Object.keys(props.context.episode).length} episodes`}
          </DialogContentText>
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
    isSerie: state.video.isSerie,
    epsNum: state.video.episode,
})

export default withRouter(connect(mapStateToProps, { close_video, next_episode, prev_episode })(withStyles(style)(VideoFull)));
//             Maybe change Dialog to card