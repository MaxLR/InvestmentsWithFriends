class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      @pending_friends = @user.pending_friends
      log_in!(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password"], status: 422
    end
  end

  def destroy
    @user = current_user
    if @user
      log_out!
      render json: {}
    else
      render json: ["No user logged in"], status: 422
    end
  end
end
