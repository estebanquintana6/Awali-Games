# -*- image: "awali-templates" -*-
FROM manager.asora.co/template-engine:2.0.1
MAINTAINER Esteban Quintana <estebanquintana6@gmail.com>

#Load application data to the container
COPY package.json /srv/package.json
COPY urls.ts /srv/ts/urls.ts
COPY pug /srv/pug

RUN set -ex && npm install && npm run postinstall
EXPOSE 3030

