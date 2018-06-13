import React from 'react'
import { Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { dialog_close } from '../../actions/dialog_close'
import { dialog_open } from '../../actions/dialog_open'
import { fetch_video } from '../../actions/fetch_video'

const MovieDialog = props => {
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
        <div>
            <img src={props.context.coverImage.image} alt={props.context.title} />
        </div>
        <DialogTitle id="alert-dialog-title">{props.context.title}</DialogTitle>
        <DialogContent>
            <DialogContentText>
                {props.context.description}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => props.fetch_video(props.context.url)}>
              Watch
            </Button>
        </DialogActions>
    </Dialog>}
    </div>
  )
}

const mapStateToProps = state => ({
    open: state.genre.openDialog,
    context: state.genre.dialogContext
})

export default connect(mapStateToProps, { dialog_close, dialog_open, fetch_video })(MovieDialog)