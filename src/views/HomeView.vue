<!-- src/views/HomeView.vue -->
<template>
  <div class="container">
    <div class="text-center my-4">
      <h3>Travelling soon?</h3>
      <small>Select sustainability tips & set yourself a reminder to follow them.</small>
    </div>
    <div class="mb-4">
      <TipsGrid :tips="tips" @toggle-selection="toggleTipSelection" />
    </div>
    <div class="mb-4 gray_bg">
      <ScoreBar :score="score" />
    </div>
    <div class="text-left my-4">
      <h5>Send yourself a future reminder with the selected tips:</h5>
    </div>
    <div>
      <EmailForm :selected-tips="selectedTipsData" :email-date="emailDate" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import TipsGrid from '../components/TipsGrid.vue';
import ScoreBar from '../components/ScoreBar.vue';
import EmailForm from '../components/EmailForm.vue';

const tips = [
  { id: 1, icon: '💧', description: 'Use reusable water bottles.' },
  { id: 2, icon: '🏠', description: 'Choose eco-friendly accommodations.' },
  { id: 3, icon: '🚇', description: 'Opt for public transportation.' },
  { id: 4, icon: '🛍️', description: 'Support local businesses.' },
  { id: 5, icon: '💡', description: 'Reduce energy consumption.' },
];

export default defineComponent({
  name: 'HomeView',
  components: {
    TipsGrid,
    ScoreBar,
    EmailForm,
  },
  setup() {
    const selectedTips = ref<number[]>([]);
    const emailDate = ref<string>('');

    const toggleTipSelection = (tipId: number) => {
      const index = selectedTips.value.indexOf(tipId);
      if (index === -1) {
        selectedTips.value.push(tipId);
      } else {
        selectedTips.value.splice(index, 1);
      }
    };

    const score = computed(() => (selectedTips.value.length / tips.length) * 100);
    const selectedTipsData = computed(() => tips.filter((tip) => selectedTips.value.includes(tip.id)));

    return { tips, score, selectedTipsData, emailDate, toggleTipSelection };
  },
});
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}

.gray_bg {
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  background-color: #f5f5f5;
  border-radius: 10px;
}
</style>
