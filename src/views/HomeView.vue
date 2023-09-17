<template>
  <div>
    <hr class="my-2 bg-primary" />
    <h1 class="text-primary text-center">Select Quiz</h1>
    <QuizSection :quizes="Quizdata" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import QuizSection from "../components/QuizSection.vue";
import { Quizdata } from "../data/quiz";
</script>

<style lang="scss" scoped></style>
