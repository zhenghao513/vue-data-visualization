<template>
  <div class="p-6">
    <div class="text-slate-300 text-center">
      数据总量：
      <span
        ref="totalCountTarget"
        class="text-7xl ml-2 mr-2 font-bold font-[Electronic] text-gradient"
      >
        679,473,929
      </span>
      条记录
    </div>
    <div class="mt-3 flex flex-wrap">
      <div class="w-1/3 text-center text-slate-400 text-sm">
        华北：
        <span
          ref="city1"
          class="text-[#5DC5EF] text-3xl font-[Electronic]"
        >
          8,778,988
        </span>
      </div>
      <div class="w-1/3 text-center text-slate-400 text-sm">
        东北：
        <span
          ref="city2"
          class="text-[#5DC5EF] text-3xl font-[Electronic]"
        >
          8,778,988
        </span>
      </div>
      <div class="w-1/3 text-center text-slate-400 text-sm">
        华东：
        <span
          ref="city3"
          class="text-[#5DC5EF] text-3xl font-[Electronic]"
        >
          8,778,988
        </span>
      </div>
      <div class="w-1/3 text-center text-slate-400 text-sm">
        中南：
        <span
          ref="city4"
          class="text-[#5DC5EF] text-3xl font-[Electronic]"
        >
          8,778,988
        </span>
      </div>
      <div class="w-1/3 text-center text-slate-400 text-sm">
        西南：
        <span
          ref="city5"
          class="text-[#5DC5EF] text-3xl font-[Electronic]"
        >
          8,778,988
        </span>
      </div>
      <div class="w-1/3 text-center text-slate-400 text-sm">
        西北：
        <span
          ref="city6"
          class="text-[#5DC5EF] text-3xl font-[Electronic]"
        >
          8,778,988
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore: 忽略这个错误是可以的
import { CountUp } from 'countup.js';
import type { TotalData } from '@/api/visualization';

const { data } = defineProps<{ data: TotalData }>();

const totalCountTarget = ref();
const city1 = ref();
const city2 = ref();
const city3 = ref();
const city4 = ref();
const city5 = ref();
const city6 = ref();

onMounted(() => {
  new CountUp(totalCountTarget.value, Number(data.total)).start();
  new CountUp(city1.value, Number(data.hb)).start();
  new CountUp(city2.value, Number(data.db)).start();
  new CountUp(city3.value, Number(data.hd)).start();
  new CountUp(city4.value, Number(data.zn)).start();
  new CountUp(city5.value, Number(data.xn)).start();
  new CountUp(city6.value, Number(data.xb)).start();
});
</script>

<style scoped></style>
