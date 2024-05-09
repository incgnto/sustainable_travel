<!-- src/components/ScoreBar.vue -->
<template>
    <div class="score-bar-container">
      <p class="score-message">{{ scoreMessage }}</p>
      <div class="score-bar">
        <div class="bar" :style="{ width: score + '%', backgroundColor: barColor }"></div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed, type PropType } from 'vue';
  
  export default defineComponent({
    name: 'ScoreBar',
    props: {
      score: {
        type: Number as PropType<number>,
        required: true,
      },
    },
    setup(props) {
      const barColor = computed(() => {
        if (props.score === 100) return '#4caf50'; // Dark Green
        if (props.score >= 75) return '#8bc34a'; // Green
        if (props.score >= 50) return '#ffeb3b'; // Yellow
        return '#f44336'; // Red
      });
  
      const scoreMessage = computed(() => {
        if (props.score === 100) return "You're a climate hero!";
        if (props.score >= 75) return "You're doing great!";
        if (props.score >= 50) return "Keep it up!";
        if (props.score >= 25) return "Let's make some more changes!";
        return "Try choosing some of the tips!";
      });
  
      return { barColor, scoreMessage };
    },
  });
  </script>
  
  <style scoped>
  .score-bar-container {
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .score-message {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  
  .score-bar {
    width: 100%;
    height: 20px;
    background-color: #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .bar {
    height: 100%;
    border-radius: 10px;
    transition: width 0.3s ease;
  }
  </style>
  