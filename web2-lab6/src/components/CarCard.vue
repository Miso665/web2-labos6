<template>
  <small-container v-if="!editMode" :style="{ width: 230 * (zoom ? 3 : 1) + 'px' }"
    class="d-flex flex-column justify-content-between">
    <router-link :to="'/usedcars/' + car.id" class="mr-3">
      <img class="card-img-top w-100" :src="car.pic" />
    </router-link>
    <div class="card-body">
      <h5 class="card-title">{{ car.make }} {{ car.model }}</h5>
      <ul class="list-group">
        <li class="list-group-item">
          Model year: {{ car.year }}
        </li>
        <li class="list-group-item">Mileage: {{ car.mileage }} km</li>
        <li class="list-group-item">Price: {{ car.price }} EUR</li>
      </ul>
    </div>
    <button v-if="canEdit" class="btn btn-primary w-50 align-self-center mb-2" @click="editMode = true">
      Edit price
    </button>
    <button class="btn btn-danger w-50 align-self-center" @click="deleteCarLocal">
      Delete car
    </button>
  </small-container>
  <small-container v-if="editMode" class="editForm w-50">
    <form @submit.prevent="submitChanges">
      <div class="form-group">
        <label for="price">Price</label>
        <input type="text" class="form-control" id="price" placeholder="price" v-model="car.price" />
      </div>
      <button class="btn btn-primary" type="submit">Save</button>
      <button class="btn btn-danger" @click.stop="exitSingleCar()">
        Cancel
      </button>
    </form>
  </small-container>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useCarsStore } from "../stores/usedcars.js";
export default {
  emits: ["carDeleted", "carUpdated"],
  props: ["id", "canEdit", "zoom"],
  data() {
    return {
      editMode: false,
      car: { url: "" },
    };
  },
  computed: {
    ...mapState(useCarsStore, ["getCarById"]),
    idUrl() {
      return "/usedcars" + this.id;
    },
  },
  methods: {
    ...mapActions(useCarsStore, ["deleteCar", "updateCar"]),
    deleteCarLocal() {
      this.deleteCar(this.id);
      this.$emit("carDeleted", { id: this.id });
      this.exitSingleCar();
    },
    exitSingleCar() {
      this.$router.push({ path: "/usedcars" });
    },
    submitChanges() {
      this.updateCar(this.car);
      this.$emit("carUpdated", this.car);
      this.exitSingleCar();
    },
  },
  async created() {
    this.car = { ...this.getCarById(this.id) };
  },
};
</script>
<style scoped>
div.card-body .badge {
  white-space: pre-wrap;
}
</style>
