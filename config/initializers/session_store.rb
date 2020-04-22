if Rails.env == "production"
  Rails.application.config.session_store :cookie_store, key: "_question_dispatch", domain: "https://question-dispatch.herokuapp.com"
else
  Rails.application.config.session_store :cookie_store, key: "_question_dispatch"
end