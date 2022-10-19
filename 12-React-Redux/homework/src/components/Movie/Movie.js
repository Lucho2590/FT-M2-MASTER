import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount(){
        // this.props.getMovieDetail(this.props.match.params.id)
        const movieID = this.props.match.params.id;
        this.props.getMovieDetail(movieID);//aca se despacha la accion -> se llena el estado de movieDetail
    }


    render() {
        return (
            <div className="movie-detail">
                <h3>{this.props.movie.Title}</h3>
                <img src={this.props.movie.Poster} />
            </div>
        );
    }
}


const mapStateToProps = (state)=>{
    return {
        movie: state.movieDetail
    }
}


export default connect(mapStateToProps, {getMovieDetail}) (Movie);