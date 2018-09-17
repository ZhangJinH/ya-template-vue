<template>
  <div class="cpt">
    <div class="test">
      1234567
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  data() {
    console.log('demo6');
    return {
    };
  },
  mounted() {
    console.log(moment());
  }
};
</script>

<style scoped lang="styl">
.test {
  color: green;
}
</style>
