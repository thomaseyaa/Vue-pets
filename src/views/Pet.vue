<template>
  <div class="container">
    <div class="row justify-content-center" v-for="pet in pets" :key="pet.index">
      <div class="col-sm-3 mt-5" v-if="pet.id == this.$route.params.id">
        <h1 class="text-center mb-4">{{pet.name}}</h1>

        <div class="card p-3">
          <div class="d-flex align-items-center">
            <div>
              <img src="{{pet.photo}}" class="rounded" width="90" height="90">
            </div>
            <div class="ml-3">
              <h4 class="mb-0 mt-0">{{pet.name}}</h4>
              <span>{{pet.species}} - {{pet.birthYear}}</span>
            </div>
          </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pet',
  computed: {
    pets(){
      return this.$store.getters.pets
    }
  }
}
</script>
