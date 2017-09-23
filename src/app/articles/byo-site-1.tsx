import * as React from 'react';
import { Col } from 'react-bootstrap';
import { Article }  from '../components/article';

import './about.scss';
declare function require(name: string);

var content = ` # Creating own website part 1: The build and design of the site.
I decided it was time for me to build my own website and publish it to my own domain. I think it’s something that every developer should try.
### I wanted to use the site as both a self promotion site and somewhere to host my blog posts. 
This post is to show that you dont just draw the rest of the owl, website design can be an iterative and experimental process

![alt text](../img/byo/d6d.jpg "Rest of the owl")

## A couple of things I need to decide upon before I started
One, It would be static. No backend server required... For now.
Two, I would use a javascript framework in the implementation. For this I chose react. I’ve recently been playing with Reactjs for a couple of personal projects github.com/joshuatoth

## The setup
I started with a template of react from yeoman, fountainJS
yeoman.io
github.com/FountainJS/generator-fountain-webapp

The options I chose:
- Typescript, The only option for react IMO (Possible future blog post?)
- Sass. I used to use Less, but I decided to try Sass this time.
- A hello world template, rather than a landing page
- React router (Small issue with S3 + Route 53. But easy to fix and I’ll get to that in the next part)
- I also added a Travis .yml file for deployment, which at this stage I haven’t set up yet. 
- Gulp and Webpack are what I selected for the watch/build process.

There were two additions I added to the website framework: 
For bootstrap 4: I used the 4.0.0 distribution from their site. 
For Font Awesome: I signed up (for free) for my own distribution. Both I placed into my Index.html (Landing page)

Bootstrap is something I’ve used in the past and was keen to use it again as a framing tool as well as the components that it includes. Font Awesome was just for some of the flair it adds having the font set available. 

This setup will give me a pretty straightforward site that just says ‘hello world’. My plan from the start was to have the Index landing page as the entry to my site. I thought I’d have the articles as components with the the articles written in html (this ended up being fairly annoying).

## React, Let's Cook

My first iteration of the site I hoped would have My name and a beginning ‘about me’ article. Suffice to say, the first iteration was.. Not nice to look at.

![alt text](../img/byo/byo1.png "Iteration 1")

What you can see here is intent to have some sort of menu or navigation bar on the left side with the middle - right being the article content. The second iteration shows my intent a little more. 

![alt text](../img/byo/byo2.png "Iteration 2")

Still a pretty ugly site. What I was intending on doing was having the buttons on the left, toggle the content on the right. This iteration didn’t have the toggle working at this stage. I was also hoping only the navigation bar would be the only black on the screen, but I was struggling with the boostrap framework for too long at this point and I change up color scheme after this.

![alt text](../img/byo/byo3.png "Iteration 3")

Here I’ve also gotten rid of my Image from the site. 

This was officially the first site I deployed out to my domain. In order to deploy to my domain I needed to purchase a domain name. I ended up using AWS to purchase my name jojototh.com (Joshua Jozsef Toth) through AWS. As part of this project I had considered using the google cloud service to buy my domain and host my site,  but the domain registration was not available in my region. In a future part I will cover how to setup your site in AWS. For now ill keep the scope of this post to the design and creation of the site. From now on I deployed each iteration to my actual domain, but most of them weren’t there for long. 

![alt text](../img/byo/byo4.png "Iteration 4")

In this next iteration I dropped the side bar, Otherwise it acts functionally the same. The header image of each article was intended to be related to the article. Although for the first couple more bio pages I added some images we took during our trip around Europe.

![alt text](../img/byo/byo5.png "Iteration 5")

This next iteration I wanted to experiment with a more minimalist design. I dropped the off-white background and tried to implement a pseudo shadow under the text (it was a squashed image of a dot haha). Ultimately I was pretty embarrassed by this design, it felt naive and I wanted to change it ASAP. 

It was also around this time I also purchased the domain: JoshuaToth.com I had a few comments about the original domain name jojototh.com and decided to go a little more professional and have my full name as the domain. There was also the aspect of identity, when people visit my site I want the domain to reflect me, and my name is the best way to do that. For some reason before this point I thought my name a domain had already been snached up and incorrectly remembered looking up the address and finding it taken, which thankfully wasn’t the case. Adding a new domain distribution was easy and took almost no time at all.

For the next iteration I did a pretty major rewrite. I had stumbled upon davidzych.com which I liked so much I have more or less completely ripped it off.. 

![alt text](../img/byo/byo6.png "Iteration 6")
![alt text](../img/byo/byo7.png "Iteration 7")

I had designed the articles to be firstly accessible via this landing page. But this this iteration I added the entire ‘about me’ and community pages but I opted to pad out the length of the site. I also decided to roll the community and about me into a single page. It didn’t make much sense to separate them. With only a single article as a stub at the bottom, it didn’t look great. 

The arrows at the bottom of the title scroll the page on click, in this instance it wasn’t a smooth scroll and quite jarring. I planned to make it smooth scrolling but I burned a bit more time trying to program one myself via React. I’m sure there was an easy way to do it, but I just could figure it out at the time. Eventually I found a react-scroll library which did exactly what I wanted to do. 

The ‘holistic software engineer’ is a reference to Douglas Adams Dirk Gently. At this point of writing it’s still my tagline but I have future plans to implement a rotation of saying that randomize on each refresh. Easy enough to do in React, I just need to find a little bit of time to add it. 

![alt text](../img/byo/byo8.png "Iteration 8")

Over the course of the next few days I went back and forth refining the design somewhat. 
I made the article width a bit smaller. 
I changed the background image. 
I added a little CSS flair to the loading of my name and the tagline. 
I started with the article design at the bottom of the landing page. It is basically a blurb, a link to where the article is (On my site or an external site I’ve posted on)
And the date it was posted. I need to play with this format somewhat, but it’s fine for now. 

There was a slight issue with this version of the site. The background image is HUGE, about 4mb huge. Which on my home internet connection loaded instantly. But on mobile and at other locations it took forever to load in an really gave a pretty terrible experience. I tried a few things to reduce the size: Converting to jpg with a small amount of compression. Using a web compression tool. Adding asset compression through my CDN. Eventually I ended up just cropping the image to a more reasonable resolution, reducing the size to about 800kb. Still quite large, but any smaller and it would be too small.

The next step was adding the article page: 

![alt text](../img/byo/byo9.png "Iteration 9")

This is from the top of the page with a header image and then the article content (Probably like this article). There is also a small back button up at the top left corner which takes you to the landing page of the site.

I used React-router to section off the articles. So this one sits at joshuatoth.com/aboutme. The issue I ran into here was when you navigate an S3 bucket in aws through route 53 you get a permission denied result. Route 53 has no concept of react router so it tries to navigate within the directory to a folder named ‘aboutme’ and it doesn’t exist! There is a setting within the route 53 section in aws where you can replace the permission denied page to be served from a different location. In this case I chose my index.html which then reads the react route! It feels a bit hacky, but it works. 

### Finally we land with the current design of the site: 

![alt text](../img/byo/byo10.png "Iteration 10")

Here you can see the more tightly cropped background image. This screenshot does have the screen scrolled down a little bit. 
I added a few links out to my social media and github accounts. This list will probably grow, but I can only think of 3 things to add right now.
I also added a tab icon for the site, getting rid of the stock yeoman icon. It is a fairly simple image with 3 dots, I will probably revise in the future!
As of writing this post, this is my site at the domain on joshuatoth.com.

## So there it is. 
The whole process took me about 3 weeks of working a couple hours 5 or 6 nights a week while watching some TV in the background. I’m happy I did it, there were a lot of learnings along the way, the whole setup in AWS is fairly cheap and costs about $0.50 a month because of the way I’m using route 53 (I could probably make it free, not sure how to yet.) I am using a $50 credit from AWS at the moment so all this years host is practically free. I want to include more parts to this series, including: hosting your static site in AWS, an in-depth look into my react code and publishing to your static site with Travis. So hopefully there will be more incoming!

The code for my personal site can be located here: github.com/JoshuaToth/Personal-Site and if you want to check out the progress of my site yourself, follow the readme to begin and pick your way through my commits. `;

const divStyle = {
    backgroundImage: 'url(./img/docklands-small.jpg)'
  };

export const ByoSite1 = (props) => {
    return (
        <div className='byo-site-1-article'>
            <Article content={content} background={divStyle} headerImage='../img/docklands-small.jpg'/>
        </div>
    );
};
