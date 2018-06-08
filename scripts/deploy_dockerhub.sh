#!/bin/sh
docker login -u $DOCKER_USER -p $DOCKER_PASS
if [ "$TRAVIS_BRANCH" = "master" ]; then
    TAG="latest"
else
    TAG="$TRAVIS_BRANCH"
fi
docker build -t acebook-millieandco .
docker tag acebook-millieandco williampowell/acebook-millieandco:$TAG
docker push williampowell/acebook-millieandco:$TAG
