# frozen_string_literal: true

# https://www.stuartellis.name/articles/rake/ Good article about rake tasks

namespace 'foo' do
  desc 'Sample rake task'
  task :sample do |t, args|
    args.to_a.each { |arg| puts arg }
    puts t.scope.path
  end
end
