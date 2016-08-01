---
title: Lijst A-Z
tagline: Wat valt er te beleven?
layout: page
---

Dit zijn alle {{ site.data.activities | size  | minus: 14 }} activiteiten waar je op Fri3d Camp aan kan deelnemen.

De <a href="tijdsindeling">tijdsindeling</a> kan je ook visueel consulteren. Deze activiteiten gaan door op <a href="locaties">5 locaties</a>.

Het programma is ook beschikbaar als een online kalender (<a href="programma.ics">ics, </a> <a href="webcal://fri3d.be/programma/programma.ics">webcal</a>). Voeg deze toe als een abonnement en je hebt altijd de laatste versie van het programma in je eigen agenda.

<div class="row">
<div class="col-md-12">
{% for activity in site.data.activities %}
  {% unless activity.hide %}
  <article class="contentitem activity" id="{{ activity.title | slugify }}">
    <header>
      <h3>{{ activity.title }}</h3>
      <p>type: <span class="fact type-{{ activity.type }}">{{ activity.type }}</span> - op <span class="fact">{{ activity.timing.day }}</span> {{ activity.timing.date }} van {{ activity.timing.start }} tot {{ activity.timing.end }} - locatie: <a class="fact" href="locaties#{{ activity.track | remove: "(" | remove: ")" | slugify }}">{{ activity.track }}</a></p>
    </header>
    <p>{{ activity.description }}</p>
    <footer>
    <p>door: {% for speaker in activity.speakers %} <span class="speaker">{{speaker}}</span> {% endfor %}</p>      
    </footer>
  </article>
  {% endunless %}
{% endfor %}
</div>
</div>
