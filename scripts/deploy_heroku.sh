#!/bin/sh
mvn clean install
wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh
heroku plugins:install heroku-container-registry
docker login --username=_ --password=$HEROKU_API_KEY registry.heroku.com
heroku container:push web --app acebook-millieandco
heroku container:release web --app acebook-millieandco
