<template>
  <div class="user">
    <h2 class="label">User</h2>
    <h1>{{ user.username }}</h1>
      <div class="info">
        <div>
          <p v-for="info in userInfo" :key="info.title" ><span>{{info.label}}:</span><span>{{info.value}}</span></p>
        </div>
        <div class="company">
          <h3 class="label">Company</h3>
          <strong>{{ user.company.name }}</strong>
          <p>{{ user.company.catchPhrase }}</p>
          <p>{{ user.company.bs }}</p>  
        </div>
      </div>
      <div class="map" v-if="false">
        <iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=40.7127837,-74.0059413&amp;key=AIzaSyB_GNwPXHh5X-KZ_H72hOp4kKlxAHBg_VI"></iframe>
      </div>
      <div class="album-list">
        <h2 class="text-left">Albums created by {{user.username}}</h2>
        <div v-for="album in albums" :key="album.title" >
          <router-link :to="'/album/' + album.id">{{album.title}}</router-link>
        </div>
      </div>
  </div>
</template>

<script>
import config from '../config'
export default {
  data () {
    return {
      user: { company: {} },
      userInfo: [],
      albums: []
    }
  },
  created: function() {
    this.$http.get(`${config.dataSourcePath}/users/${this.$route.params.id}`).then(
      response => {
        this.user = response.body;

        //Map user info for tidier layouting
        this.userInfo = [
          { label: "Name", value: this.user.name },
          { label: "Phone", value: this.user.phone },
          { label: "Email", value: this.user.email },
          { label: "Website", value: this.user.website },
          { label: "City", value: this.user.address.city },
        ]
      },
      response => { console.error(response); }
    );

    //User's albums
    this.$http.get(`${config.dataSourcePath}/users/${this.$route.params.id}/albums`).then(
      response => {
        this.albums = response.body;
      },
      response => { console.error(response); }
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.map {
  width: 70%;
  margin: auto;
}

.info {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 40px;
}

.info > div {
  margin: 1em;
}

.info p { display: flex; justify-content: space-between; }

.info p span:first-child {
  font-weight: bold;
  padding-right: 5rem;
}

.text-left {
  text-align: left;
}

@media (max-width: 600px) {
  .info {
    flex-flow: column;
  }
  .map {
    width: 90%;
  }
}
</style>
