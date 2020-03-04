class UsersController < ApplicationController

  def index 
    @user = Users.all
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
  end

  private

  def user_params
    params.permit(:username)
  end
end
