$(document).ready(function() {

  var userFeed = new Instafeed({
    get: 'user',
    userId: '3710433476',
    limit: 6,
    sortBy: 'most-recent',
    template: '<a href="{{image}}"><img src="{{image}}"/></a>',
    accessToken: ''
});
userFeed.run();


});