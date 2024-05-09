<!-- src/components/EmailForm.vue -->
<template>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input v-model="email" type="email" placeholder="your@email.com" id="email" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="date" class="form-label">Date:</label>
        <input v-model="date" :min="minDate" type="date" id="date" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary mb-3">Send</button>
  
      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    </form>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed, type PropType } from 'vue';
  
  interface Tip {
    icon: string;
    description: string;
  }
  
  export default defineComponent({
    name: 'EmailForm',
    props: {
      selectedTips: {
        type: Array as PropType<Tip[]>,
        required: true,
      },
      emailDate: {
        type: String,
        required: false,
      },
    },
    setup(props) {
      const email = ref('');
      const date = ref('');
      const successMessage = ref('');
  
      const selectedTipsList = computed(() =>
        props.selectedTips.map((tip) => `${tip.icon} ${tip.description}`).join('\n')
      );
  
      const today = new Date().toISOString().split('T')[0];
      const minDate = ref(today);
  
      const submitForm = () => {
        successMessage.value = `This will be sent to ${email.value} on ${date.value}: \n\nRemember to:\n\n${selectedTipsList.value}\n\nThank you!`;
      };
  
      return { email, date, successMessage, minDate, submitForm };
    },
  });
  </script>
  
  <style scoped>
  .success-message {
    margin-top: 15px;
    color: green;
    white-space: pre-wrap;
  }
  </style>
  