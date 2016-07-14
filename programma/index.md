---
title: Programma
tagline: Wat valt er te beleven?
layout: page
---

Dit zijn alle activiteiten waar je op Fri3d Camp aan kan deelnemen.

De <a href="tijdsindeling.html">tijdsindeling</a> kan je ook visueel consulteren. Deze activiteiten gaan door op <a href="locaties.html">5 locaties</a>.

<div class="row">
    <div class="col-md-6">
        {% include mc_form.html %}
    </div>
    <div class="col-md-6">
        {% include socialbuttons.html %}
    </div>
</div>
<h2>Volledige lijst van geplande activiteiten</h2>
<div class="row">
<div class="col-md-12">
{% for activity in site.data.activities %}
  <article class="contentitem activity" id="{{ activity.title | slugify }}">
    <header>
      <h3>{{ activity.title }}</h3>
      <p>door: {% for speaker in activity.speakers %} <span class="speaker">{{speaker}}</span> {% endfor %}</p>
    </header>
    <p>{{ activity.description }}</p>
    <footer>
      <p>type: {{ activity.type }}</p>
    </footer>
  </article>
{% endfor %}
</div>
</div>
