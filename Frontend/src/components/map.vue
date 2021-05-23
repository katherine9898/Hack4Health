<template>
  <div class="main-container">
    
    <div class="header">
      <van-row type="flex" justify="end">
        <van-col class="logo" span="10">Hopify</van-col>
        <van-col span="3"> <button>About Us</button></van-col>
        <van-col span="3"><button>Log In</button> </van-col>
        <van-col span="3"> <button>Contact Us</button></van-col>
      </van-row>
    </div>

    <van-image src="static/images/land-page.png" height="85%" width="100%" />
    <div class="body">
      
      <div class="description">
       
          Find all information you need about hospital, clinic, family doctor
          and book appointment with them 😷🏨
        
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      number: 0,
      cellphone: "IPhone",
      English: "black",

      img: "../assets/land-page.png",
      googleIcon: require("@/assets/sign-in-with-google.png"),
    };
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Chela+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Chela+One&display=swap");

#main_tab_view {
  width: 100%;
  height: 100%;
}

.description {
  font-family: "Bree Serif", serif;
}

.title {
  font-family: "Bree Serif", serif;
  font-size: 0.8cm;
  border: solid 5px #d7f4fb;
  border-radius: 50px;
  background-color: #d7f4fb;
}
.logo {
  font-family: "Chela One", cursive;
  font-size: 50px;
  padding: 0px;
}

.header {
  background-color: #c5d5de;
  height: 1cm;
  width: 100%;
  padding: 0.5cm;
  list-style-type: none;
  font-size: 0.5cm;
}

li {
  margin: 0.5cm;
  padding: 0.5cm;
}

button {
  border: none;
  color: black;
  background-color: #688895;
  padding: 15px 15px;
  border-radius: 8px;
}

.main-container {
  background-color: #c7e9f3;
  height: 100vh;
  width: 100%;
}

.body {
  padding: 20px;
  background-color: #c7e9f3;
}
</style>
