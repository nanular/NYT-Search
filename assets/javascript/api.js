$(document).ready(function()
{

var toSearch = 
{
	baseURL: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
	apiKey: "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
	q: "&?fq=politics",
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
  		var results = apireturn.response.docs;
  		$(".subHeadings:last-child").show();


  		for(i = 0; i < results.length; i++)
  		{
	  		var articleDiv = $("<div>").addClass("article_result");

	  		var articleTitle = $("<h4>")
	  			.addClass("article_title")
	  			.html('<a href="' + results[i].web_url +
	  				'" target="blank">' + results[i].headline.main + '</a>')
	  			.appendTo(articleDiv);

	  		var articleDate = $("<span>")
	  			.addClass("article_date")
	  			.text(
	  				"Publish Date: " +
		  			(results[i].pub_date).slice(5, 7) + "/" +
		  			(results[i].pub_date).slice(8, 10) + "/" +
		  			(results[i].pub_date).slice(0, 4)
		  		)
		  		.append("<br><br>")
		  		.appendTo(articleDiv);
	  		
	  		var articleSnippet = $("<p>")
	  			.addClass("article_snippet")
	  			.text(results[i].snippet)
	  			.appendTo(articleDiv);
	  		
	  		$(".search_results").append(articleDiv);
  		}


	})

})








})
