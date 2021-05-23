<template>
  <div id="profile">
    <van-row>
      <van-col span="24" class="hello"
        ><van-image round width="5rem" height="5rem" :src="userImage"
      /></van-col>
    </van-row>
    <van-row>
      <van-col span="24" class="hello"
        ><h2>Hello {{ userFullName }}!</h2></van-col
      >
    </van-row>
    <van-row>
      <van-col span="24" class="hello"
        ><van-button v-on:click="go_to_map" type="primary"
          ><b>Go to Hospital Map</b></van-button
        ></van-col
      >
    </van-row>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      userImage: "",
      userFullName: "",
    };
  },
  methods: {
    go_to_map() {
        let self = this;
        self.$router.push({ path: 'Map' })
    },
    checkLogin() {
      // Navigate to User_Main if the current user has already logged in
      let self = this;
      self
        .$axios({
          method: "POST",
          headers: { "content-type": "application/json" },
          url: "/api/user/checkLogin",
          data: {},
        })
        .then((res) => {
          if (0 === res.data.code) {
            self.$toast.clear();

            let recieved = res.data.data[0];
            let userImage = recieved.HOPIFI_USER_IMAGE_URL;
            let userFullName = recieved.HOPIFI_USER_FULL_NAME;
            console.log(userImage);
            console.log(userFullName);
            self.userImage = userImage;
            self.userFullName = userFullName;
          }
        })
        .catch(function (error) {});
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>

<style scoped>
.hello {
  text-align: center;
}
#profile {
  margin-top: 20px;
  vertical-align: middle;
}
</style>