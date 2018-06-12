import React from 'react'
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { connect } from 'react-redux'
import { dialog_close } from '../../actions/dialog_close'
import { dialog_open } from '../../actions/dialog_open'

const MovieDialog = props => {
  return (
    <Dialog
        open={props.open}
        onClose={props.dialog_close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">{props.context.title}</DialogTitle>
        <DialogContent>
            <DialogContentText>
                {props.context.description}
            </DialogContentText>
        </DialogContent>
    </Dialog>
  )
}

const mapStateToProps = state => ({
    open: state.genre.openDialog,
    context: state.genre.dialogContext
})

export default connect(mapStateToProps, { dialog_close, dialog_open })(MovieDialog)