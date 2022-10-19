import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {getMovies, addMovieFavorite} from '../../actions';
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this); 
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
         {
          this.props.movies?.map( m => (
            <div>
              <Link to={`/movie/${m.imdbID}`}>
                <li >{m.Title}</li>
              </Link>
              <button onClick={() => this.props.addMovieFavorite({title: m.Title, id: m.imdbID})}>Fav</button>
              {/* <button onClick={() => this.props.addMovieFavorite({title: m.Title, id: m.imdbID})}> Add to Favorite </button> */}
            </div>
          ))
         }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesLoaded
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
//     getMovies: title => dispatch(getMovies(title))
//   };
// }

export default connect(
  mapStateToProps,
  {getMovies, addMovieFavorite}
)(Buscador);

//export default Buscador;
