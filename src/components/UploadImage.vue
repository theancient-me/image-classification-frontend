<template>
  <div>
    <div class="choose-file-box">
      <!-- Styled -->
      <b-form-file
        v-model="file1"
        @change="onFileSelected"
        :state="Boolean(file1)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>
      <b-button :disabled="this.url != null ? false : true">Upload</b-button>
      <br />
      <br />
      <div>
        <h3>Preview Image</h3>
        <div class="preview-image">
          <img :src="url" alt="" />
        </div>
      </div>
      <!-- <div class="mt-3">Selected file: {{ file1 ? file1.name : "" }}</div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file1: null,
      selectedFile: null,
      msg: "test",
      url: null,
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.url = URL.createObjectURL(this.selectedFile);
    },
  },
};
</script>

<style>
.choose-file-box {
  padding: 10px;
  margin-left: 20%;
  margin-right: 20%;
  border: 2px dashed;
}
.preview-image img {
  width: 100%;
}
</style>
