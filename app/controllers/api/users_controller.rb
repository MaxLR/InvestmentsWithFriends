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

    if (current_user.id == params[:id])
      if @user.update_attributes(user_params)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    else
      render json: ["some status code"]
    end
  end

  def show
    @user = User.find(params[:id])
  end
end


# find status code for unauthorized user
