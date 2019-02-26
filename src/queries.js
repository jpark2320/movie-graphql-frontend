import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    movies(limit: 10, rating: 7) {
      id
      title
      genres
      rating
    }
  }
`;

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      medium_cover_image
      title
      rating
      description_intro
      language
      genres
    }
    suggestions(id: $movieId) {
      id
      medium_cover_image
      title
      rating
    }
  }
`;
