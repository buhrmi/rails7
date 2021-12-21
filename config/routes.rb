Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  inertia "welcome" => "welcome"

  root to: redirect('/welcome')
end
