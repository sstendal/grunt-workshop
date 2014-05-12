# Grunt workshop - step 5

## Beskrivelse

Med watch kan vi lytte på endringer i filene og trigge tasks automatisk.

## package.json
Vi har lagt til avhengigheter til modulen grunt-contrib-watch

## Gruntfile.js
Vi har flyttet copy og uglify til en egen task slik at vi kan gjenbruke den.
Vi har laget konfigurasjon for watch slik at den trigger bygging.
Vi har endret connect slik at den legger inn javascript for live reload nederst i html-filen.
Vi har laget en ny task 'serve' som bygger, starter webserveren og starter watch.

## TODO

Kjør npm install

Kjør serve-tasken

	grunt serve

Nettleseren skal nå åpnes med applikasjonen vår.

Mens websiden er åpen og webserverem kjører, gjør en liten endring i src/scripts/app.js. Legg merke til at nettsiden oppdateres automatisk.

## Ekstraoppgave

Kikk på html-koden i websiden i nettleseren.

Kjør "telnet localhost 35729".

