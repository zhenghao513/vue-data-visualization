<template>
  <div>
    <div>【大区数据信息】</div>
    <div
      ref="target"
      class="w-full h-full"
    ></div>
  </div>
</template>
<script setup lang="ts">
import type { Region } from '@/api/visualization';
import type { ECOption } from '@/utils/chart';
import echarts from '@/utils/chart';

const { data } = defineProps<{ data: Region[] }>();

const target = ref(null);

let myChart: echarts.ECharts | null = null;
const renderChart = () => {
  const option: ECOption = {
    xAxis: {
      type: 'value',
      show: false,
      max(value) {
        return Math.floor(value.max * 1.2);
      },
    },

    yAxis: {
      type: 'category',
      data: data.map((item) => item.name),
      inverse: true,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: '#9EB1C8' },
    },

    grid: { top: 0, right: 0, bottom: 0, left: 0, containLabel: true },

    series: [
      {
        type: 'bar',
        data: data.map((item) => ({ name: item.name, value: item.value })),
        showBackground: true,
        backgroundStyle: { color: 'rgba(180, 180, 180, 0.2)' },
        itemStyle: {
          color: '#479AD3',

          // DEPRECATED: barBorderRadius已弃用，请使用borderRadius代替。
          borderRadius: 5,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 5,
        },
        barWidth: 12,

        // 标签中的textStyle层次结构自4.0以来已被删除。现在所有的textStyle属性都直接在label中配置。
        label: { show: true, position: 'right', color: '#fff' },
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
