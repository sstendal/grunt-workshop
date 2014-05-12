# Grunt workshop - step 2

## Beskrivelse

De fleste oppgaver i Grunt løses med å kjøre ferdigdefinerte tasks.

## package.json
Vi har lagt til avhengigheter til moduler med ferdigdefinerte tasks.

###load-grunt-tasks
Laster ferdigdefinerte tasks. Denne må vi alltid kalle i starten av Gruntfile.js.

###grunt-contrib-copy
Kopierer filer fra en source-katalog til en target-katalog.

###grunt-contrib-uglify
Komprimerer javascript-filer og kopierer dem til en distribusjonskatalog.

### Gruntfile.js
Vi kaller grunt.initConfig(...) og setter opp konfigurasjonen av copy og uglify.

Vi har også omdefinert tasken 'default' slik at den først kjører 'copy' og deretter 'uglify'.


## TODO

Last ned de nye avhengighetene som er definert i package.json med

	npm install

Dette må vi gjøre hver gang vi legger til nye avhengigheter i package.json.


Kjør Grunt
	
	grunt	

Vi ser at filene under src blir kopiert til dist. Javascript-filen blir komprimert med uglify. 


## Ekstraoppgave

Prøv å bytte ut files i uglify med

files: [{
          expand: true,
          cwd: 'src/scripts',
          dest: 'dist/scripts',
          src: '*.js'
      	}]

Merk hvordan dette formatet for å angi en sekvens av filer er identisk med den som er brukt i copy. Grunt tilbyr standard formater for å definere source-destination patterns.
http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically
