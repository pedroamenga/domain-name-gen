/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var extension = [".com", ".net", ".us", ".io"];

  for (let i = 0; i < pronoun.length; i++)
    for (let j = 0; j < adj.length; j++)
      for (let n = 0; n < noun.length; n++)
        for (let x = 0; x < extension.length; x++)
          console.log(pronoun[i], adj[j], noun[n], extension[x]);
};
