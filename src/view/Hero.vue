<script setup lang="ts">

</script>

<template>
  <section
      id="home"
      class="relative w-full h-[90vh] sm:h-screen bg-cover bg-center"
  >
    <div class="absolute inset-0 bg-rose-900/60"></div>


    <div class="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">


      <h1 class="text-4xl md:text-7xl font-extrabold mb-2 drop-shadow-lg text-white">
        Dine , Unwind ,  Enjoy.
      </h1>
      <p class="text-base md:text-2xl mb-10 max-w-2xl leading-relaxed drop-shadow-md">
        Experience refined dining and sophisticated ambiance
      </p>
      <div class="flex flex-col  sm:flex-row gap-4 sm:gap-6">
        <a
            href="#find-us"
            class="flex items-center justify-center gap-2 bg-rose-900 hover:bg-rose-800 px-6 py-3 rounded-3xl text-lg font-semibold transition-all duration-300"
        >
          Reserve your table
        </a>
        <a
            href="#full-menu"
            class="flex items-center gap-2 justify-center  text-rose-900 bg-white  px-6 py-4 rounded-3xl text-lg font-semibold transition-all duration-300"
        >
          <img src="../assets/hero%20picture/heroIcon.png" class="w-[32px]" />
          Discovery menu
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped>
</style>
