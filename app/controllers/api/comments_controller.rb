class Api::CommentsController < ApplicationController
  def index
    @comments =  Comment.where("commentable_id = ? AND commentable_type = ?",
      Integer(params["commentable_id"]), params["commentable_type"])
    render :index
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def create
    @comment = current_user.comments.new(comment_params)

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Post.find(params[:id])

    if (current_user.id == comment.user_id)
      comment.destroy
      render json: comment
    else
      render json: ["You can't delete another user's post"], status: 401
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:commentable_id, :commentable_type, :body)
  end
end
