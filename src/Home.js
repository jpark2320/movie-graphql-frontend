import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";

const Home = () => (
  <Query query={HOME_PAGE}>
    {({ loading, data, error }) => {
      if (loading) return <span>Loading...</span>;
      if (error) return <span>Something happened</span>;
      return data.movies.map(movie => {
        return (
          <>
            <span>
              {movie.title}({movie.rating})
            </span>
            <br />
          </>
        );
      });
    }}
  </Query>
);

export default Home;
