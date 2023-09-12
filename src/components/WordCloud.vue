<template>
  <div>
    <div>【关键词条】</div>
    <div
      ref="target"
      class="w-full h-full"
    ></div>
  </div>
</template>

<script setup lang="ts">
import type { WordCloudData } from '@/api/visualization';
import echarts from '@/utils/chart';
import 'echarts-wordcloud';

const { data } = defineProps<{ data: WordCloudData }>();

const target = ref(null);

const randomRGB = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

let myChart: echarts.ECharts | null = null;
const renderChart = () => {
  const option = {
    series: [
      {
        type: 'wordCloud',
        sizeRange: [8, 46],
        rotationRange: [0, 0],
        gridSize: 0,
        layoutAnimation: true,
        textStyle: { color: randomRGB },
        emphasis: { textStyle: { fontWeight: 'bold', color: '#000' } },
        data: data.datas,
      },
    ],
  };

  myChart?.setOption(option);
};

onMounted(() => {
  myChart = echarts.init(target.value);
  renderChart();
});

watch(
  () => data,
  () => {
    renderChart();
  },
);
</script>

<style scoped></style>
