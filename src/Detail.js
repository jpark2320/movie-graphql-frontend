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
        console.log(data.suggestions);
        return (
          <>
            <div>
              <h3>{data.movie.title}</h3>
            </div>
            <Link to={"/"}>Back</Link>

            <hr />
            <h4>Suggestions</h4>
            <div>
              {data.suggestions.map((sug, i) => {
                return (
                  <>
                    <div key={i}>
                      <Link to={`/detail/${sug.id}`}>{sug.title}</Link>
                    </div>
                  </>
                );
              })}
            </div>
          </>
        );
      }}
    </Query>
  );
};

export default Detail;
