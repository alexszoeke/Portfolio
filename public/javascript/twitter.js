$(document).ready(function () {

    
    // var fs = require("fs");
    // var keys = require("./keys.js");
    // var Twitter = require('twitter');
    // var request = require('request');
    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
            url: "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=web_dev_alex&count=5",
            method: "GET"
        })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {

            // Log the resulting object
            console.log(response);

            // Transfer content to HTML
            $(".houston").html(response.name + " Weather Details");
            $(".wind").text("Wind Speed: " + response.wind.speed);
            $(".humidity").text("Humidity: " + response.main.humidity);
            $(".temp").text("Temperature (F) " + response.main.temp);

            console.log("Wind Speed: " + response.wind.speed);
            console.log("Humidity: " + response.main.humidity);
            console.log("Temperature (F): " + response.main.temp);
        });


    // // switch case
    //         var params = { screen_name: 'web_dev_alex', count: 20 };
    //         client.get('statuses/user_timeline', params, function (error, tweets, response) {
    //             if (!error) {
    //                 for (var i = 0; i < tweets.length; i++) {
    //                     console.log("@" + tweets[i].user.screen_name + '\n' + tweets[i].text + '\n' + "Retweets: " + tweets[i].retweet_count + ' ' + "Favorites: " + tweets[i].favorite_count + '\n' + tweets[i].created_at +'\n=====================================');
    //                 }
    //             }
    //         });

});