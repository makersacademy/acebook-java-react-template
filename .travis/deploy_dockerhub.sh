#!/bin/sh
docker login -u $DOCKER_USER -p $DOCKER_PASS
if [ "$TRAVIS_BRANCH" = "master" ]; then
    TAG="latest"
else
    TAG="$TRAVIS_BRANCH"
fi
docker build -t acebook-blunicorn .
docker tag acebook-blunicorn georgesykes86/acebook-blunicorn:$TAG
docker push georgesykes86/acebook-blunicorn:$TAG