import React from 'react'
import { Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { dialog_close } from '../../actions/dialog_close'
import { dialog_open } from '../../actions/dialog_open'
import { fetch_video } from '../../actions/fetch_video'
import { fetch_serie } from '../../actions/fetch_serie'
import { withStyles } from '@material-ui/core/styles'

const style = theme => ({
    imageStyle: {
        minHeight: '60vh',
        minWidth: '290px',
        position: 'relative',
        zIndex: '-2',
    },
    dark: {
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: '-1',
    }
})

const MovieDialog = props => {
    const { classes } = props

    let url = ''
    let img
    let type
    let fetchVideo
    if(props.context.coverImage){
        url = props.context.coverImage.image
        img = {background: `url(${url})`, backgroundPosition: 'center', backgroundSize: 'cover'}

        type = props.context.url.split("/")
        type = type[type.length-3]

        fetchVideo = type === 'serie' ? props.fetch_serie : props.fetch_video
    }
  return (
    <div>
    {props.context.coverImage
    && 
    <Dialog
        open={props.open}
        onClose={props.dialog_close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >   
    <div
        className= {classes.imageStyle}
        style={img}
    >
        <div 
            className= {classes.dark}
        />
        <DialogTitle id="alert-dialog-title">{props.context.title}</DialogTitle>
        <DialogContent>
            <DialogContentText>
                {props.context.description}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => fetchVideo(props.context.url)}>
              Watch
            </Button>
        </DialogActions>
        {type === 'serie' &&
            <DialogContent>
                <DialogContentText>
                    Serie
                </DialogContentText>
            </DialogContent>
        }
    </div>
    </Dialog>}
    </div>
  )
}

const mapStateToProps = state => ({
    open: state.genre.openDialog,
    context: state.genre.dialogContext
})

export default connect(mapStateToProps, { dialog_close, dialog_open, fetch_video, fetch_serie })(withStyles(style)(MovieDialog))