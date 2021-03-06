class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  before_action :set_current_user

  def set_current_user
    if cookies.encrypted[:user_id]
      @current_user = User.find(cookies.encrypted[:user_id])
    end
  end
end
