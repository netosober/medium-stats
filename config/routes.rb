Rails.application.routes.draw do
  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :profiles, only: [:index, :show]
    end
  end
  root 'ember#bootstrap'
  get '/*path' => 'ember#bootstrap'
end
