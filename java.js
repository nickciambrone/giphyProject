$(document).ready(function () {
    //search doc, for id 'search', on, click, run a functin with a parameter of event,
    $("#search").on("click", function (event) {
        //allow the user 
        event.preventDefault();
        var giph = $("#giphSearch").val();
        console.log(giph);
        newButton = $("<button>");
        newButton.html(giph);
        newButton.attr("data-name", giph);
        newButton.attr("id", "giphButton");
        newButton.attr("class", "btn btn-light");
        $("#buttonsView").append(newButton);
    })
    $(document).on("click", "#giphButton", function () {
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).attr("data-name") + "&api_key=pIxkE9zbh9PH76QzayHygh7qcIZrvD5Q&limit=5"
        console.log($(this).attr("data-name"))
        console.log(queryURL)
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            var results = response.data
            for (var i = 0; i < results.length; i++) {
                var giphDiv = $("<div>");
                console.log(giphDiv)
                var p = $("<p>").text("Rating: " + results[i].rating);
                console.log(p)
                var img = $("<img>");
                console.log(img)
                img.attr("class", "gif")
                img.attr("src", results[i].images.fixed_height.url);
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
    $(document).on("click", ".gif", function () {
        var state = $(this).attr("data-state");
        console.log(state)
        console.log(this)
        if (state == "still") {

            // $(this).attr("src", $(this).attr("data-animate"));
            console.log($(this).attr("src"))
            console.log($(this).attr("data-animate"))
            var newSrc = $(this).attr("src")
            var newSrc1=newSrc.split("_s")
            var newSrc2=newSrc1.join("")
            console.log(newSrc2)
            $(this).attr("src",newSrc2)
            $(this).attr("data-state", "animate");
            console.log($(this).attr("data-state"))
        } else {
            var newSrc = $(this).attr("src");
            var newSrc1=newSrc.split(".gif");
            newSrc1[1]="_s.gif"
            var newSrc2=newSrc1.join("")
            console.log(newSrc2)
            // var newSrc2=newSrc1.join()
            // console.log(newSrc2)
            $(this).attr("src", newSrc2);
            console.log($(this).attr("data-still"))
            console.log($(this).attr("src"))
            // console.log($(this).attr("src",newSrc2))
            console.log($(this).attr("data-still"))
            $(this).attr("data-state", "still");
            console.log($(this).attr("data-state"))
        }
    });
})
