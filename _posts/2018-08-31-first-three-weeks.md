---
layout: post
title: "My First Two Weeks of Code"
date: 2018-08-31
---

## Foreword  
------  


Wow. It's a been a whirlwind three weeks. I started out only knowing a bit of HTML and now I'm solidly into coding some pretty cool stuff. I mean, I think it's cool. I know that I've just scratched the surface of programming in general, but I find it infinitely interesting. The following is just going to be a stream-of-consciousness overview of what I've learned so far. Enjoy!  


(Also, I'll leave my week three and JavaScript stuff I learned out until my next post. Be excited, that's the good part!)  



## "Wait, what's CSS?" (Week One)
------  


I knew some HTML before starting. I recognized tags like <head>, <body>, <p>, etc. This was from when I made a webcomic back in high school. All I remember was how big of a pain it was to make a functional navbar. The way I did it was upload a custom navbar I made in MS Paint and map out the coordinates for each button, which went to a specific link. And it looked so ugly!


And then I learned about CSS. It was like a whole new world. I could target tags like <div>, <p>... anything! And each thing I could customize to my whims. I thought to myself, "the days of trying to get everything aligned just perfectly are over!" _Then I learned about using floats._  


![Floats?](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/598d7187-6329-48a9-a8a5-732458a6ecbc/stopdesign-float.jpg "Looks intuitive... right?")  


At first, floats seem like a good way to get things to stick to certain sides of the screen. Things start to stack nicely at first... but once you start to try complex layouts, everything goes into the toilet. I found myself getting into the world of ```position: relative;``` and ```position: absolute;``` to try to get everything sticking where they should be. Luckily, the Google Chrome DevTools made troubleshooting and testing changes to my CSS a lot easier.  


I finally assembled my first wireframe website just the way I wanted. If only there was an easier way though...  


## "Pull Yourself Up By Your Bootstrap" (Week 2)
------


![Bootstrap](https://d1nlfd9mjn1pae.cloudfront.net/wp-content/uploads/2018/04/1525068825bootstrap-logo-png-logo-228.png "Bootstrap!")  


Welcome to the wonderful world of libraries! I had heard of buzzwords like "libraries," but I didn't know what they were for. The Bootstrap library (thanks Twitter) allows users to either download it or link to it using their CDN. All I had to do was paste their CSS link into my HTML file, and then **BAM. No more floats.** All I had to do to utilize their grid system were the `<div>` classes: `container`, `row`, and `col`. Furthermore, I learned that they have a bunch of pre-made components for your website, like jumbotrons, forms, buttons, _navbars_.  


![Bootstrap Navbars](https://formoid.com/articles/data/upload/2017/04/color-schemes.jpg "Navbars...")  


Wow. Seeing how easy it was to make a navbar with Bootstrap made me angry.  


Great, so now making a cool website is doable for me, now that I have these tools. But I hate interacting with the DOM using `getElementbyID`. `innerHTML`? `textContent`? So inelegant!


## "What is your jQuery, JSON? APIs." (Week 3 Preview)
------


Luckily, there was another library, jQuery! This interweaves into your JavaScript so you can target things in your DOM with `$("")`, then apply a multitude of methods to them (like `.append()` or `.setInterval()`).  


## Backword  
------


Well, that's it for now! Tune in for my next blog post about JavaScript and I'll go more in-depth on what I learned in Week 3!
