<template>
  <div>
    <br />
    <h2 class="title-pokedex">ยินดีต้อนรับสู่ Pokedex</h2>
    <input
      type="file"
      id="file"
      ref="file"
      v-on:change="handleFileUpload()"
      hidden
    />
    <div id="pokedex">
      <div id="left">
        <div id="logo"></div>
        <div id="bg_curve1_left"></div>
        <div id="bg_curve2_left"></div>
        <div id="curve1_left">
          <div id="buttonGlass">
            <div id="reflect"></div>
          </div>
          <div id="miniButtonGlass1"></div>
          <div id="miniButtonGlass2"></div>
          <div id="miniButtonGlass3"></div>
        </div>
        <div id="curve2_left">
          <div id="junction">
            <div id="junction1"></div>
            <div id="junction2"></div>
          </div>
        </div>
        <div id="screen">
          <div id="topPicture">
            <div id="buttontopPicture1"></div>
            <div id="buttontopPicture2"></div>
          </div>
          <div id="picture">
            <img width="100%" :src="filePreview" alt="" height="175" />
          </div>
          <div id="buttonbottomPicture"></div>
          <div id="speakers">
            <div class="sp"></div>
            <div class="sp"></div>
            <div class="sp"></div>
            <div class="sp"></div>
          </div>
        </div>
        <div id="bigbluebutton"></div>
        <div id="barbutton1"></div>
        <div id="barbutton2"></div>
        <div id="cross">
          <div id="leftcross">
            <div id="leftT"></div>
          </div>
          <div id="topcross">
            <div id="upT"></div>
          </div>
          <div id="rightcross">
            <div id="rightT"></div>
          </div>
          <div id="midcross">
            <div id="midCircle"></div>
          </div>
          <div id="botcross">
            <div id="downT"></div>
          </div>
        </div>
      </div>
      <div id="right">
        <div id="stats">
          <div v-if="isPredict">
            <h1>สิ่งนี้คือ</h1>
            <h2>{{ predictResult }}</h2>
          </div>
          <div v-else>
            <h1>{{ textWelcome }}</h1>
            <p>เลือก Pokemon โดยกดปุ่ม #เลือก pokemon ได้เลย</p>
          </div>
        </div>
        <div id="blueButtons1">
          <div class="blueButton"></div>
          <div class="blueButton"></div>
          <div class="blueButton"></div>
          <div class="blueButton"></div>
          <div class="blueButton"></div>
        </div>
        <div id="blueButtons2">
          <div class="blueButton"></div>
          <div class="blueButton"></div>
          <div class="blueButton"></div>
          <div class="blueButton"></div>
          <div class="blueButton"></div>
        </div>
        <div id="miniButtonGlass4"></div>
        <div id="miniButtonGlass5"></div>
        <div id="barbutton3"></div>
        <div id="barbutton4"></div>
        <button id="yellowBox1" v-on:click="onSelectFile">เลือก Pokemon</button>
        <button id="yellowBox2" v-on:click="submitData">ตรวจสอบ</button>
        <div id="bg_curve1_right"></div>
        <div id="bg_curve2_right"></div>
        <div id="curve1_right"></div>
        <div id="curve2_right"></div>
      </div>
    </div>
    <div id="catch_screen"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Pokedex",
  data() {
    return {
      isPredict: false,
      textWelcome: "สวัสดีครับ",
      textLoading: "กำลังตรวจสอบ...",
      predictResult: "",
      file: "",
      filePreview:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/200653/psykokwak.gif",
    };
  },
  methods: {
    onSelectFile() {
      document.getElementById("file").click();
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.filePreview = URL.createObjectURL(this.$refs.file.files[0]);
    },
    async submitData() {
      let formData = new FormData();
      formData.append("file", this.file);
      this.isPredict = true;
      this.predictResult = this.textLoading;
      await axios
        .post("http://localhost:8000/predict-pokemon", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          try {
            this.predictResult = res.data.Predict;
          } catch (error) {
            throw new Error(`Can't predict this image`);
          }
        })
        .catch((e) =>{
          console.log(e);
          this.predictResult = "ไม่สามารถตรวจสอบได้";
        });
      
    },
  },
};
</script>
<style scoped lang="scss">
@import "../assets/css/pokedex.scss";

.title-pokedex {
  text-align: center;
}
</style>

