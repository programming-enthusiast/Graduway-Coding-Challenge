class LanguagesController < ApplicationController
  def index
    render json: Language.all.to_json
  end
end
