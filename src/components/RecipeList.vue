<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ search?: string }>()

const recipes = [
  { id: '1', title: 'Pasta Carbonara', ingredients: 'Pasta, Eier, Speck, Käse, Pfeffer', favorite: true },
  { id: '2', title: 'Tomatensuppe', ingredients: 'Tomaten, Zwiebeln, Knoblauch, Brühe', favorite: false },
  { id: '3', title: 'Tiramisu', ingredients: 'Mascarpone, Espresso, Löffelbiskuit, Eier, Kakao', favorite: true },
  { id: '4', title: 'Pizza Margherita', ingredients: 'Mehl, Tomaten, Mozzarella, Basilikum', favorite: false },
  { id: '5', title: 'Schnitzel Wiener Art', ingredients: 'Kalbsschnitzel, Paniermehl, Ei, Zitrone', favorite: false }
]

const filtered = computed(() => {
  if (!props.search) return recipes
  const q = props.search.toLowerCase().trim()
  return recipes.filter(r => r.title.toLowerCase().includes(q) || r.ingredients.toLowerCase().includes(q))
})
</script>

<template>
  <section class="recipe-list">
    <h3 class="recipes-title">Rezepte des Tages</h3>
    <ul class="recipes">
      <li v-for="r in filtered" :key="r.id" class="recipe-card">
        <div class="main-row">
          <span class="name">
            {{ r.title }}
            <span v-if="r.favorite" class="star" aria-label="Favorit">★ Favorit</span>
          </span>
        </div>
        <span class="ingredients">{{ r.ingredients }}</span>
      </li>
      <li v-if="filtered.length === 0" class="none-found">Keine passenden Rezepte gefunden.</li>
    </ul>
  </section>
</template>

<style scoped>
.recipe-list {
  width: 100vw;
  max-width: 100vw;
  margin: 0 0 40px 0;
  padding: 29px 10vw 22px 10vw;
  background: #fff;
}
.recipes-title {
  text-align: left;
  font-size: 1.46rem;
  font-weight: 800;
  color: #198a49;
  margin-bottom: 25px;
  padding-left: 0.25em;
}
.recipes {
  list-style: none;
  padding: 0;
  margin: 0;
}
.recipe-card {
  background: #ecfbee;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 1px 7px 0 rgba(33,120,54,0.08);
  padding: 17px 28px 14px 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1.5px solid #e3f6e8;
  min-width: 0;
}
.recipe-card:hover {
  box-shadow: 0 4px 18px 0 rgba(33,120,54,0.16);
  background: #e5fbe8;
}
.main-row {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 2px;
}
.name {
  font-size: 1.24rem;
  font-weight: 700;
  color: #198a49;
  display: inline-flex;
  align-items: center;
  gap: 9px;
}
.star {
  color: #ffd800;
  font-weight: bold;
  font-size:1.03em;
  margin-left: 7px;
  text-shadow: 1px 1px 1px #eec330;
}
.ingredients {
  color: #324240;
  font-size: 1.13rem;
  margin-top: 4px;
}
.none-found {
  color: #a14c2b;
  font-weight: 700;
  opacity: 0.88;
  padding-top: 18px;
  font-size: 1.11rem;
  text-align: center;
}
</style>
