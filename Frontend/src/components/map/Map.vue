<template>
  <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
  <div>
    <div></div>
    <br />
    <GmapMap :center="center" :zoom="12" style="width: 100%; height: 100vh">
      <GmapMarker
        :key="m.hospital_id"
        v-if="!hideHospitals"
        v-for="m in hospitalMarkers"
        :position="m.position"
        :icon="{
          url: require('../../assets/location.png'),
          scaledSize: { width: 28, height: 28 },
        }"
      />
      @click="center=m.position" />
      <GmapMarker
        :key="m.hospital_id"
        v-if="!hideVaccineClinics"
        v-for="m in vaccineMarkers"
        :position="m.position"
        :icon="{
          url: require('../../assets/vaccinated.png'),
          scaledSize: { width: 40, height: 40 },
        }"
      />
      @click="center=m.position" />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: "Map",
  created() {
    this.$axios({
      method: "GET",
      headers: { "content-type": "application/json" },
      url: "/api/hospital",
    })
      .then((res) => {
        if (0 != res.data.code) {
          return self.$toast.fail(res.data.message);
        }
        this.hospitalMarkers = res.data.data;
        this.vaccineMarkers = res.data.data.filter(
          (m) => m.hospital_is_available_for_vaccine == 1
        );
        //self.$toast.clear();
        //this.$router.push({ name: "SideSheet" });
      })
      .catch(function (error) {
        self.$toast.fail(error);
      });
  },
  data() {
    return {
      center: {},
      currentPlace: null,
      markers2: [{ position: { lat: 45.508, lng: -73.587 } }],
      markers: [],
      places: [],
      hideHospitals: false,
      hideVaccineClinics: false,
      hospitalMarkers: [],
      vaccineMarkers: [],
      currenMarker: null,
    };
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
    openSideSheet(locationId) {
      this.$axios({
        method: "POST",
        headers: { "content-type": "application/json" },
        url: "/api/hospital/hospitalId",
        data: {
          hospital_id: currentMarkerId,
        },
      })
        .then((res) => {
          if (0 != res.data.code) {
            return self.$toast.fail(res.data.message);
          }
          this.currentMarker = res.data.data;
          //self.$toast.clear();
          //this.$router.push({ name: "SideSheet" });
        })
        .catch(function (error) {
          self.$toast.fail(error);
        });
    },
  },
};
</script>

<style scoped>
</style>
