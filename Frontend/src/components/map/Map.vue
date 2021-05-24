<template>
  <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
  <div>
    <div class="filterBar">
      <img
        @click="showHospital"
        src="../../assets/location.png"
        class="iconButton"
        aria-placeholder="Hospitals"
      />
      <br />
      <img
        @click="showVaccinceClinic"
        src="../../assets/vaccinated.png"
        class="iconButton"
        aria-placeholder="Vaccine Clinics"
      />
    </div>

    <GmapMap :center="center" :zoom="12" style="width: 100%; height: 100vh">
      <GmapMarker
        :key="m.hospital_id"
        v-if="!hideHospitals"
        v-for="m in hospitalMarkers"
        :position="{
          lat: parseFloat(m.hospital_latitude),
          lng: parseFloat(m.hospital_longitude),
        }"
        :icon="{
          url: require('../../assets/location.png'),
          scaledSize: { width: 30, height: 30 },
        }"
        @click="openSideSheet(m.hospital_id)"
      />

      <GmapMarker
        :key="m.hospital_id"
        v-if="!hideVaccineClinics"
        v-for="m in vaccineMarkers"
        :position="{
          lat: parseFloat(m.hospital_latitude),
          lng: parseFloat(m.hospital_longitude),
        }"
        :icon="{
          url: require('../../assets/vaccinated.png'),
          scaledSize: { width: 30, height: 30 },
        }"
        @click="openSideSheet(m.hospital_id)"
      />
    </GmapMap>
    <van-popup v-model="show" id="popup">
      <van-col>
        <van-row type="flex" gutter="100">
          <van-image
            width="100%"
            height="100%"
            fit="cover"
            :src="HospitalImg[Math.floor(Math.random() * 3)]"
          />
          <van-icon icon="arrow-left" color="black" size="40" />
        </van-row>

        <van-row type="flex" id="hospital">
          <h3 id="hospitalP">{{ HospitalName }}</h3>
        </van-row>

        <van-row type="flex" class="row">
          <van-icon name="location-o" color="#3293e3" size="40" class="icons" />
          <span>{{ Address }}</span>
        </van-row>
        <van-row type="flex" class="row">
          <van-icon name="contact" color="#3293e3" size="40" class="icons" />
          <span>
            <a :href="Website"
              ><van-button plain type="primary" id="url"
                >URL Link</van-button
              ></a
            >
          </span>
        </van-row>
        <van-row type="flex" class="row">
          <van-col span="2"
            ><van-icon name="clock-o" color="#3293e3" size="40" class="icons"
          /></van-col>
          <van-col offset="3" span="18">{{ OpeningHours }}</van-col>
        </van-row>
        <van-row type="flex" class="row">
          <van-icon name="phone-o" color="#3293e3" size="40" class="icons" />
          <span>{{ PhoneNum || "N/A" }}</span>
        </van-row>
        <van-row type="flex" class="row">
          <van-icon name="bill" color="#3293e3" size="40" class="icons" />
          <span>Insurance coverage: {{ InsuranceCovered }}</span>
        </van-row>
        <van-row type="flex" class="row">
          <van-icon name="checked" color="#3293e3" size="40" class="icons" />
          <span>in-person booking</span>
        </van-row>
        <van-row id="bookingBtn">
          <van-button plain type="info" @click="showCal">Booking</van-button>
        </van-row>
      </van-col>
    </van-popup>
    <van-popup
      id="popupBook"
      v-model="popupShow"
      :style="{ height: '100%', width: '100%' }"
    >
      <van-calendar v-model="popupShow" @confirm="onConfirm" />
      <van-popup
        id="popupMessage"
        v-model="popupMessage"
        :style="{ height: '7%', width: '50%' }"
      >
        Successfully booked in {{ date }}
      </van-popup>
    </van-popup>
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
        this.hospitalMarkers = res.data.data.filter(
          (m) => m.hospital_is_available_for_vaccine.data[0] == 0
        );
        this.vaccineMarkers = res.data.data.filter(
          (m) => m.hospital_is_available_for_vaccine.data[0] == 1
        );
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

      date: "",
      popupShow: false,
      popupMessage: false,

      HospitalImg: [
        "https://cc-production-uploads-bucket.s3.amazonaws.com/uploads/2021/01/Royal-Columbian-Phase-Two-mainweb.jpg",
        "https://rchfoundation.com/app/uploads/2020/08/2020-08-10-14.12.14_JW29601-%C2%A9Jerald-Walliser-scaled.jpg",
        "https://qtxasset.com/2016-05/Hospital.jpg?vFWcT9sKFrOrs.4HqVwBTCzKRR92sUdp",
        ,
      ],
      HospitalName: "St. Paul's Hospital",
      Address: "1234 West 66th Ave, V9N 7V5, Vancouver, BC",
      Website: "https://google.com",
      OpeningHours: "8:00 a.m. - 8:00 p.m.",
      PhoneNum: "(123) 456-7890",
      InsuranceCovered: "20%",
      show: false,
    };
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    showCal() {
      this.popupShow = true;
    },
    formatDate(date) {
      return `${date.getYear() + 1900}/${
        date.getMonth() + 1
      }/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
      this.popupMessage = true;
      console.log(this.date);
    },
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
      let self = this;
      this.popupShow = false;

      this.$axios({
        method: "POST",
        headers: { "content-type": "application/json" },
        url: "/api/hospital/hospitalId",
        data: {
          hospital_id: locationId,
        },
      })
        .then((res) => {
          if (0 != res.data.code) {
            return self.$toast.fail(res.data.message);
          }
          this.currentMarker = res.data.data;
          // self.$toast.clear();
          self.show = true;
          self.HospitalName = res.data.data[0].HOSPITAL_NAME;
          self.Address = res.data.data[0].HOSPITAL_STREET_NUMBER;
          self.OpeningHours = res.data.data[0].HOSPITAL_HOURS || "N/A";
          self.PhoneNum = res.data.data[0].HOSPITAL_PHONE;
          self.Website = res.data.data[0].HOSPITAL_WEBSITE;
        })
        .catch(function (error) {
          self.$toast.fail(error);
        });
    },
    showHospital() {
      this.hideHospitals = !this.hideHospitals;
    },
    showVaccinceClinic() {
      this.hideVaccineClinics = !this.hideVaccineClinics;
    },
  },
};
</script>

<style scoped>
.filterBar {
  position: absolute;
  top: 55px;
  right: 15px;
  z-index: 1;
}
.iconButton {
  width: 30px;
  height: 30px;
}

.iconButton:hover {
  cursor: pointer;
}

#popup {
  width: 90%;
  height: 90%;
}

.row {
  align-items: center;
  font-weight: bold;
  color: black;
  padding: 5px 0;
}

a {
  text-decoration: none;
  color: black;
  padding: 1px;
}

a:hover {
  background-color: rgb(99, 124, 236);
  transition: 0.5s;
}

p {
  font-size: 10px;
}

.icons {
  padding: 0 10px;
}

#hospital {
  font-weight: bold;
  justify-content: center;
}

#url {
  width: 220px;
  height: 30px;
}
#popupMessage {
  text-align: center;
  padding: 10px;
}

#bookingBtn {
  text-align: center;
  padding-bottom: 20px;
}
</style>
