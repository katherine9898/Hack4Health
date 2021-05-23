<template>
  <div id="">
    <van-calendar v-model="show" @confirm="onConfirm" />
    <van-popup
      id="popup"
      v-model="popupShow"
      :style="{ height: '7%', width: '50%' }"
    >
      Successfully booked in {{ date }}
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "Booking",
  data() {
    return {
      date: "",
      show: true,
      popupShow: false,
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getYear() + 1900}/${
        date.getMonth() + 1
      }/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
      this.popupShow = true;
      //   this.$router.push({ name: map });
    },
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#popup {
  text-align: center;
  padding: 10px;
}
</style>
