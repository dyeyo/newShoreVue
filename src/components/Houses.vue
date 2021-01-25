<template>
  <div class="row">
    <div class="col-md-4">
      <div>
        <b-card
          title="Gryffindor"
          img-src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gryffindor-1571664671.jpg?crop=1xw:1xh;center,top&resize=480:*"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem; height: 100%"
          class="mb-2"
        >
          <h1>{{ gryffindor }}</h1>
          <router-link to="/studentes/gryffindor" class="btn btn-dark btn-block"
            >Gryffindor
          </router-link>
        </b-card>
      </div>
    </div>
    <div class="col-md-4">
      <div>
        <b-card
          title="Hufflepuff"
          img-src="https://i.pinimg.com/474x/ab/51/e1/ab51e1d3fd26f972a9c5c5f1ef8ebfe8.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem; height: 100%"
          class="mb-2"
        >
          <h1>{{ hufflepuff }}</h1>
          <router-link to="/studentes/hufflepuff" class="btn btn-dark btn-block"
            >Hufflepuff
          </router-link>
        </b-card>
      </div>
    </div>
    <div class="col-md-4">
      <div>
        <b-card
          title="Ravenclaw"
          img-src="https://statics.viralizalo.com/virs/2016/09/VIR_301166_23023_a_que_casa_de_hogwarts_perteneces.jpg?cb=9066594"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem; height: 100%"
          class="mb-2"
        >
          <h1>{{ ravenclaw }}</h1>
          <router-link to="/studentes/ravenclaw" class="btn btn-dark btn-block"
            >Ravenclaw
          </router-link>
        </b-card>
      </div>
    </div>
    <div class="col-md-4">
      <b-card
        title="Slytherin"
        img-src="https://images-na.ssl-images-amazon.com/images/I/71GqkrgjXNL._AC_SX522_.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem; height: 100%"
        class="mb-2"
      >
        <h1>{{ slytherin }}</h1>
        <router-link to="/studentes/slytherin" class="btn btn-dark btn-block"
          >Slytherin
        </router-link>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "vue-router";

export default {
  name: "Houses",
  data() {
    return {
      houses: [],
      gryffindor: 0,
      hufflepuff: 0,
      ravenclaw: 0,
      slytherin: 0,
    };
  },
  mounted() {
    this.getHouses();
  },
  methods: {
    getHouses() {
      axios
        .get("http://hp-api.herokuapp.com/api/characters/house/Gryffindor")
        .then((res) => {
          console.log(res);
          this.gryffindor = res.data.length;
        });
      axios
        .get("http://hp-api.herokuapp.com/api/characters/house/Hufflepuff")
        .then((res) => {
          console.log(res);
          this.hufflepuff = res.data.length;
        });
      axios
        .get("http://hp-api.herokuapp.com/api/characters/house/Ravenclaw")
        .then((res) => {
          console.log(res);
          this.ravenclaw = res.data.length;
        });
      axios
        .get("http://hp-api.herokuapp.com/api/characters/house/Slytherin")
        .then((res) => {
          console.log(res);
          this.slytherin = res.data.length;
        });
    },

    getMembersHouse(house) {
      if (house === "slytherin") {
        router.push({ path: "studentes", params: { house: "slytherin" } });
      }
    },
  },
};
</script>