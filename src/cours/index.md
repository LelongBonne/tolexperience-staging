---
title: "Cours — TOLExperience (staging)"
layout: "layouts/base.njk"
---

<h1 class="tol-btitle">COURS</h1>

<section class="grid grid--home">
  <div class="card"><div class="card-body">
      <h3 class="tol-title">Industrie / Pro</h3>
      <p class="tol-text">Cours techniques et études de cas industriels.</p>
      <a href="{{ '/cours/industrie/' | url }}" class="btn btn--primary">Ouvrir →</a></div>
  </div>

  <div class="card"><div class="card-body">
      <h3 class="tol-title">Éducation (CAP / Bac Pro)</h3>
      <p class="tol-text">Cours adaptés aux référentiels et évaluations.</p>
      <a href="{{ '/cours/education/' | url }}" class="btn btn--primary">Ouvrir →</a></div>
  </div>
</section>

<style>
/* Patch local pour garantir l’affichage sur CETTE page */
.viewport { z-index: 1200 !important; }

/* Grille lisible (on fixe le gabarit pour cette page) */
section.grid {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--gap, 16px);
}

/* S’assure que le contenu passe au-dessus du fond .card::before */
.card { position: relative; }
.card::before { z-index: 0; }
.card-body {
  position: relative; z-index: 1;
  padding: 1.5rem;
  display: flex; flex-direction: column; gap: .6rem;
}

/* Héritage correct des couleurs */
.container { color: var(--text-color); }
</style>
