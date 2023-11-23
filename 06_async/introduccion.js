"use strict";

var request = new XMLHttpRequest();

var country = "spain"

request.open("GET", `https://restcountries.com/v3.1/name/${country}`);

request.addEventListener("load", function() {
    const data = JSON.parse(this.response);
    console.log(data);
});

request.send();