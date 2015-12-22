var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Wilbur">This is one comment</Comment>
        <Comment author="Dasher">This is *another* comment</Comment>
      </div>
    );
  }
});
