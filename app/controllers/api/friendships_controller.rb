class Api::FriendshipsController < ApplicationController
  def create
    @friendship = current_user.sent_friendships.new(friendee_id: params[:friendee_id])

    if @friendship.save
      @user = current_user
      render 'api/users/show'
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def update
    @friendship.find(params[:id])

    if @friendship.update(friendship_params)
      render json: {}
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def destroy
    @friendship.find(params[:id])

    if @friendship.destroy
      render json: {}
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def friendship_params
    params.require(:friendship).permit(:status)
  end
end
