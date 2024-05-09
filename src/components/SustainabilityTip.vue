<!-- src/components/SustainabilityTip.vue -->
<template>
    <div :class="['tip', { selected }]" @click="toggleSelect">
      <span class="tip-icon">{{ icon }}</span>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'SustainabilityTip',
    props: {
      icon: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      selected: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    emits: ['toggle-select'],
    setup(props, { emit }) {
      const toggleSelect = () => {
        emit('toggle-select');
      };
  
      return { toggleSelect };
    },
  });
  </script>
  
  <style scoped>
  .tip {
    cursor: pointer;
    border: 1px solid #ccc;
    padding: 15px;
    text-align: center;
    border-radius: 10px;
    margin: 10px;
    transition: all 0.2s ease;
  }
  
  .selected {
    background-color: #d0f0c0;
    border-color: #70c197;
  }
  
  .tip-icon {
    display: block;
    font-size: 2rem;
  }
  
  p {
    margin: 10px 0 0;
  }
  </style>
  