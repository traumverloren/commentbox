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
  render() {
    return <Comments comments={this.state.comments} />;
  }
});
