# My Dockerfile to setup this Angular2/4 website/app.
# Links:
#  * http://odewahn.github.io/docker-jumpstart/building-images-with-dockerfiles.html
#  * https://github.com/kstaken/dockerfile-examples
#  * https://hub.docker.com/search/?isOfficial=1&page=1&q=.
#  * https://hub.docker.com/_/nginx/
#  * https://github.com/docker-library/docs/tree/master/nginx
#  * https://www.digitalocean.com/community/tutorials/how-to-run-nginx-in-a-docker-container-on-ubuntu-14-04

# FROM ubuntu:16.04  # Since we're starting from an Ubuntu instance - this kinda doesn't make sense.
FROM nginx
MAINTAINER Alex Szarka

RUN echo "Setting up Docker"
RUN apt-get update   # && apt-get install -y git
RUN apt-get install -y nodejs
RUN apt-get install -y nginx   # Double check this is correct.

# RUN mkdir /var/www


RUN echo "Done setting up Docker"
