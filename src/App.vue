<template>
  <div
    class="bg-[url('src/assets/imgs/bg.jpg')] bg-cover bg-center h-screen text-white p-5 flex overflow-hidden"
  >
    <!-- left -->
    <div class="flex-1 bg-opacity-50 bg-slate-800 p-3 flex flex-col">
      <HorizontalBar class="h-1/3" />
      <RadarBar class="h-1/3 mt-5" />
      <Relation class="h-1/3 mt-5" />
    </div>

    <!-- center -->
    <div class="w-1/2 ml-5 flex flex-col">
      <TotalData class="bg-opacity-50 bg-slate-800 p-3" />
      <MapChart class="bg-opacity-50 bg-slate-800 p-3 mt-4 flex-1" />
    </div>

    <!-- right -->
    <div class="flex-1 ml-5 bg-opacity-50 bg-slate-800 p-3 flex flex-col">
      <VerticalBar class="h-1/3" />
      <RingBar class="h-1/3 mt-5" />
      <WordCloud class="h-1/3 mt-5" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
