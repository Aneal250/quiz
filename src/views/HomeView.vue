<template>
  <div>
    <hr class="my-2 bg-primary" />
    <h1 class="text-primary text-center">Select Quiz</h1>
    <QuizSection :quizes="quizes" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import QuizSection from "../components/QuizSection.vue";

const quizes = ref([
  {
    id: 1,
    title: "Checkout things",
    description:
      "Lorem isulum and every other things as well and making things great as well checkout other things",
    date: "23rd, Junuary 2023",
  },
  {
    id: 2,
    title: "Science Checkout things",
    description:
      "Lorem isulum and every other things as well and making things great as well checkout other things",
    date: "2rd, March 2023",
  },
  {
    id: 3,
    title: "Better Chemistry",
    description:
      "Lorem isulum and every other things as well and making things great as well checkout other things",
    date: "21st, July  2023",
  },
  {
    id: 4,
    title: "Wisdom",
    description:
      "Lorem isulum and every other things as well and making things great as well checkout other things",
    date: "23rd, October 2023",
  },
]);
</script>

<style lang="scss" scoped></style>
