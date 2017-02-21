class Api::PostsController < ApplicationController
  def index
    if params["postsToFetch"] == "user"
      debugger
      @posts = User.find(params["user_id"]).user_posts
    elsif params["postsToFetch"] == "news_feed"
      @posts = current_user.friend_posts
    else
      @posts = []
    end

    render :index
  end

  def create
    @post = current_user.posts.new(post_params)

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])

    if (current_user.id == @post.poster_id)
      if @post.update(post_params)
        render :show
      else
        render json: @post.errors.full_messages, status: 422
      end
    else
      render json: ["You can't update another user's post"], status: 401
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  def destroy
    post = Post.find(params[:id])

    if (current_user.id == post.poster_id)
      if post.destroy
        render json: post
      else
        render json: post.errors.full_messages
      end
    else
      render json: ["You can't delete another user's post"], status: 401
    end
  end

  private

  def post_params
    params.require(:post).permit(:body, :postee_id)
  end
end
