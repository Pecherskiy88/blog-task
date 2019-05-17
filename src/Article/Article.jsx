import React from "react";
import { connect } from "react-redux";

const Article = ({ fetchData, match }) => {
  console.log(fetchData);
  const data = fetchData.find(el => el.id === Number(match.params.id));
  return (
    <div>
      <p>
        {data.author}
        <span>{data.date}</span>
      </p>
      <p>{data.title}</p>
      <p>{data.body}</p>
      <button>comment</button>
    </div>
  );
};

const mapStateToProps = state => ({
  fetchData: state.fetchData
});

export default connect(
  mapStateToProps,
  null
)(Article);
