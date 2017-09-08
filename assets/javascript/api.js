$(document).ready(function()
{

var toSearch = 
{
	baseURL: "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=",
	apiKey: "f05a7362fdb341b3b69c4aa99b704d34",
	q: "&?q=donald",
	begin: "&?begin_date=20170101",
	end: "&?end_date=20171231",
}




$("#searchButton").click(function()
{
	$("#searchResults").show();
	var queryURL = toSearch.baseURL + toSearch.apiKey + toSearch.q + toSearch.begin + toSearch.end;
	console.log(queryURL);

	$.ajax
	({
		url: queryURL,
		method: "GET"
	})
		.done(function(response)
		{
			console.log(response);

			$("#searchResults").append("<h2>NYT Search Results</h2>");




		});


});














})







// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// url += '?' + $.param({
//   'api-key': "f05a7362fdb341b3b69c4aa99b704d34"
// });
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });