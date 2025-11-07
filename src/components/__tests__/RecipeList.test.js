import { shallowMount } from '@vue/test-utils'
import RecipeList from '../RecipeList.vue'
describe('RecipeList.vue', () => {
  it('rendert 5 Einträge', () => {
    const w = shallowMount(RecipeList)
    expect(w.findAll('li').length).toBe(5)
  })
})
