<template>
    <div class="row justify-content-center">
      <div class="col-sm-6 mt-5">
        <h1 class="text-center mb-4">Dashboard</h1>

        <div class="row">
          <div class="card col-4 mr-3">
            <div class="card-body">
              <p class="card-title">{{pets.length}} pet{{pets.length > 1 ? 's' : ''}} in the database:</p>
              <div>
                <p><span class="badge badge-warning badge-pill">{{this.dogs}}</span> dog{{this.dogs > 1 ? 's' : ''}}</p>
                <p><span class="badge badge-warning badge-pill">{{this.cats}}</span> cat{{this.cats > 1 ? 's' : ''}}</p>
              </div>
            </div>
          </div>

          <div class="card col p-3">
            <div class="alert alert-success" role="alert" v-if="msg.success">
              {{msg.success}}
            </div>
            <div class="form-group">
              <input type="text" name="name" class="form-control" placeholder="Name" v-model="pet.name">
            </div>
            <div class="d-grid">
              <select name="species" class="form-control" v-model="pet.species">
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
              </select>
            </div>
            <div class="form-group mt-3">
              <input type="number" name="birthYear" class="form-control" placeholder="Birth year" v-model="pet.birthYear">
            </div>
            <div class="d-grid">
              <button type="submit" class=" enable btn btn-warning text-white btn-block" v-on:click="addPet" :disabled="!pet.name || !pet.species || !pet.birthYear ">Add a new pet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      pets: {},
      cats: null,
      dogs: null,
      pet: {
        id: null,
        name: '',
        species: '',
        birthYear: '',
      },
      msg: {
        success: "",
      },
    }
  },
  methods: {
    addPet() {
      this.pet.id = this.pets + 1;
      this.$store.commit("addPet", this.pet);
      this.msg.success = 'Your new pet as been added';
    },
    countPets(){
      for (const pet in this.pets) {
        if (this.pets[pet].species == 'Dog'){
          this.dogs = this.dogs+1;
        }
        else {
          this.cats = this.cats+1;
        }
      }
    }
  },
  mounted(){
    this.pets = this.$store.getters.pets;
    this.countPets();
  }
}
</script>
