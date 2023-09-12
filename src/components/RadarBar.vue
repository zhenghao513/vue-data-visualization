<template>
  <div>
    <div>【云端报警风险】</div>
    <div
      ref="target"
      class="w-full h-full"
    ></div>
  </div>
</template>

<script setup lang="ts">
import type { Risk } from '@/api/visualization';
import type { ECOption } from '@/utils/chart';
import echarts from '@/utils/chart';

const { data } = defineProps<{ data: Risk[] }>();

const target = ref(null);

let myChart: echarts.ECharts | null = null;
const renderChart = () => {
  const option: ECOption = {
    radar: {
      // 名称中的textStyle层次结构自4.0以来已被删除。现在所有的textStyle属性都直接在name中配置。
      axisName: { color: '#05D5FF', fontSize: 14 },
      shape: 'polygon',
      center: ['50%', '50%'],
      radius: '80%',
      startAngle: 120,
      axisLine: { lineStyle: { color: 'rgba(5, 213, 255, .8)' } },
      splitLine: {
        show: true,
        lineStyle: { width: 1, color: 'rgba(5, 213, 255, .8)' },
      },
      indicator: data.map((item) => ({ name: item.name, max: 100 })),
      splitArea: { show: false },
    },
    polar: { center: ['50%', '50%'], radius: '0%' },
    angleAxis: {
      min: 0,
      interval: 5,
      clockwise: false,
      axisTick: { show: false },
      axisLabel: { show: false },
      axisLine: { show: false },
      splitLine: { show: false },
    },
    radiusAxis: { min: 0, interval: 20, splitLine: { show: true } },
    series: [
      {
        type: 'radar',
        symbol: 'circle',
        symbolSize: 10,

        // itemStyle中的“normal”层次结构自4.0起已被移除。现在所有的样式属性都直接在itemStyle中配置。
        itemStyle: { color: '#05D5FF' },

        // areaStyle中的“normal”层级从4.0开始被移除。现在所有的样式属性都直接在arestyle中配置。
        areaStyle: { color: '#05D5FF', opacity: 0.5 },
        lineStyle: { width: 2, color: '#05D5FF' },
        label: {
          // 自4.0以来，标签中的“normal”层次结构已被删除。现在所有的样式属性都直接在标签中配置。
          show: true,
          formatter(params) {
            return String(params.value);
          },
          color: '#fff',
        },
        data: [{ value: data.map((item) => item.value) }],
      },
    ],
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
