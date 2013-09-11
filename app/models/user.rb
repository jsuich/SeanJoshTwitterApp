class User < ActiveRecord::Base

  has_many :tweets
  
  def tweet(status)
    tweet = Tweet.create!(:status => status)
    TweetWorker.perform_async(tweet.id)
  end
end
