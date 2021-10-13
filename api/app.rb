# frozen_string_literal: true

require 'sinatra'
require 'sinatra/reloader' if development?

class App < Sinatra::Base
  set :sessions, true
  set :foo, 'bar'

  configure :development do
    register Sinatra::Reloader
    enable :logging
  end

  configure do
    set :public_folder, File.expand_path('../dist', File.dirname(__FILE__))
  end

  get '/' do
    send_file File.join(settings.public_folder, 'index.html')
  end
end
