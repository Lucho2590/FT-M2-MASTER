const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
};


function rootReducer(state = initialState, action) {
    // Objeto{ type:"ADD_MOVIE_FAVORITE" , payload }
    //       |
    if (action.type === "ADD_MOVIE_FAVORITE") {
        return {
            ...state,
            moviesFavourites: state.moviesFavourites.concat(action.payload)
        }
    }
    // Objeto{ type:"GET_MOVIES" , payload:JSON }
    //       |
    if (action.type === "GET_MOVIE") {
        return {
            ...state,
            moviesLoaded: action.payload.Search
        };
    }
    //    { type: "REMOVE_MOVIE_FAVORITE" , payloead }
    if (action.type === "REMOVE_MOVIE_FAVORITE") {
        return {
            ...state,
            moviesFavourites: state.moviesFavourites.filter(e => e.id !== action.payload)
        }
    }
    // Objeto{ type:"GET_MOVIES_DETAIL" , payload:JSON }
    //       |
    if (action.type === "GET_MOVIE_DETAIL") {
        return {
            ...state,
            movieDetail: action.payload
        }
    }
    return state;
}

export default rootReducer;