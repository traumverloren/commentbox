var CommentForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },
  render: function () {
    return (
      <form ref="form" className="comment-form" action='/comments' method="post" onSubmit={ this.handleSubmit }>
        <p><input
          ref="author"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange} /></p>
        <p><textarea ref="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange} /></p>
        <p><button type="submit">Post comment</button></p>
      </form>
    )
  }
});
