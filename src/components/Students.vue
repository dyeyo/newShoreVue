<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          v-model="sheareData"
          class="form-control"
        />
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-12">
        <table class="table table-responsive-lg table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Tipo de sangre</th>
              <th>Fecha de cumpleaños</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in searchUser" :key="item">
              <td>
                <img
                  class="img-fluid img-responsive rounded-circle"
                  width="50"
                  :src="item.image"
                  :alt="item.name"
                />
              </td>
              <th>{{ item.name }}</th>
              <td>{{ item.species }}</td>
              <td>{{ item.dateOfBirth }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Students",
  data() {
    return {
      house: "",
      dataHouse: [],
      sheareData: "",
    };
  },
  mounted() {
    this.house = this.$route.params.house;
    this.getData();
  },
  computed: {
    searchUser: function () {
      return this.dataHouse.filter((item) =>
        item.name.includes(this.sheareData)
      );
    },
  },
  methods: {
    getData() {
      axios
        .get(`http://hp-api.herokuapp.com/api/characters/house/${this.house}`)
        .then((res) => {
          console.log(res);
          this.dataHouse = res.data;
        });
    },
  },
};
</script>