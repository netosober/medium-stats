module Api
  module V1
    class ProfilesController < ApiController
      def index
        if params[:name]
          @profiles = Profile.where(params.permit(:name))
        else
          @profiles = Profile.all
        end
      end
      def show
        @profile = Profile.find(params[:id])
      end
    end
  end
end
