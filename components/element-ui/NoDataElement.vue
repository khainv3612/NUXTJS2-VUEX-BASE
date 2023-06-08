<template>
  <div class="no-data-element">
    <div class="no-data-content">
      <img src="/assets/images/no_data.svg" alt="">
      <div class="text-center text-nodata">{{ text }}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NoDataElement',
  props: ['text']
}
</script>
