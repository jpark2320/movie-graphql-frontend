import React from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import { MOVIE_DETAILS } from "./queries";

const Detail = ({
  match: {
    params: { movieId }
  }
}) => {
  return (
    <Query query={MOVIE_DETAILS} variables={{ movieId }}>
      {({ loading, data, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Something happened!</div>;
        console.log(data);
        return (
          <>
            <div>{data.movie.title}</div>
            <Link to={"/"}>Go back to main</Link>
          </>
        );
      }}
    </Query>
  );
};

export default Detail;
