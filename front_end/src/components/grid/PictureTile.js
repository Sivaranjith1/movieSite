import React from 'react'
import { GridListTile, GridListTileBar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { dialog_open } from '../../actions/dialog_open'

const styles = theme => ({
    image: {
        height: '350px',
        width: 'auto',
        cursor: 'pointer',
    },
    space: {
        marginRight: '15px',
    }
})

const PictureTile = props => {
    //console.log(props)
    const { classes } = props
  return (
      <GridListTile className={classes.space} onClick={() => props.dialog_open(props.genreID, props.index, props.isMovie)}>
          <img src={props.elem.coverImage.image} alt={props.elem.title} className={classes.image} />
          <GridListTileBar title={props.elem.title} />
      </GridListTile>
  )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {dialog_open})(withStyles(styles)(PictureTile))