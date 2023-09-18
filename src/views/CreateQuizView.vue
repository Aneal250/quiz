<template>
  <form @submit.prevent="submitQuiz">
    <label for="title">Title:</label>
    <input type="text" id="title" v-model="quizData.title" required />

    <label for="description">Description:</label>
    <textarea
      id="description"
      v-model="quizData.description"
      required
    ></textarea>

    <!-- Add a button to add a new quiz question -->
    <button type="button" @click="addQuestion">Add Question</button>

    <!-- Render input fields for each quiz question -->
    <div
      v-for="(question, questionIndex) in quizData.quiz"
      :key="questionIndex"
    >
      <label>Question {{ questionIndex + 1 }}:</label>
      <input
        type="text"
        :value="question.question"
        @input="updateQuestion(questionIndex, $event)"
        required
      />

      <!-- Add a button to add a new option for the current question -->
      <button type="button" @click="addOption(question)">Add Option</button>

      <!-- Render input fields for options -->
      <div v-for="(option, optionIndex) in question.options" :key="optionIndex">
        <label>Option {{ optionIndex + 1 }}:</label>
        <input
          type="text"
          :value="option"
          @input="updateOption(question, optionIndex, $event)"
          required
        />

        <!-- Add a button to remove the current option -->
        <button type="button" @click="removeOption(question, optionIndex)">
          Remove Option
        </button>
      </div>

      <!-- Add a button to remove the current question -->
      <button type="button" @click="removeQuestion(questionIndex)">
        Remove Question
      </button>
    </div>

    <button type="submit">Submit Quiz</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      quizData: {
        title: "",
        description: "",
        quiz: [],
      },
    };
  },
  methods: {
    addQuestion() {
      this.quizData.quiz.push({
        question: "",
        options: [],
      });
    },
    addOption(question) {
      question.options.push("");
    },
    removeQuestion(questionIndex) {
      this.quizData.quiz.splice(questionIndex, 1);
    },
    removeOption(question, optionIndex) {
      question.options.splice(optionIndex, 1);
    },
    updateQuestion(questionIndex, event) {
      this.quizData.quiz[questionIndex].question = event.target.value;
    },
    updateOption(question, optionIndex, event) {
      question.options[optionIndex] = event.target.value;
    },
    submitQuiz() {
      console.log(this.quizData);
      // Send the quizData to an endpoint using Axios or another HTTP library
      //   axios
      //     .post("/your-endpoint", this.quizData)
      //     .then((response) => {
      //       console.log("Quiz data sent successfully:", response.data);
      //     })
      //     .catch((error) => {
      //       console.error("Error sending quiz data:", error);
      //     });
    },
  },
};
</script>
