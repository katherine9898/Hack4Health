<template>
  <div>
    <van-button id="googleLogin" type="default" :icon="googleIcon">
      Google Login
    </van-button>
  </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {
      googleIcon: require("@/assets/sign-in-with-google.png"),
    };
  },
  methods: {
    login(info) {
      let self = this;
      self.$toast.loading({
        message: "Loading...",
        forbidClick: true,
      });

      this.$axios({
        method: "POST",
        headers: { "content-type": "application/json" },
        url: "/api/user/login",
        data: {
          googleID: info.NT,
          fullName: info.Ve,
          givenName: info.xV,
          familyName: info.sT,
          profileImage: info.uK,
          email: info.pu,
        },
      })
        .then((res) => {
          if (0 != res.data.code) {
            return self.$toast.fail(res.data.message);
          }
          self.$toast.clear();
          this.$router.push({ name: "Map" });
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
  },
  mounted() {
    let self = this;

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
#main_tab_view {
  width: 100%;
  height: 100%;
}
</style>
