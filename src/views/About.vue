<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button>{{ btnName }}</el-button>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  name: "about",
})
export default class About extends Vue {
  btnName = "cancel";
  mounted(): void {
    this.init();
  }
  init(): void {
    this.btnName = "confirm";
  }
}
</script>
