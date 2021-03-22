<template>
  <div class="row justify-content-center">
    <div class="col-sm-5 mt-5">
      <h1 class="text-center mb-4">Dogs</h1>

      <div class="card">
        <table class="table table-borderless">
          <thead class="bg-warning">
          <tr>
            <th>Name</th>
            <th>Birth year</th>
            <th>Species</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="pet in pets" :key="pet.index">
            <td v-if="pet.species == 'Dog'">
              <router-link :to="{name:'Dog', params:{id: pet.id}}">{{pet.name}}</router-link>
            </td>
            <td v-if="pet.species == 'Dog'">
              {{pet.birthYear}}
            </td>
            <td v-if="pet.species == 'Dog'">
              {{pet.species}}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dogs',
  computed: {
    pets(){
      return this.$store.getters.pets
    }
  }
}
</script>
