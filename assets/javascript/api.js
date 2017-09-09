$(document).ready(function()
{

var toSearch = 
{
	baseURL: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
	apiKey: "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
	q: "&?q=suicide",
	begin: "&?begin_date=19500101",
	end: "&?end_date=20170908",
	sort: "&sort=newest"
}



$("#searchButton").click(function()
{
	var currentQuery = $("#qParameter").val().trim();
	toSearch.q = "&fq=" + currentQuery;
	var startDate = $("#beginDate").val().split("-");
	toSearch.begin = "&being_date=" + startDate[0] + startDate[1] + startDate[2];
	var endingDate = $("#endDate").val().split("-");
	toSearch.end = "&end_date=" + endingDate[0] + endingDate[1] + endingDate[2];

	var queryURL = toSearch.baseURL + toSearch.apiKey + toSearch.q + toSearch.begin + toSearch.end + toSearch.sort;
	console.log(queryURL);

	$.ajax(
	{
  		url: queryURL,
  		method: "GET",
	})

	.done(function(apireturn)
	{
  		console.log(apireturn);

  		var heading = $("<h3>").addClass("subHeading")








	})

/*	$.ajax
	({
		url: queryURL,
		method: "GET"
	})
		.done(function(apireturn)
		{
			$("#resultsContainer").show();
			$("#searchResults").show();
			$("#searchResultsHeader").show();

			console.log("finished fetching data from nytimes api")
			var results = apireturn.response.docs;

			var articleDiv = $("<div>");
			var articleTitle = $("<h3>");
			var shortSummary = $("<p>");

			var i = 0;

			for(var i = 0; i < results.length; i++)
			{

			var yearPub = (results[i].pub_date).slice(0, 4);
			var monthPub = (results[i].pub_date).slice(5, 7);
			var dayPub = (results[i].pub_date).slice(8, 10);
			var datePublished = $("<p>");
			datePublished.text("Date Published: " + monthPub + "/" + dayPub + "/" + yearPub);
			datePublished.css("font-size", "0.7em");

			articleTitle.addClass("display3");
			articleTitle.text(results[i].headline.main);
			shortSummary.text(results[i].snippet);
			shortSummary.css("font-size", "0.7em");

			articleDiv.append(articleTitle);
			articleDiv.append(datePublished);
			articleDiv.append(shortSummary);			

			$("#searchResults").append(articleDiv)
			//$("#searchResults").append("<br><br><br>");

			}*/

				




			//}

			


	//	});


})














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