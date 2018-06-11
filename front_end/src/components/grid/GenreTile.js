import React from 'react'
import { capitalizeFirstLetter } from '../../functions/uppercase'
import { Typography, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'


const style = theme => ({
    whiteText: {
        color: theme.palette.primary.main
    },
    whiteLine: {
        backgroundColor: theme.palette.primary.main
    }
})

const GenreTile = props => {
    let genreName = capitalizeFirstLetter(props.genre.name)
    const { classes } = props
    return (
        <div className={classes.whiteText}>
            <Typography variant="display1" className={classes.whiteText} gutterBottom>
                {genreName}
            </Typography>
            <Divider className={classes.whiteLine} />
        </div>
    )
}

export default withStyles(style)(GenreTile)