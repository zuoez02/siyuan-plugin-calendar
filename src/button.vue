<template>
  <button class="toolbar__item" @click="(event) => onClick(event)">
    <svg
      t="1662957805816"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2374"
      width="200"
      height="200"
    >
      <path
        d="M797.257 402.286h-570.514v113.371h570.514v-113.371zM910.629 76.8h-58.514v-76.8h-113.371v76.8h-453.486v-76.8h-113.371v76.8h-58.514c-62.171 0-113.371 51.2-113.371 113.371v724.114c0 62.171 51.2 109.714 113.371 109.714h797.257c62.171 0 113.371-47.543 113.371-109.714v-724.114c0-62.171-51.2-113.371-113.371-113.371zM910.629 914.286h-797.257v-625.371h797.257v625.371zM625.371 629.029h-398.629v113.371h398.629v-113.371z"
      ></path>
    </svg>
  </button>
</template>

<script setup>
import { createApp, ref } from "vue";
import Calendar from "./calendar.vue";

const onClick = (event) => {
  const siyuan = require("siyuan");
  const Menu = siyuan.Menu;
  const ca = document.createElement("div");

  let menu;

  let date;

  const app = createApp(Calendar);
  app.provide('onclose', (d) => {
    menu?.close();
    menu = null;
    date = d;
    console.log(date);
  })
  app.mount(ca);

  menu = new Menu('calendar').addItem({ element: ca, t: 1 }).showAtMouseEvent(event);
  event.stopPropagation();
};
</script>
