<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col items-center mt-[70px] py-2 gap-2
              px-5 md:px-24 lg:px-48 bg-rose-900">
    <h1 class="text-4xl md:text-5xl text-center font-extrabold mt-[80px] text-white pb-1">
      The wine lounge
    </h1>

    <div class="border-b-2 px-[85px] mb-[10px] border-b-gray-300"></div>
    <p class="text-xl text-white mb-[25px] text-center max-w-4xl">Unwind in sophistication
    </p>
    <div class=" px-4 max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div class="flex flex-col items-center justify-center p-4">
          <div class="bg-rose-800/90 rounded-full p-5 mb-3">
            <img src="../assets/WineSection/imageWine1.png" class="w-[32px]" />
          </div>
          <h3 class="font-bold text-2xl text-center text-white">Premium selection</h3>
          <p class="text-center mt-2 text-white">
            Over 200 carefully wines from renowned <br> vineyards wordlwide
          </p>
        </div>

        <div class="flex flex-col items-center justify-center p-4">
          <div class="bg-rose-800/90 rounded-full mb-3 p-5">
            <img src="../assets/WineSection/musicNoteWine.png" class="w-[32px]" />
          </div>
          <h3 class="font-bold text-2xl text-center text-white">Live entertainment</h3>
          <p class="text-center mt-2 text-white">Enjoyed smooth jazz and accoustic performance every <br> weekend evening</p>
        </div>

        <div class="flex flex-col items-center justify-center p-4">
          <div class="bg-rose-800/90 rounded-full mb-3 p-5">
            <img src="../assets/WineSection/starWine.png" class="w-[32px]" />
          </div>
          <h3 class="font-bold text-2xl text-center text-white">Privates Events </h3>
          <p class="text-center mt-2 text-white">Host your special occasions in an intimate and <br> elegant setting</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>