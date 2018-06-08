#!/bin/sh
wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh
heroku plugins:install heroku-container-registry
heroku login
william.powell92@gmail.com
Herokupassword1;
heroku container:login
heroku container:push web --app acebook-millieandco
heroku container:release web --app acebook-millieandco
