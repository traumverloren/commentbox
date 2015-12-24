var CommentBox = React.createClass({
  getInitialState() {
    return { comments: [] };
  },
  componentWillMount() {
    this.fetchComments();
    setInterval(this.fetchComments, 1000);
  },
  fetchComments() {
    $.getJSON(
      this.props.commentsPath,
      (data) => this.setState({comments: data.comments})
    );
  },
  handleCommentSubmit: function ( comment ) {
    $.ajax({
      data: {comment: comment},
      url: '/comments',
      type: "POST",
      dataType: "json",
      success: function ( data ) {
        this.setState({ comments: data });
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div>
        <Comments comments={this.state.comments} />
        <CommentForm form={ this.state.form } onCommentSubmit={ this.handleCommentSubmit } />
      </div>
    );
  }
});
