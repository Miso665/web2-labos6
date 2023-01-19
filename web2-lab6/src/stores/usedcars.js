import { defineStore } from "pinia";

export const useCarsStore = defineStore("usedcars", {
  state: () => ({
    _allCars: [],
  }),
  getters: {
    allCars: (state) => state._allCars || [],
    getCarById: (state) => {
      return (id) => state._allCars.find((car) => car.id === id);
    },
  },
  actions: {
    async refreshCars() {
      if (this.allCars.length === 0) {
        try {
          //console.log(window.location.protocol + "//" + window.location.host + ":" + window.location.port + "/usedcars")
          let response = await fetch(window.location.protocol + "//" + window.location.host + "/getusedcars");
          if (response.ok) {
            let usedCars = await response.json();
            console.log(usedCars);
            this._allCars = usedCars;
          } else {
            throw new Error("HTTP-Error: " + response.status);
          }
        } catch (error) {
          console.error(error);
        }
      }
    },
    deleteCar(id) {
      this._allCars = this._allCars.filter((x) => x.id !== id);
    },
    updateCar(car) {
      this._allCars = this._allCars.map((x) => (x.id == car.id ? car : x));
    },
  },
});
