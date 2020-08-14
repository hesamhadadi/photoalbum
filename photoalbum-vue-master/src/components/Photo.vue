  <template>
    <div class="hello" id="app">
      <h2 class="label">نام عکس</h2>
              <h3 id="tozihat" style="text-align:center">{{ photos.title }}</h3>
      <h2></h2>
  <ul>
        <img v-bind:src=" photos.thumbnailUrl " class="photo" />
        <Comment/>
        <h2>توضیحات محل</h2>
                    <h3 id="tozihat" style="text-align:center">{{ photos.tozihat }}</h3>
          <h2>نظرات کاربران</h2>
        <div v-for="comment in comments" :key="comment.id" id="com">
                  <p> {{ comment.comment }}</p>
        </div>
          <input v-model="newComment" v-on:keyup.enter="addComment" placeholder="افزودن نظر" id="inp">
          <button type="button" @click="addComment" id="btn">ثبت نظر</button > 
          <star-rating  v-model="newrate"
          v-bind:increment="1"
             v-bind:max-rating="5"
             inactive-color="#000"
             active-color="#ffa900"
             v-bind:star-size="20">
            
          </star-rating>
          <button @click="setRating" id="btn">ثبت امتیاز</button>
    <h4>میانگین امتیازات : {{ rate.rate }}</h4>
  
      </ul>
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
        photos:[],
        post:[],
        comments:[],
        rate:[]
      }
    },
    created: function() {
      // this.$http.get(`${config.dataSourcePath}/photos/${this.$route.params.id}`).then(
      //   response => {
      //     this.photo = response.body;
      //   },
      //   response => { console.error(response); }
      // );
        this.$http.get(`${config.dataSourcePath}/posts/${this.$route.params.id}`).then(
        response => {
          this.post = response.body;
        },
        response => { console.error(response); }
      );
        this.$http.get(`https://rasanehbartar.ir/project/api/services/comments.php?id=${this.$route.params.id}`).then(
        response => {
          this.comments = response.body.comments;
          this.photos = response.body.post;
        },  
        response => { console.error(response); }
      );
        this.$http.get(`https://rasanehbartar.ir/project/api/services/rates.php?id=${this.$route.params.id}`).then(
        response => {
          this.rate = response.body;
        },  
        response => { console.error(response);
         
          }
      );
    },
    components:{
      Comment,
      StarRating
    },
    methods: {
        addComment: function() {
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
        setRating:function(){
          this.ajaxRequest = true;
                            alert("امتیاز شما با موفقیت ثبت شد");

          this.$http.post('https://rasanehbartar.ir/project/api/services/addrate.php', {
              pid: this.$route.params.id,
              rate:this.newrate,
              }, function (data, status, request) {
                  this.postResults = data;
                  this.ajaxRequest = true;
              });
                    
        }}
  }
  </script>
  <style scoped>
  #tozihat{
    background-color: #eeeeee;
    padding: 25px;
    border-radius: 10px;
  }
  .photo {
    max-width: 90%;
    display: block;
    margin:  0px 2px;
  }
  #inp{
    text-align: right;
    float: right;
    width: 80%;
    margin: 10px;
    padding: 10px;
    font-family: iransans;
    border-radius: 10px;
    height: 180px;
  }
  #btn{
    margin: 20px 0px;
    width: 100px;
    font-family: iransans;
    border-radius: 15px;
    height: 40px;
      transition: 0.2s;

  }
  #btn:hover{
    box-shadow: black 1px 1px 10px;
    transition: 0.2s;}

  .custom-text {
    font-weight: bold;
    font-size: 1.9em;
    border: 1px solid #cfcfcf;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    color: #999;
    background: #fff;
  }
  #com{
    background-color: #eeeeee;
    border-radius: 10px;
    padding: 10px;
    color:black;
    font-weight: bold;
    margin: 10px;
  }
  p {
    text-align: center;
  }
  #app{
      background-color: #eeeeee4f;
    border: 4px #ffa900 solid;
    border-radius: 10px;
  }

  </style>
