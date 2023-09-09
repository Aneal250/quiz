<template>
  <router-link :to="'/quiz/' + quiz.id" class="px-4">
    <div
      class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 cursor-pointer"
    >
      <div>
        <h2 class="text-gray-800 text-2xl font-semibold">{{ quiz.title }}</h2>
        <p class="mt-2 text-gray-600">{{ quiz.description }}</p>
      </div>
      <div class="flex justify-end mt-4">
        <a href="#" class="text-xl font-medium">{{ quiz.date }}</a>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from "vue";
const { quiz } = defineProps(["quiz"]);
</script>

<style lang="scss" scoped></style>
