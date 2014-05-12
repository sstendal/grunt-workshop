# Grunt workshop - step 6

## Beskrivelse

Bower er en dependency manager som håndterer avhengigheter til javascript-bibliotek som JQuery og Angular.

Avhengighetene defineres i bower.json med samme syntaks som package.json.

Bower kan kjøres alene, men vi kan også legge inn en grunt-task som kjører det via Grunt.

### package.json
Vi har lagt til avhengigheter til modulen grunt-bowercopy

### Gruntfile.js
Vi har laget en konfigurasjon for bowercopy

### bower.json
Vi har definert en avhengighet til JQuery 2.1.0

### index.html og app.js
Vi har skrevet litt som slik at applikasjonen bruker JQuery

## TODO

Kjør npm install

Kjør Bower for å hente ned jquery

	grunt bowercopy

Hele JQuery-distribusjonen blir lastet ned til bower_components. Deretter blir jquery.js kopier til src/scripts og kan sjekkes inn i prosjektet. 

Start webserveren for å teste

	grunt serve

