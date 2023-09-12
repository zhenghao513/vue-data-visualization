<template>
  <div>
    <div>【数据传递信息】</div>
    <div
      ref="target"
      class="w-full h-full"
    ></div>
  </div>
</template>

<script setup lang="ts">
import type { Relation } from '@/api/visualization';
import echarts from '@/utils/chart';

const { data } = defineProps<{ data: Relation[] }>();

const target = ref(null);

let myChart: echarts.ECharts | null = null;
const renderChart = () => {
  const option = {
    xAxis: { show: false, type: 'value' },
    yAxis: { show: false, type: 'value' },
    series: [
      {
        type: 'graph',
        layout: 'none',
        coordinateSystem: 'cartesian2d',
        symbolSize: 26,
        z: 3,
        edgeLabel: {
          // edgeLabel中的“normal”层次结构自4.0以来已被删除。现在所有的样式属性都直接在edgeLabel中配置。
          show: true,
          color: '#fff',

          // edgeLabel中的textStyle层次结构从4.0开始被移除。所有的textStyle属性现在都直接在edgeLabel中配置了。
          fontSize: 14,
          formatter(params: { data: Relation }) {
            let txt = '';
            if (params.data.speed !== undefined) {
              txt = String(params.data.speed);
            }
            return txt;
          },
        },

        // 自4.0以来，标签中的“normal”层次结构已被删除。现在所有的样式属性都直接在标签中配置。
        label: { show: true, position: 'bottom', color: '#5e5e5e' },
        edgeSymbol: ['none', 'arrow'],
        edgeSymbolSize: 8,
        data: data.map((item) => {
          if (item.id !== 0) {
            return {
              name: item.name,
              category: 0,
              active: true,
              speed: `${item.speed}kb/s`,
              value: item.value,
            };
          }

          return {
            name: item.name,
            value: item.value,
            symbolSize: 100,
            itemStyle: {
              // itemStyle中的“normal”层次结构从4.0开始被移除。现在所有的样式属性都直接在itemStyle中配置。
              color: {
                colorStops: [
                  { offset: 0, color: '#157eff' },
                  { offset: 1, color: '#35c2ff' },
                ],
              },
            },

            // 自4.0以来，标签中的“normal”层次结构已被删除。现在所有的样式属性都直接在标签中配置。
            label: { fontSize: '14' },
          };
        }),
        links: data.map((item) => ({
          source: item.source,
          target: item.target,
          speed: `${item.speed}kb/s`,

          // lineStyle中的“normal”层级从4.0开始被移除。现在所有的样式属性都直接在lineStyle中配置。
          lineStyle: { color: '#12b5d0', curveness: 0.2 },
          label: { show: true, position: 'middle', offset: [10, 0] },
        })),
      },
      {
        type: 'lines',
        coordinateSystem: 'cartesian2d',
        z: 1,
        effect: {
          show: true,
          smooth: false,
          trailLength: 0,
          symbol: 'arrow',
          color: 'rgba(55,155,255,0.5)',
          symbolSize: 12,
        },

        // lineStyle中的“normal”层级从4.0开始被移除。现在所有的样式属性都直接在lineStyle中配置。
        lineStyle: { curveness: 0.2 },

        // Lines数据配置已更改为{coordinates:[[1,2]，[2,3]]}
        data: [
          [
            [0, 300],
            [50, 200],
          ],
          [
            [0, 100],
            [50, 200],
          ],
          [
            [50, 200],
            [100, 100],
          ],
          [
            [50, 200],
            [100, 300],
          ],
        ],
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
