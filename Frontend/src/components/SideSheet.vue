<template>
  <div id=""> 
    <van-icon name="location-o" color="red" size="50" is-link @click="showPopup"></van-icon>
    <van-popup v-model="show">

        <van-col>
            <van-row type="flex" gutter="100"> 
                <van-image width="30rem" height="19rem" fit="cover" src="https://qtxasset.com/styles/breakpoint_xl_880px_w/s3/fiercehealthcare/1538591333/Emergency.jpg/Emergency.jpg?_d4uES2YiQc3F9Oi9AqpYaw05K95De48&itok=f8B-iAva"/>
                <van-icon icon="arrow-left" color="black" size="40"/>
            </van-row>

            <van-row type="flex"> <h1>{{HospitalName}}</h1> </van-row>

            <van-row type="flex">
                <van-icon name="location-o" color="#3293e3" size="40"/> <h5>{{Address}}</h5>
            </van-row>
            <van-row type="flex">
                <van-icon name="contact" color="#3293e3" size="40"/> <h5> <a href="https://www.google.com">google.com</a> </h5>
            </van-row>
            <van-row type="flex">
                <van-icon name="clock-o" color="#3293e3" size="40"/> <h5>{{OpeningHours}}</h5>
            </van-row>
            <van-row type="flex">
                <van-icon name="phone-o" color="#3293e3" size="40"/> <h5>{{PhoneNum}}</h5>
            </van-row>
            <van-row type="flex">
                <van-icon name="bill" color="#3293e3" size="40"/> <h5>Insurance coverage: {{InsuranceCovered}}</h5>
            </van-row>
            <van-row type="flex">
                <van-icon name="checked" color="#3293e3" size="40"/> <h5>in-person booking</h5>
            </van-row>
        </van-col>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "SideSheet",
  data() {
    return {
        HospitalName: "St. Paul's Hospital",
        Address: "1234 West 66th Ave, V9N 7V5, Vancouver, BC",
        Website: "https://google.com",
        OpeningHours: "8:00 a.m. - 8:00 p.m.",
        PhoneNum: "(123) 456-7890",
        InsuranceCovered: "20%",
        show: false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
      
    },
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
