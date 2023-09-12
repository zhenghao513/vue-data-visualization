<template>
  <div>
    <div
      ref="target"
      class="w-full h-full"
    ></div>
  </div>
</template>

<script setup lang="ts">
import type { MapData } from '@/api/visualization';
import type { ECOption } from '@/utils/chart';
import echarts from '@/utils/chart';
import mapJson from '@/assets/MapData/china.json';

const { data } = defineProps<{ data: MapData }>();

const target = ref(null);

let myChart: echarts.ECharts | null = null;
const renderChart = () => {
  // @ts-ignore: 忽略这个错误是可以的
  echarts.registerMap('china', mapJson);

  const option: ECOption = {
    timeline: {
      data: data.voltageLevel,
      axisType: 'category',
      autoPlay: true,
      playInterval: 3000,
      left: '10%',
      right: '10%',
      bottom: '0%',
      width: '80%',
      label: {
        // 自4.0以来，标签中的“normal”层次结构已被删除。现在所有的样式属性都直接在标签中配置。
        color: '#ddd',
      },

      emphasis: {
        // 自4.0以来，label.emphasis 已更改为 emphasis.label
        label: {
          color: '#fff',
        },

        // 自4.0以来，controlStyle.emphasis 已更改为 emphasis.controlStyle
        controlStyle: {
          color: '#aaa',
          borderColor: '#aaa',
        },
      },
      symbolSize: 10,
      lineStyle: { color: '#555' },
      checkpointStyle: { borderColor: '#888', borderWidth: 2 },
      controlStyle: {
        showNextBtn: true,
        showPrevBtn: true,

        // controlStyle中的“normal”层次结构从4.0开始被移除。现在所有的样式属性都直接在controlStyle中配置。
        color: '#666',
        borderColor: '#666',
      },
    },
    baseOption: {
      grid: { right: '2%', top: '15%', bottom: '10%', width: '20%' },
      geo: {
        show: true,
        map: 'china',
        roam: true,
        zoom: 0.8,
        center: [113.83531246, 34.0267395887],
        itemStyle: {
          // itemStyle中的“normal”层次结构从4.0开始被移除。现在所有的样式属性都直接在itemStyle中配置。
          borderColor: 'rgba(147, 235, 248, 1)',
          borderWidth: 1,
          areaColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              { offset: 0, color: 'rgba(147, 235, 248, 0)' },
              { offset: 1, color: 'rgba(147, 235, 248, .2)' },
            ],
            global: false,
          },
        },
        // 自4.0以来，itemStyle.emphasis 已更改为 emphasis.itemStyle
        emphasis: {
          itemStyle: {
            areaColor: '#389BB7',
            borderWidth: 0,
          },
        },
      },
    },
    options: [],
  };

  data.voltageLevel.forEach((item, index) => {
    option.options?.push({
      backgroundColor: '#142037',
      title: [
        {
          text: '2019-2023 年度数据统计',
          left: '0%',
          top: '0',
          textStyle: { color: '#ccc', fontSize: 30 },
        },
        {
          id: 'statistic',
          text: `${item}年数据统计情况`,
          right: '0%',
          top: '4%',
          textStyle: { color: '#ccc', fontSize: 20 },
        },
      ],
      xAxis: {
        type: 'value',
        scale: true,
        position: 'top',
        splitLine: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },

        // 自4.0以来，axisLabel中的textStyle层次结构已被删除。现在所有的textStyle属性都直接在axisLabel中配置了。
        axisLabel: { margin: 2, color: '#aaa' },
      },
      yAxis: {
        type: 'category',
        axisLine: { show: true, lineStyle: { color: '#ddd' } },
        axisTick: { show: false, lineStyle: { color: '#ddd' } },

        // 自4.0以来，axisLabel中的textStyle层次结构已被删除。现在所有的textStyle属性都直接在axisLabel中配置了。
        axisLabel: { interval: 0, color: '#ddd' },
        data: data.categoryData[item].map((i) => i.name),
      },
      series: [
        {
          zlevel: 1.5,
          type: 'bar',

          // itemStyle中的“normal”层次结构从4.0开始被移除。现在所有的样式属性都直接在itemStyle中配置。
          itemStyle: { color: data.colors[index] },
          data: data.categoryData[item].map((i) => i.value),
        },
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: data.topData[item],
          symbolSize(val) {
            return val[2] / 4;
          },
          showEffectOn: 'render',
          rippleEffect: { brushType: 'stroke' },
          label: {
            // 自4.0以来，标签中的“normal”层次结构已被删除。现在所有的样式属性都直接在标签中配置。
            formatter: '{b}',
            position: 'right',
            show: true,
          },
          itemStyle: {
            // itemStyle中的“normal”层次结构从4.0开始被移除。现在所有的样式属性都直接在itemStyle中配置。
            color: data.colors[index],
            shadowBlur: 5,
            shadowColor: data.colors[index],
          },
          zlevel: 1,
        },
      ],
    });
  });

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
