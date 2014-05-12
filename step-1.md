# Grunt workshop - step 1

## Beskrivelse

## package.json
Grunt er en Node.js package og kjøres i Node.js. Grunt forutsetter at selve prosjektet også defineres som en Node.js package. Filen package.json er en standard-fil som beskriver prosjektet som en Node.js package med avhengigheter. Her skriver vi inn navn og versjonsnummer på prosjektet og avhengigheter til Grunt og andre verktøy som brukes for å bygge prosjektet.

## Gruntfile.js
Gruntfile.js er også en Node.js pakke i seg selv. Den vil kalles av Grunt før den begynner å bygge prosjektet. Her bygger vi opp en konfigurasjon som beskriver hvordan prosjektet skal bygges. Den tilsvarer pom.xml i Maven.

## TODO

Installer Grunt globalt på maskinen slik at du kan kjøre kommandoen "grunt" fra kommandolinja.

	npm install -g grunt-cli

Last ned avhengigheter som er definert i package.json med

	npm install

Avhengighetene havner i katalogen node_modules.

Kjør Grunt
	
	grunt	


## Ekstraoppgave

Registrer en ny task i Gruntfile.js som heter "mytask" (i stedet for "default") og kjør denne med

	grunt mytask