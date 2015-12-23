var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.comments.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id} text={comment.text} />
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});
