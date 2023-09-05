<template>
  <div class="grid grid-cols-2 gap-4">
    <Card v-for="(quiz, index) in quizes" :key="quiz.id" :quiz="quiz" />
  </div>
</template>

<script setup>
import Card from "./Card.vue";
import { defineProps } from "vue";

const { quizes } = defineProps(["quizes"]);
</script>

<style lang="scss" scoped></style>
