class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])


    if (current_user.id == params[:id].to_i)
      if @user.update(user_params)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    else
      render json: ["You can't update another user's page"], status: 401
    end
  end

  def show
    @user = User.find(params[:id])
    @pending_friends = @user.pending_friends
  end

  private

  def user_params
    params.require(:user)
      .permit(:f_name, :l_name, :sex, :birthday, :email, :password,
      :profile_photo, :cover_photo)
  end
end


# find status code for unauthorized user
