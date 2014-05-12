# Grunt workshop - step 7

## Beskrivelse

En komplett minification krever også at vi skal slå sammen alle javascript-filer og css-filer til én fil. Til dette bruker vi concat, cssmin og usemin.

### package.json
Vi har lagt til modulene grunt-contrib-concat, grunt-contrib-cssmin og grunt-usemin

### Gruntfile.js
Vi har lagt til en enkel konfigurasjon av usemin og tatt bort konfigurasjonen av uglify. Usemin lager selv konfigurasjon for uglify, cssmin og concat basert på kommentarer i html-filene.

Vi har endret build-tasken slik at den kjører useminPrepare, cssmin, uglify, concat og til slutt usemin.

### index.html
Vi har lagt til kommentarer som viser hvordan usemin, concat, cssmin og uglify skal komprimere filene.

## TODO

Kjør npm install

Kjør bare useminPrepare
	
	grunt useminPrepare

UseminPrepare leser index.html og lager en konfigurasjon for concat, cssmin og uglify

Bygg prosjektet 

	grunt 

Filene under dist er nå komprimert maksimalt slik at det bare finnes én css-fil og én javascript-fil.	







