module Api
  module V1
    class ProfilesController < ApiController
      def index
        @profiles = Profile.all
      end
    end
  end
end
