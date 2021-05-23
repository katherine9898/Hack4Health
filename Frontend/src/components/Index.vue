<template>
  <div>
    <div class="header">
      <van-row type="flex" justify="end">
        <van-col class="logo" span="10">Hopify</van-col>
        <van-col span="3"> <button>About Us</button></van-col>
        <van-col span="3"
          ><van-button id="googleLogin" type="default" :icon="googleIcon">
            Google Login
          </van-button>
        </van-col>
        <van-col span="3"> <button>Contact Us</button></van-col>
      </van-row>
    </div>

    <van-image src="static/images/land-page.png" height="85%" width="100%" />
    <div class="body">
      <div class="description">
        Find all information you need about hospital, clinic, family doctor and
        book appointment with them 😷🏨
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      googleIcon: require("@/assets/sign-in-with-google.png"),
      number: 0,
      cellphone: "IPhone",
      English: "black",

      img: "../assets/land-page.png",
    };
  },
  methods: {
    login(info) {
      let self = this;
      self.$toast.loading({
        message: "Loading...",
        forbidClick: true,
      });
      console.log(info);
      this.$axios({
        method: "POST",
        headers: { "content-type": "application/json" },
        url: "/api/user/login",
        data: {
          googleID: info.getId(),
          fullName: info.getName(),
          givenName: info.getGivenName(),
          familyName: info.getFamilyName(),
          profileImage: info.getImageUrl(),
          email: info.getEmail(),
        },
      })
        .then((res) => {
          if (0 != res.data.code) {
            return self.$toast.fail(res.data.message);
          }
          self.$toast.clear();
          this.$router.push({ name: "Profile" });
        })
        .catch(function (error) {
          self.$toast.fail(error);
        });
    },

    loginHandle(element) {
      //   console.log(element);
      let self = this;
      self.auth2.attachClickHandler(
        element,
        {},
        (user) => {
          let profile = self.auth2.currentUser.get().getBasicProfile();
          //   console.log(profile);
          self.login(profile);
        },
        (err) => {
          alert(JSON.stringify(err, undefined, 2));
        }
      );
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
            console.log(res);
            self.$router.push({ name: "Profile" });
          }
        })
        .catch(function (error) {});
    },
  },
  mounted() {
    let self = this;

    self.checkLogin();
    gapi.load("auth2", () => {
      self.auth2 = gapi.auth2.init({
        client_id:
          "578300853669-l5km06kmiefsrt7casf6192ac0b6a41j.apps.googleusercontent.com",
        cookiepolicy: "single_host_origin",
      });
      self.loginHandle(document.getElementById("googleLogin"));
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Chela+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Chela+One&display=swap");

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
