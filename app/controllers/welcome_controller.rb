class WelcomeController < ApplicationController

  def index
    @comments = Comment.all
    @comment = Comment.new
  end
end
