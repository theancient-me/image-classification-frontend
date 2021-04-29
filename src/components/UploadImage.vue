<template>
  <div>
    <div class="choose-file-box">
      <!-- Styled -->
      <b-form-file
        v-model="file1"
        :state="Boolean(file1)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>
      <br />
      <div class="mt-3">Selected file: {{ file1 ? file1.name : "" }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file1: null,
    };
  },
};
</script>

<style>
.choose-file-box{
    padding: 10px;
    margin-left: 20%;
    margin-right: 20%;
    border: 2px dashed;
}
</style>
