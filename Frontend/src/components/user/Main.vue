<template>
  <div class= "main-container" >

  <div class="header">
 
<van-row type="flex" justify="end">
 <van-col class="logo" span="10">Hopify</van-col>
 <van-col span="3"> <button>About Us</button></van-col>
 <van-col span="3"><button>Home</button> </van-col>
<van-col span="3"> <button>Contact Us</button></van-col>
</van-row>
  </div>
    
    <div class ="body">
      <p1> Landing page </p1>
    </div>
 
  </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {
      number: 0,
      cellphone: "IPhone",
      val: "Name"
    };
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Chela+One&display=swap');

#main_tab_view {
  width: 100%;
  height: 100%;
}

.logo{
   font-family: 'Chela One', cursive;
   font-size: 30px;
   padding: 15px 15px;
  }

.header{
  background-color: #C5D5DE;
  height: 1cm;
  width: 100%;
  padding: 0.5cm;
  list-style-type: none;
  font-size: 0.5cm;

  }

  li{
     margin: 0.5cm;
     padding: 0.5cm;
    
     }

  button{
       border: none;
       color: black;
       background-color: #688895;
       padding: 15px 15px;
       border-radius: 8px;

       }

  
.main-container{
  background-color: #C7E9F3;
  height: 100vh;
  width: 100%
  
  }

  .body{
     padding: 50px;
  }


</style>
