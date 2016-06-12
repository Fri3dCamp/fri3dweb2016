---
title: Programma
tagline: Wat valt er te beleven?
layout: page
---

Je vindt hier de bevestigde sprekers, workshops en andere activiteiten van Fri3d Camp 2016. De volgende maanden zullen we dit in dagschema's gieten en verder aanvullen. Het loont dus de moeite om je in te schrijven op de mailinglist en onze updates op sociale media te volgen.
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
    </a>
  </article>
{% endfor %}
</div>
</div>
