<template>
  <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <GmapAutocomplete
        @place_changed='setPlace'
      />
      <button
        @click='addMarker'
      >
        Add
      </button>
    </div>
    <br>
    <GmapMap
      :center='center'
      :zoom='12'
      style='width:100%;  height: 400px;'
    >
      <GmapMarker
        :key="index"
        v-if="!hideHospitals"
        v-for="(m, index) in hospitalMarkers"
        :position="m.position"
        @click="center=m.position"
      />
      <GmapMarker
        :key="index"
        v-if="!hideVaccineClinics"
        v-for="(m, index) in greenVaccineMarkers"
        :position="m.position"
        @click="center=m.position"
      />
      <GmapMarker
        :key="index"
        v-if="!hideVaccineClinics"
        v-for="(m, index) in redVaccineMarkers"
        :position="m.position"
        @click="center=m.position"
      />
    </GmapMap>
    
  </div>
</template>

<script>
export default {
  name: 'Map',
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      currentPlace: null,
      markers2: [{position: { lat: 45.508, lng: -73.587 }}],
      markers: [],
      places: [],
      hideHospitals: false,
      hideVaccineClinics: false,
      hospitalMarkers: [],
      greenVaccineMarkers: [],
      redVaccineMarkers: [],
    }
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
}
</script>

<style scoped>

</style>
