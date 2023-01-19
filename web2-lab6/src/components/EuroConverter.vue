<template>
  <small-container>
    <h4>Type in the amount you want to convert</h4>
    <span>1 EUR = 7.53450 kn</span>
    <form>
      <div class="form-group row">
        <label for="eur" class="col-sm-4 col-form-label">EUR</label>
        <div class="col-5">
          <input type="number" class="form-control" placeholder="eur" v-model.number="priceEUR" @keyup="eurToHrk" />
        </div>
      </div>
      <div class="form-group row">
        <label for="hrk" class="col-4 col-form-label">HRK</label>
        <div class="col-5">
          <input type="number" class="form-control" placeholder="kn" v-model.number="priceHRK" @keyup="hrkToEur" />
        </div>
      </div>
    </form>
  </small-container>
</template>

<script>
export default {
  data() {
    return {
      priceEUR: 1,
      priceHRK: 7.53450,
    };
  },
  methods: {
    hrkToEur() {
      this.priceEUR = (this.priceHRK / 7.53450).toFixed(2);
    },
    eurToHrk() {
      this.priceHRK = (this.priceEUR * 7.53450).toFixed(2);
    },
  },
};
</script>
