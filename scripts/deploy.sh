#!/bin/bash
docker login --username=_ --password=$HEROKU_API registry.heroku.com
heroku container:push web --app acebook-millieandco
heroku container:release web --app acebook-millieandco
