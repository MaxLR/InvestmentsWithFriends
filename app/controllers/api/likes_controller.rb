class Api::LikesController < ApplicationController
  def index
    @likes = Like.all
    render :index
  end

  def show
    @like = Like.find(params[:id])
  end

  def create
    @like = current_user.likes.new(like_params)

    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    like = Like.find(params[:id])

    if (current_user.id == comment.user_id)
      comment.destroy
      render json: like
    else
      render json: ["You can't unlike a post you haven't liked"], status: 401
    end
  end

  private

  def like_params
    params.require(:like).permit(:likeable_id, :likeable_type)
  end
end
