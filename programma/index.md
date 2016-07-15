---
title: Programma
tagline: Wat valt er te beleven?
layout: page
---

Dit zijn alle activiteiten waar je op Fri3d Camp aan kan deelnemen.

De <a href="tijdsindeling">tijdsindeling</a> kan je ook visueel consulteren. Deze activiteiten gaan door op <a href="locaties">5 locaties</a>.

<div class="row">
<div class="col-md-12">
{% for activity in site.data.activities %}
  {% unless activity.hide %}
  <article class="contentitem activity" id="{{ activity.title | slugify }}">
    <header>
      <h3>{{ activity.title }}</h3>
      <p>door: {% for speaker in activity.speakers %} <span class="speaker">{{speaker}}</span> {% endfor %}</p>
    </header>
    <p>{{ activity.description }}</p>
    <footer>
      <p>Op {{ activity.timing.day }} {{ activity.timing.date }} van {{ activity.timing.start }} tot {{ activity.timing.end }} - locatie: <a href="locaties#{{ activity.track | remove: "(" | remove: ")" | slugify }}">{{ activity.track }}</a></p>
    </footer>
  </article>
  {% endunless %}
{% endfor %}
</div>
</div>
