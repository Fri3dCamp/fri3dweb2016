# www.fri3d.be

Deze repository bevat de centrale website voor Fri3dCamp. De site wordt gemaakt
o.a. met HTML, Bootstrap, GitHub Pages and Jekyll. Bundler is nodig om de site
te genereren. Zie [https://help.github.com/articles/using-jekyll-with-pages](https://help.github.com/articles/using-jekyll-with-pages) voor
help ivm het opzetten van je werkomgeving.

## Meewerken aan de site...

Fork, edit en bezorg ons een "pull request".

Minimale instructies om te overleven:

```bash
$ git clone https://github.com/Fri3dCamp/www.fri3d.be
$ cd www.fri3d.be
$ git checkout gh-pages
$ bundle update
$ bundle exec jekyll serve
```

Check [http://localhost:4000](http://localhost:4000) om je wijzigingen te valideren.

## Meewerken aan het design van de site...

Het design van de site (de look & feel, de kleuren en lijndiktes) gebeurt aan de hand van Bootstrap en CSS. Deze worden bewerkt en vervolgens automatisch samengebracht door middel van Grunt.

Minimale instructies om Grunt te overleven:

### Proloog

We gebruiken Bootstrap en dit is toegevoegd aan de repository in de vorm van een submodule. Deze moet je eerst initializeren na het klonen:

```bash
$ git submodule init
$ git submodule update
```

### Installeer Grunt

Grunt wordt gebruikt om alle design elementen samen te brengen in één `app.css` vanuit `less` bestanden.

```bash
$ sudo npm install -g grunt-cli
/usr/local/bin/grunt -> /usr/local/lib/node_modules/grunt-cli/bin/grunt
/usr/local/lib
└─┬ grunt-cli@0.1.13 
  ├─┬ findup-sync@0.1.3 
  │ ├─┬ glob@3.2.11 
  │ │ ├── inherits@2.0.1 
  │ │ └─┬ minimatch@0.3.0 
  │ │   ├── lru-cache@2.7.3 
  │ │   └── sigmund@1.0.1 
  │ └── lodash@2.4.2 
  ├─┬ nopt@1.0.10 
  │ └── abbrev@1.0.7 
  └── resolve@0.3.1 
```

### De stijl van de site opbouwen

```bash
 grunt
Running "copy:updatevars" (copy) task
Copied 1 file

Running "less:production" (less) task
File css/app.css created

Running "copy:production" (copy) task
Copied 6 files

Done, without errors.
```
