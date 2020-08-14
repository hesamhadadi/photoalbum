<template>
  <div>
     <ul class="photo-list">
      <li v-for="photo in photos" :key="photo.id" >
        <h2> {{ photo.title}} </h2>
        <router-link :to="'/photo/' + photo.id"><img width="280px" height="200px" v-bind:src="photo.thumbnailUrl" class="photo" /></router-link>
      </li>
    </ul>
    <div class="loader" v-if="loading"><img v-bind:src="'static/ripple.svg'" /></div>
  </div>
</template>
<script>
import config from '../config'
export default {
  data () {
    return {
      photos: [],
      lastLoadedPage: 0,
      loading: false
    }
  },
  created: function() {
    this.load(0);
    window.addEventListener('scroll', this.onScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll: function(event) {
      if(window.scrollY + window.innerHeight - this.$el.offsetTop >= this.$el.scrollHeight - 300) {
        this.load(this.lastLoadedPage + 1);
      }
    },
    load: function(page) {
      if(this.loading)
        return;
      this.loading = true;
      this.$http.get(`${config.myconfig}/photos.php`).then(
        response => {
          let imageCount = 0;
          response.body.forEach((item, index) => {
            let img = new Image();
            imageCount++;
            this.loading = true;
            img.onload = () => {
              item.thumbnailUrl = img.src;
              this.photos.push(item);
              imageCount--;
              if(imageCount <= 0)
                this.loading = false;
            }
            img.src = item.thumbnailUrl;
          });
          if(response.body.length == 0)
            this.loading = false;
          this.lastLoadedPage = page;
        },
        response => {
          console.error(response);
          this.loading = false;
        }
      );
    },
    add:function(){
        const newCommentObj = {
          comment:this.newComment,
       }
             
      this.comments.push(newCommentObj)
        this.ajaxRequest = true;
        this.$http.post('https://rasanehbartar.ir/project/api/services/addcomment.php', {
              pid: this.$route.params.id,
             comment:this.newComment,
             
            }, function (data, status, request) {
                this.postResults = data;
                this.ajaxRequest = true;
                console.log('کامنت ثبت شد')
            });
                    body: this.newComment;
                    this.newComment = '';
    },
    Images_onUpload() {
const mypostparameters= new FormData()
 mypostparameters.append('image', this.Images.selectedFile, this.Images.selectedFile.name);
 mypostparameters.append('USERID', 21);
 axios.post('/uploadmyfile', mypostparameters);
}
  },
}
</script>
<style scoped>
.loader {
  text-align: center;
  width: 100%;
  margin-top: -50px;
  position: relative;
  z-index: 1;
  transition: width 1s, height 1s;
}
.photo-list{
  background-color: #eeeeee;
  border: 4px #ffa900 solid;
  border-radius: 10px;
}
.photo.list li{
  border-radius: 10px;
  border: 1px solid black;
}
</style>
