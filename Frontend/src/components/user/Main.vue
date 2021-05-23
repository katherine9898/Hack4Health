<template>
  <div id="">
    <van-button type="gh" text="Hi" color="black">{{cellphone}}</van-button>
    <van-rate
      v-model="value"
      :size="25"
      color="#ffd21e"
      void-icon="star"
      void-color="#eee"
    />

    <van-button type="primary">Primary</van-button>

  </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {
      number: 0,
      cellphone: "IPhone",
    };
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main_tab_view {
  width: 100%;
  height: 100%;
}
</style>
