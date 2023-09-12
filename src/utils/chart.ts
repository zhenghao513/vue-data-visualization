import * as echarts from 'echarts/core';
import {
  BarChart,
  LineChart,
  RadarChart,
  GraphChart,
  LinesChart,
  PieChart,
  EffectScatterChart,
} from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  // 数据集组件
  DatasetComponent,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
  PolarComponent,
  LegendComponent,
  GeoComponent,
  TimelineComponent,
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import type {
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineSeriesOption,
  RadarSeriesOption,
  GraphSeriesOption,
  LinesSeriesOption,
  PieSeriesOption,
  EffectScatterSeriesOption,
} from 'echarts/charts';
import type {
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption,
  PolarComponentOption,
  RadarComponentOption,
  LegendComponentOption,
  GeoComponentOption,
  TimelineComponentOption,
} from 'echarts/components';
import type { ComposeOption } from 'echarts/core';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | RadarSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | PolarComponentOption
  | RadarComponentOption
  | GraphSeriesOption
  | LinesSeriesOption
  | PieSeriesOption
  | LegendComponentOption
  | GeoComponentOption
  | TimelineComponentOption
  | EffectScatterSeriesOption
>;

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  PolarComponent,
  RadarChart,
  GraphChart,
  LinesChart,
  LegendComponent,
  PieChart,
  GeoComponent,
  TimelineComponent,
  EffectScatterChart,
]);

export default echarts;
