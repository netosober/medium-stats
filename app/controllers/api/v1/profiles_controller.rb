module Api
  module V1
    class ProfilesController < ApplicationController
      def index
        @profiles = Profile.all
      end
    end
  end
end
