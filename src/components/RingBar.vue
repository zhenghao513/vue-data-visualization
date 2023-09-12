<template>
  <div>
    <div>【大区异常处理】</div>
    <div
      ref="target"
      class="w-full h-full"
    ></div>
  </div>
</template>

<script setup lang="ts">
import type { Abnormal } from '@/api/visualization';
import type { ECOption } from '@/utils/chart';
import echarts from '@/utils/chart';

const { data } = defineProps<{ data: Abnormal[] }>();

const target = ref(null);

let myChart: echarts.ECharts | null = null;
const renderChart = () => {
  const getSeriesData = () => {
    // @ts-ignore: 忽略这个错误是可以的
    const series = [];
    data.forEach((item, index) => {
      series.push({
        name: item.name,
        type: 'pie',
        clockwise: false,
        emphasis: false,
        radius: [`${73 - index * 15}%`, `${68 - index * 15}%`],
        center: ['55%', '55%'],
        label: { show: false },
        data: [
          { value: item.value, name: item.name },
          {
            value: 1000,
            name: '',
            itemStyle: { color: 'rgba(0,0,0,0)', borderWidth: 0 },
            tooltip: { show: false },
            emphasis: false,
          },
        ],
      });
      series.push({
        name: item.name,
        type: 'pie',
        silent: true,
        z: 1,
        clockwise: false,
        emphasis: false,
        radius: [`${73 - index * 15}%`, `${68 - index * 15}%`],
        center: ['55%', '55%'],
        label: { show: false },
        data: [
          {
            value: 7.5,
            itemStyle: { color: 'rgb(3, 31, 62)', borderWidth: 0 },
            tooltip: { show: false },
            emphasis: false,
          },
          {
            value: 2.5,
            name: '',
            itemStyle: { color: 'rgba(0,0,0,0)', borderWidth: 0 },
            tooltip: { show: false },
            emphasis: false,
          },
        ],
      });
    });

    // @ts-ignore: 忽略这个错误是可以的
    return series;
  };

  const option: ECOption = {
    legend: {
      show: true,
      icon: 'circle',
      top: '14%',
      left: '60%',
      data: data.map((item) => item.name),
      width: -5,
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 6,
      formatter(name: any) {
        return `{title|${name}}`;
      },
      textStyle: {
        rich: {
          title: {
            fontSize: 12,
            lineHeight: 5,
            color: 'rgba(255,255,255,0.8)',
          },
        },
      },
    },
    tooltip: { show: true, trigger: 'item', formatter: '{a}<br>{b}:{c}({d}%)' },
    yAxis: [
      {
        type: 'category',
        inverse: true,
        axisLine: { show: false },
        axisTick: { show: false },
      },
    ],
    xAxis: [{ show: false }],
    series: getSeriesData(),
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
