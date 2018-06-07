#!/bin/bash

heroku container:push web --app acebook-millieandco
heroku container:release web --app acebook-millieandco
