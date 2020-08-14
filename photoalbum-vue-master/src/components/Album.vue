<template>
  <div>
    <h2 class="label">Album</h2>
    <h1>{{ album.title }}</h1>
    <h2>by <router-link :to="'/user/' + album.userId">{{ author.username }}</router-link></h2>
    <ul class="photo-list">
      <li v-for="photo in photos"  :key="photo.title" > 
        <router-link> :to="'/photo/' + photo.id"><img v-bind:src="photo.thumbnailUrl" class="photo" /></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import config from '../config'
export default {
  data () {
    return {
      photos: [],
      album: {},
      author: {}
    }
  },
  created: function() {
    this.$http.get(`${config.dataSourcePath}/albums/${this.$route.params.id}`).then(
      response => {
        this.album = response.body;

        // Fetch user name
        this.$http.get(`${config.dataSourcePath}/users/${this.album.userId}`).then(
          response => {
            this.author = response.body;
          },
          response => { console.error(response);  }
        );
      },
      response => { console.error(response); }
    );

    //Album photos
    this.$http.get(`${config.dataSourcePath}/album/${this.$route.params.id}/photos`).then(
      response => {
        this.photos = response.body;
      },
      response => { console.error(response); }
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
