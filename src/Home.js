import React from "react";
import { Link } from "react-router-dom";
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
            <div key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                {movie.title} ({movie.rating})
              </Link>
            </div>
          </>
        );
      });
    }}
  </Query>
);

export default Home;
