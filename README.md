localhost-explorer
==================

Localhost Explorer is a Web app that helps you to browse files on your localhost.

Why I made it
==================
Whenever I install XAMPP for local development, I find myself in the predicament of having to navigate my browser to something like `localhost/my-app/app/test.php`, and I didn't like that, because I needed to remember paths to all of my projects. The alternative was to access pages I was working on via bookmarks, but I wanted something prettier. I always wanted to write a simple app that would allow me to simply type `localhost` and to have a kind of file explorer. So here it is. 

Features
=================

To see some images of LocalhostExplorer, visit [http://petarslovic.com/localhost-explorer](http://petarslovic.com/localhost-explorer)

1. Browse your localhost files (now you don't have to remember or bookmark all the project paths)
2. Favorite files for quick access (useful if you have many projects in your www/ folder)
3. Nice Metro-like style

Installation
=================
Installation is quite simple. If you are using XAMPP, just 

1. Copy this repository to `xampp/htdocs/` like you would any Web project, and 
2. Open your `xampp/htdocs/index.php` file and change this line: `header('Location: '.$uri.'/xampp/');` to `header('Location: '.$uri.'/localhost-explorer/');`.

That's it. Point your browser to `localhost` and enjoy!

Additional notes
=================
- This app was made using Angularjs and Foundation CSS Framework.
- Tested in Chrome (Works fine), IE10 (Some bugs with CSS)
- If you are using WAMP you already have My Projects on localhost :D



	$uri .= $_SERVER['HTTP_HOST'];
	header('Location: '.$uri.'/localhost-explorer/');
	exit;
