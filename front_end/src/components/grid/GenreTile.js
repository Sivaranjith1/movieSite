import React, {Component} from 'react'
import { connect } from 'react-redux'
import { capitalizeFirstLetter } from '../../functions/uppercase'
import { Typography, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { fetch_genreMovie } from '../../actions/fetch_genreMovie'
import { GridList } from '@material-ui/core'
import PictureTile from './PictureTile'

const style = theme => ({
    whiteText: {
        color: theme.palette.primary.main
    },
    whiteLine: {
        backgroundColor: theme.palette.primary.main
    },
    gridDiv: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
})

class GenreTile extends Component {
    componentDidMount(){
        this.props.fetch_genreMovie(this.props.income.url)
    }

    render(){
    let movieList = this.props.movieList[this.props.income.pk]
    let serieList = this.props.serieList[this.props.income.pk]
    let genreName = capitalizeFirstLetter(this.props.income.name)

    const { classes } = this.props
    return (
        <div className={classes.whiteText}>
            <Typography variant="display1" className={classes.whiteText} gutterBottom>
                {genreName}
            </Typography>
            {movieList && movieList.length !== 0 && 
            <div>
                <Typography variant="title" className={classes.whiteText} gutterBottom>
                    Movies
                </Typography>
                <div className={classes.gridDiv}>
                    <GridList className={classes.gridList} cols={2.5}>
                    {movieList.map((elem, index) => <PictureTile key={index} elem={elem} genreID={this.props.income.pk} index={index} isMovie={true} />)}
                    </GridList>
                </div>
            </div>}

            {serieList && serieList.length !== 0 && 
            <div>
                <Typography variant="title" className={classes.whiteText} gutterBottom>
                    Series
                </Typography>
                <div className={classes.gridDiv}>
                    <GridList className={classes.gridList} cols={2.5}>
                    {serieList.map((elem, index) => <PictureTile key={index} elem={elem} genreID={this.props.income.pk} index={index} isMovie={false} />)}
                    </GridList>
                </div>
            </div>}
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