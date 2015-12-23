class CommentsController < ApplicationController
  respond_to :json

  def index
    respond_with Comment.all
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.save

    redirect_to root_path
  end

  private

  def comment_params
    params.require(:comment).permit(:author, :text)
  end
end
