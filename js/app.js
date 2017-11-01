
// Holler at reddit, "Yo, I'm trying to feature your content. Let me get that hook up."
$.get("https://accesscontrolalloworiginall.herokuapp.com/https://www.reddit.com/r/todayilearned.json", function(results){
  console.log(results);
  


// Iterating through the contents of the arrays in the api response
for (i = 0; i < 5; i++) {
var ignition = results.data.children[i].data;


// Printing the contents of the end point to the dom
   $("#main").append('<article class="article"><section class="featuredImage"><img src="' + ignition.thumbnail + '"/></section>'
	              +  '<article class="article"><section class="articleContent"><a href="' + ignition.url + '"><h3>' + ignition.title + '</h3></a></section>'
                  +  '<article class="article"><section class="impressions">' + ignition.score + '</section></article>'
                  +  '<div class="clearfix"></div></article>');
}









 })
 		