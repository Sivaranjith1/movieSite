import React, {Component} from 'react'
import { connect } from 'react-redux'
import { capitalizeFirstLetter } from '../../functions/uppercase'
import { Typography, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { fetch_genreMovie } from '../../actions/fetch_genreMovie'

const style = theme => ({
    whiteText: {
        color: theme.palette.primary.main
    },
    whiteLine: {
        backgroundColor: theme.palette.primary.main
    }
})

class GenreTile extends Component {
    componentDidMount(){
        this.props.fetch_genreMovie(this.props.income.url)
    }

    render(){
    let genreName = capitalizeFirstLetter(this.props.income.name)
    let movieList = this.props.movieList[this.props.income.pk]
    let serieList = this.props.serieList[this.props.income.pk]

    const { classes } = this.props
    return (
        <div className={classes.whiteText}>
            <Typography variant="display1" className={classes.whiteText} gutterBottom>
                {genreName}
            </Typography>
            <Divider className={classes.whiteLine} />
        </div>
    )
    }
}
//<button onClick={() => this.props.fetch_genreMovie(this.props.income.url)}>Button</button>
const mapStateToProps = state => ({
    movieList: state.genre.genreMovie,
    serieList: state.genre.genreSerie,
})

export default connect(mapStateToProps, { fetch_genreMovie })(withStyles(style)(GenreTile))