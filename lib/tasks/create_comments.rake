namespace :db do
  task create_comments: :environment do

    Comment.destroy_all

    10.times do
      Comment.create(
        author: FFaker::Name.first_name + " " + FFaker::Name.last_name,
        text: FFaker::HipsterIpsum.words(10).join(' ')
      )
    end
  end
end
