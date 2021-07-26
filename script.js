"use strict";

let url = "https://www.reddit.com/r/aww/.json";


// using async/await, based on the subreddit url you give it.
// (I'm doing it this way because the extended challenges asks for other subreddits)
async function getPosts(subreddit) {
    let res = await fetch(subreddit);
    let data = await res.json();
    // console.log(data)

    // let's find a good starting point. drilling down to...
    let allPosts = data.data.children; // should be an array, e.g. (27)[]

    // now let's  pull out the 3 items we'll need from each array item
    for (let i = 0; i < allPosts.length; i++){
        // deconstructing ftw!
        const {thumbnail, url, title} = allPosts[i].data;
       
        // create html elements
        let headline = document.createElement("h1");
        headline.innerText = title;

        let link = document.createElement("a");
        link.href = url; // grabbing the url from this local scope, not the global one

        let image = document.createElement("img");
        image.src = thumbnail;

        // let's append the link...
        document.body.append(link);
        
        // then add the image and headline to that link, that way they're both clickable.
        link.append(headline);
        link.append(image);

        // how about a default image cuz...why not? Just a placeholder though.
        image.setAttribute("onerror", "this.src='https://via.placeholder.com/140'");
    }


}

// when you first arrive on the page, getPosts from default "aww"
getPosts(url);

