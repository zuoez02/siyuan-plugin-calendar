<template>
  <Datepicker
    v-model="date"
    locale="zh"
    inline
    @internal-model-change="onClickDay"
    :enable-time-picker="false"
    :close-on-auto-apply="true"
  >
    <template #day="{ date }">
      <span>{{ date.getDate() }}</span>
    </template>
    <template #action-row="{}">
      <div class="action-row"></div>
    </template>
  </Datepicker>
</template>

<script setup>
import { ref, inject, nextTick } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const date = ref();
const onclose = inject("onclose");
const onClickDay = (d) => {
  d && onclose(d);
};
</script>
