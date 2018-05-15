"use strict"

$("document").ready(() => {


  $.get("https://www.reddit.com/r/EarthPorn/.json").then((resolvedData) => {
  var posts = resolvedData.data.children;
  
        for(let i = 0; i < 11; i++){
            let title = posts[i].data.title;
            let image = posts[i].data.preview.images[0].source.url;
            let url = posts[i].data.url;

            $("#wrapper").append(`
            <div class="redditPost">
              <h2>${title}</h2>
              <img src="${image}">
              <a href="${url}" target="_blank">Read more!</a>
            </div>
            
            `)
          
}
  });

})


