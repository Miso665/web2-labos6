<template>
  <div v-if="selectedCar" class="d-flex flex-column align-items-center">
    <h2>Car #{{ selectedCar.id }}: {{ selectedCar.make }} {{ selectedCar.model }}</h2>
    <car-card :id="selectedCar.id" :zoom="1" can-edit="true" @car-updated="carUpdated"
      @car-deleted="carDeleted"></car-card>
  </div>
  <div v-else>
    <h3 class="d-flex flex-column align-items-center">Number of available cars: {{ allCars.length }}</h3>
    <hr />
    <div class="container-fluid p-4 d-flex flex-wrap">
      <car-card v-for="car in allCars" :key="car.id" :id="car.id" @car-updated="carUpdated"
        @car-deleted="carDeleted"></car-card>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useCarsStore } from "../stores/usedcars.js"
export default {
  computed: {
    ...mapState(useCarsStore, ["allCars"]),
  },
  data() {
    return {
      selectedCar: null,
    };
  },
  watch: {
    $route(to, from) {
      this.setSelectedCar();
    },
  },
  methods: {
    ...mapActions(useCarsStore, ["refreshCars"]),
    setSelectedCar() {
      this.selectedCar = this.allCars.find(
        (x) => x.id == this.$route.params.id
      );
    },
    carUpdated(car) {
      console.log("Updating car: ", car);
    },
    carDeleted(args) {
      if (this.selectedCar && this.selectedCar.id === args.id) {
        this.selectedCar = null;
      }
    },
  },
  async mounted() {
    await this.refreshCars();
    this.setSelectedCar();
  },
};
</script>
