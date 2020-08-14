<template>
  <div class="hello" id="app">
    <h3>تصویر برنامه نویس</h3>
        <!-- <h4> {{ photo.albumId }}</h4> -->
         <img width="500px" height="500px" :src="resume.photo" class="photo" />

    <!-- <h2 class="label">نام عکس</h2>
    <h2>{{ photo.title }}</h2> -->
    <div class="infoo" dir="rtl">
      <h2>نام  : {{ resume.firstname }}</h2>
      <h2>نام خانوادگی  : {{ resume.lastname }}</h2>
      <h2>سن :{{ resume.age }} </h2>
    <h2>شماره دانشجویی : {{ resume.uni_code }}</h2>
    <h2>نام درس : {{ resume.course_name }}</h2>
    </div>
    <h2>{{ post.body }}</h2>
    <h1> نمونه کار </h1>
    <div class="portfolio">
      
      <div>
       <h2> {{ portfolio.title }}</h2>
      </div>
      <div>
     <img :src="portfolio.pic" width="800px" height="400px" style="border-radius:5px">
     </div>
      <div>
        <a href="khhta.com"><h3>{{ portfolio.url }}</h3>
</a>
      </div>
    </div>

       <!-- <div v-for="pos in post" :key="pos.id" id="marg">
                <p> {{ pos.body }}</p>
       </div> -->
       <div class="portfolio">
         <h4>مهارت ها</h4>
         <h3>{{ resume.skill }}</h3>
       </div>
       <!-- <h4>تصاویر وبسایت های انجام شده</h4>
        <div v-for="pos in post" :key="pos.id" id="hesam">
          <img v-bind:src="photo.thumbnailUrl" class="photo" />
       </div> -->
       <h4>با من در شبکه های اجتماعی همراه باشید </h4>
       <div class="portfolio">
         <a href="#"><img src="https://image.flaticon.com/icons/svg/174/174848.svg" width="50px" height="50px"></a>
         <a href="#"><img src="https://image.flaticon.com/icons/svg/174/174855.svg" width="50px" height="50px"></a>
         <a href="#"><img src="https://image.flaticon.com/icons/svg/174/174876.svg" width="50px" height="50px"></a>
         <a href="#"><img src="https://image.flaticon.com/icons/svg/174/174857.svg" width="50px" height="50px"></a>
         <a href="#"><img src="https://image.flaticon.com/icons/svg/2111/2111646.svg" width="50px" height="50px"></a>

       </div>
  </div>
</template>
<script>
import Main from './Main'
import StarRating from 'vue-star-rating'
import config from '../config';
export default {
  name: 'photo',
  data () {
    return {
      photo:[],
      post:[],
      comments:[],
      resume:"",
      portfolio:""
    }
  },
  created: function() {
    this.$http.get(`${config.dataSourcePath}/photos/1`).then(
      response => {
        this.photo = response.body;
      },
      response => { console.error(response); }
    );
       this.$http.get(`${config.dataSourcePath}/posts/?_limit=10`).then(
      response => {
        this.post = response.body;
      },
      response => { console.error(response); }
    );
       this.$http.get(`https://rasanehbartar.ir/project/api/services/resume.php`).then(
      response => {
        this.resume = response.body;
      },
      response => { console.error(response); }
    );
     this.$http.get(`https://rasanehbartar.ir/project/api/services/portfolio.php`).then(
      response => {
        this.portfolio = response.body;
      },
      response => { console.error(response); }
    );
  },
  components:{
    Comment,
    StarRating
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app{
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 20px black;
}
.portfolio{
  background-color: #eeeeee;
  padding: 10px;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 1px 1px 10px black;;
}
#marg{
  border: black solid 1px;
  border-radius: 8px;
  margin: 10px;
}
#hesam{
  display: inline-block;
}
.social{
  display: inline;
  

}
.portfolio img{
    transition: 0.5s;

}
.portfolio img:hover{

  transform: scale(1.1);
  
  transition: 0.5s;
}
.infoo{
  margin-top:15px;
  background-color: rgba(95, 158, 160, 0.192);
  padding: 15px;
  color: black;
  border-radius: 10px;
}
</style>
