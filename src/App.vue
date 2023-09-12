<template>
  <div
    v-if="data"
    class="bg-[url('src/assets/imgs/bg.jpg')] bg-cover bg-center h-screen text-white p-5 flex overflow-hidden"
  >
    <!-- left -->
    <div class="flex-1 bg-opacity-50 bg-slate-800 p-3 flex flex-col">
      <HorizontalBar
        :data="data.regionData.regions"
        class="h-1/3"
      />
      <RadarBar
        :data="data.riskData.risks"
        class="h-1/3 mt-5"
      />
      <Relation
        :data="data.relationData.relations"
        class="h-1/3 mt-5"
      />
    </div>

    <!-- center -->
    <div class="w-1/2 ml-5 flex flex-col">
      <TotalData
        :data="data.totalData"
        class="bg-opacity-50 bg-slate-800 p-3"
      />
      <MapChart
        :data="data.mapData"
        class="bg-opacity-50 bg-slate-800 p-3 mt-4 flex-1"
      />
    </div>

    <!-- right -->
    <div class="flex-1 ml-5 bg-opacity-50 bg-slate-800 p-3 flex flex-col">
      <VerticalBar
        :data="data.serverData.servers"
        class="h-1/3"
      />
      <RingBar
        :data="data.abnormalData.abnormals"
        class="h-1/3 mt-5"
      />
      <WordCloud
        :data="data.wordCloudData"
        class="h-1/3 mt-5"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { VisualizationResult, getVisualization } from '@/api/visualization';

const data = ref<VisualizationResult>();
const fetchData = async () => {
  data.value = await getVisualization();
};
fetchData();

setInterval(() => {
  fetchData();
}, 3000);
</script>

<style scoped></style>
