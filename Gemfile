# frozen_string_literal: true

source "https://rubygems.org"

git_source(:github) { |repo_name| "https://github.com/#{repo_name}" }

ruby '~> 2.7.4'

gem "sinatra", "~> 2.1"
gem "sinatra-activerecord", "~> 2.0"
gem "puma", "~> 5.5"
gem "sinatra-contrib", "~> 2.1"
gem "rake", "~> 13.0"

group :development, :test do
  gem "solargraph", "~> 0.44.0"
  gem "rubocop", "~> 1.22"
  gem "foreman", "~> 0.87.2"
  gem "sqlite3", "~> 1.4"
end
