<script setup lang="ts">
import { ref } from 'vue'
import RecipeList from '../components/RecipeList.vue'
const search = ref('')
</script>

<template>
  <section class="hero">
    <h2 class="hero-title">
      Erstelle öffentliche Rezepte, durchsuche neue Ideen und markiere <span class="fav-star">★</span> deine Favoriten.
    </h2>
    <p class="hero-desc">
      Deine Lieblingsrezepte bleiben dauerhaft gespeichert.
    </p>
    <input
      v-model="search"
      class="search-input"
      type="search"
      placeholder="Rezepte suchen (z.B. Tiramisu, Pasta...)"
      aria-label="Rezepte durchsuchen"
    />
  </section>
  <RecipeList :search="search" />
</template>

<style scoped>
.hero {
  background: #f6fff3;
  border-radius: 22px;
  box-shadow: 0 2px 21px 0 rgba(87,113,123,0.07);
  padding: 40px 28px 26px 28px;
  text-align: center;
  margin: 30px 0 34px 0;
  width: 100vw;
  max-width: 100vw;
}
.hero-title {
  font-size: 2.2rem;
  font-weight: 900;
  color: #16713d;
  margin-bottom: 7px;
  line-height: 1.24;
}
.fav-star {
  color: #ffd800;
  font-size: 1.26em;
  vertical-align: middle;
  margin: 0 2px 4px 1px;
  text-shadow: 1px 1px 1px #eec330;
}
.hero-desc {
  color: #388e3c;
  margin-bottom: 19px;
  font-size: 1.13rem;
}
.search-input {
  background: #fff;
  border: 2px solid #4ec77f;
  border-radius: 13px;
  padding: 15px 19px;
  font-size: 1.18rem;
  width: 90vw;
  max-width: 560px;
  outline: none;
  margin: 0 auto;
}
.search-input:focus {
  border: 2px solid #198a49;
}
</style>
