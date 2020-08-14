<template>
  <div id="app">
    <header>
      <div class="wrapper">
        <router-link to="/">گالری تصاویر</router-link>
        <router-link to="/Info">مشخصات برنامه نویس</router-link>
        <!-- <router-link to="/Add">اضافه کردن عکس</router-link> -->
      </div>
    </header>
    <div id="banner">
      <h2>روستای کندوان</h2>
      </div>
    <div id="main"><router-view></router-view></div>
  </div>
</template>
<script>
import Album from './components/Album.vue';
import Photo from './components/Photo.vue';
import User from './components/User.vue';
import Comments from './components/Comments.vue';
import Info from './components/Info.vue'
  components:{
   Album,
   Photo,
   Comments,
   Info
  }
export default {
  name: 'app'
}
</script>
<style>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
html, body {
  margin: 0; padding: 0;
  position: relative;
}
@font-face {
  font-family: iransans;
  src: url("/static/IRANSansWeb(FaNum)_Light.woff");
}

html { height: 100%; }
body, #app { min-height: 100%; 
font-family: iransans;
}
body{
  font-family: iransans ;
}
#main, .wrapper {
  max-width: 960px;
  margin: auto;
}

h1, h2 {
  text-transform: capitalize;
  text-align: center;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-bottom: 4rem;
  position: relative;
}

#main {
  margin-top: 60px;
  margin: 50px auto;
  padding: 0 10px;
}

#banner {
  height: 15rem;
  color: white;
  background-image: url("https://www.eligasht.com/Blog/wp-content/uploads/2017/08/shutterstock_606493874.jpg");
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0px 10px 8px rgba(0,0,0,0.2);
}

#banner h2 {
  font-size: 4rem;
  font-weight: lighter;
  text-shadow: 4px 4px 3px rgba(0,0,0,0.4);
}

header {
  font-size: 1em;
  background-color: #eeeeee;
  margin: 0;
  padding: 0.5em;
  box-sizing: border-box;
  width: 100%;
}

header .wrapper {
  display: flex;
  justify-content: space-between;
}

header a, header h2 {
  padding: 0;
  margin: auto;
  text-decoration: none;
  color: rgb(18, 4, 99);
}

footer {
  background-color: #eeeeee;
  color: rgb(246, 246, 246);
  padding: 1.5em;
  text-align: center;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  bottom: 0;
  height: 4rem;
}

.photo-list {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
}

.photo-list li {
  margin: 14px;
}

.photo {
  background-color: white;
  padding: 2px;
  border-radius: 10px;
  border: 0px solid rgb(198, 198, 198);
  box-shadow: 4px 4px 40px 0px hsla(0,0%,30%, 0.22);
  box-sizing: border-box;
  transition: 0.3s;
}
.photo:hover{
  box-shadow: 4px 4px 40px 10px rgba(219, 48, 48, 0.582);
    transition: 0.2s;

}
.label {
  color: rgb(156, 156, 156);
  font-weight: lighter;
  font-size: 1em;
  text-transform: uppercase;
}

/* @media (min-width: 1000px) {
  li:nth-child(7n+1) .photo { transform: rotate(3deg); }
  li:nth-child(7n+2) .photo { transform: rotate(-1deg); }
  li:nth-child(7n+3) .photo { transform: rotate(-2deg); }
  li:nth-child(7n+4) .photo { transform: rotate(5deg); }
  li:nth-child(7n+5) .photo { transform: rotate(1deg); }
  li:nth-child(7n+6) .photo { transform: rotate(5deg); }
  li:nth-child(7n+7) .photo { transform: rotate(-4deg); }
} */

footer p { padding: 0; margin: 0; }

@media (max-width: 600px) {
  .photo-list li {
    width: 80%;
  }
  .photo {
    width: 100%;
  }
  #banner h2 {
    font-size: 2.5rem;
  }

  #banner {
    height: auto;
  }

}
</style>
