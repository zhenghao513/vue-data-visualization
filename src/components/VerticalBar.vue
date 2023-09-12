<template>
  <div>
    <div>【服务资源占用比】</div>
    <div
      ref="target"
      class="w-full h-full"
    ></div>
  </div>
</template>

<script setup lang="ts">
import type { Server } from '@/api/visualization';
import type { ECOption } from '@/utils/chart';
import echarts from '@/utils/chart';

const { data } = defineProps<{ data: Server[] }>();

const target = ref(null);

let myChart: echarts.ECharts | null = null;
const renderChart = () => {
  const option: ECOption = {
    xAxis: {
      type: 'category',
      data: data.map((item) => item.name),
      axisLabel: { color: '#9EB1C8' },
    },
    yAxis: {
      type: 'value',
      show: false,
      max(value) {
        return Math.floor(value.max * 1.2);
      },
    },
    grid: { top: 16, right: 0, bottom: 26, left: -26, containLabel: true },
    series: {
      type: 'bar',
      data: data.map((item) => ({
        name: item.name,
        value: item.value,
      })),
      itemStyle: {
        color: '#479AD3',

        // barBorderRadius已弃用，请使用borderRadius代替。
        borderRadius: 5,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowBlur: 5,
      },
      barWidth: 12,
      label: {
        show: true,
        position: 'top',

        // 标签中的textStyle层次结构自4.0以来已被删除。现在所有的textStyle属性都直接在label中配置。
        color: '#fff',
        formatter: '{c}%',
      },
    },
  };

  myChart?.setOption(option);
};

onMounted(() => {
  myChart = echarts.init(target.value);
  renderChart();
  window.addEventListener('resize', () => {
    myChart?.resize();
  });
});

watch(
  () => data,
  () => {
    renderChart();
  },
);
</script>

<style scoped></style>
