<!-- src/components/TipsGrid.vue -->
<template>
    <div class="row tips-grid">
      <SustainabilityTip
        v-for="tip in tips"
        :key="tip.id"
        :icon="tip.icon"
        :description="tip.description"
        :selected="selectedTips.includes(tip.id)"
        @toggle-select="toggleTipSelection(tip.id)"
        class="col-sm-6 col-md-4 col-lg-3 mb-3"
      />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, type PropType } from 'vue';
  import SustainabilityTip from './SustainabilityTip.vue';
  
  interface Tip {
    id: number;
    icon: string;
    description: string;
  }
  
  export default defineComponent({
    name: 'TipsGrid',
    components: {
      SustainabilityTip,
    },
    props: {
      tips: {
        type: Array as PropType<Tip[]>,
        required: true,
      },
    },
    emits: ['toggle-selection'],
    setup(props, { emit }) {
      const selectedTips = ref<number[]>([]);
  
      const toggleTipSelection = (tipId: number) => {
        const index = selectedTips.value.indexOf(tipId);
        if (index === -1) {
          selectedTips.value.push(tipId);
        } else {
          selectedTips.value.splice(index, 1);
        }
  
        emit('toggle-selection', tipId);
      };
  
      return { selectedTips, toggleTipSelection };
    },
  });
  </script>
  
  <style scoped>
  .tips-grid {
    justify-content: center;
  }
  </style>
  