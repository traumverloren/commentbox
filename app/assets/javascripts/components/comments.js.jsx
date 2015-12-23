var Comments = React.createClass({
  render() {
    var commentNodes = this.props.comments.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id} text={comment.text} />
      );
    });
    return (
      <div className="comments">
        {commentNodes}
      </div>
    );
  }
});
