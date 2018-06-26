$(document).ready(function() {

    $("#search").on("click",function(event){
        event.preventDefault();
        var giph = $("#giphSearch").val();
        console.log(giph)
        newButton=$("<button>")
        newButton.html(giph)
        newButton.attr("data-name", giph)
        newButton.attr("id","giphButton")
        newButton.attr("class","btn btn-secondary")
        $("#buttonsView").append(newButton)
    })
    $(document).on("click","#giphButton", function(){
        var queryURL="http://api.giphy.com/v1/gifs/search?q="+$(this).attr("data-name")+"&api_key=pIxkE9zbh9PH76QzayHygh7qcIZrvD5Q&limit=5"
        console.log($(this).attr("data-name"))
        console.log(queryURL)
        $.ajax({
            url:queryURL,
            method:"GET"
        }).then(function(response){
            console.log(response)
            var results=response.data
            for (var i=0;i<results.length;i++){
                var giphDiv=$("<div>");
                console.log(giphDiv)
                var p = $("<p>").text("Rating: " + results[i].rating);
                console.log(p)
                var img=$("<img>");
                console.log(img)
                img.attr("src",results[i].images.fixed_height.url);
                console.log(img)
                giphDiv.append(p);
                console.log(giphDiv)
                giphDiv.append(img);
                console.log(img);
            $("#giphsView").prepend(giphDiv);
            console.log($("giphsView"))
            }
        })
    })
 
})
