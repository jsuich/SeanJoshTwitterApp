$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  $('#tweetForm').submit(function(event) {
    event.preventDefault();
    $.post( '/tweet', params[:tweet_text], console.log("Tweet successful" );
    });
});
