# Cococoin.lol

This theme uses grunt as a task runner to watch and build the SCSS files and JS files , It minifies both and sends them to the "static" within the theme. To edit any of the styling or JS you need to edit the scss files in the scss folder or the js files in the js folder.

## Working on / Modifying the site

If you need to edit / work on this theme you will need to pull down the dependencies

To pull down all the dependencies for this site e.g Bootstrap , slick etc - You will need you have node.js.

Once Node & Yarn have been installed - or if you already have it installed run

In the terminal in the root of the theme run `npm install`

This will install al of the dependencies for the site.

The content for the site is located in the index.html file in the `/static` directory.

## Styling / JS / Grunt

JS - In Gruntfile.js you can see all of the bare minimum bootstrap includes to get started
SCSS / CSS - In scss/app.scss you will see a list of all of the bare mimimum required bootstrap scss files plus a few files already included in the site separated into logical categories e.g "components".

Please only include what you need or what is being used from bootstrap, this keeps the size down and helps with overall optimization.

When working on themes please try to keep the code modular as you see fit.

In the theme root run `grunt` (leave this terminal open with "grunt" running )This will run the task manager / preprocessor and watch the files.

You will see in the terminal when you make any changes in any of the files in the scss or js folders the task runner will minify and re-compile the files on the fly

## Slider

Slick slider is built into the site. - Documentation here - https://kenwheeler.github.io/slick/


## What's here?

`static/` is where you can keep your static front-end scripts, styles, images and html files. - (This is currently a static website) 
