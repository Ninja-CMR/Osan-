<script setup lang="ts">
import {useMenu} from '../composables/useMenu.ts'


const { isOpen, toggleMenu, closeMenu } = useMenu();
</script>}

<template>
  <header>
    <div class="flex items-center justify-between px-4 md:px-10 py-3">
      <a href="#home" class="flex-shrink-0"><img src="../assets/logo.png" class="w-[80px] md:w-[90px]"></a>
      <nav class="hidden md:flex flex-row justify-around gap-5 bg-white p-3 font-bold">
        <a href="#home"  class="text-lg font-semibold">Home</a>
        <a href="#menu"  class="text-lg font-semibold">Menu</a>
        <a href="#gallery"  class="text-lg font-semibold">Lounge</a>
        <a href="#reservation"  class="text-lg font-semibold">Reservation</a>
        <a href="#gallery"  class="text-lg font-semibold">Gallery</a>
        <a href="#reservation"  class="text-lg font-semibold">Contact</a>
      </nav>
      <a href="#reservation" class="hidden md:block bg-rose-900 px-6 py-2 text-white rounded-full font-bold cursor-pointer">Reserve now</a>

      <button
          @click="toggleMenu"
          class="md:hidden flex flex-col gap-1 focus:outline-none"
      >
        <span class="w-6 h-0.5 bg-rose-900"></span>
        <span class="w-6 h-0.5 bg-black"></span>
        <span class="w-6 h-0.5 bg-rose-900"></span>
      </button>
    </div>
    <transition name="slide-fade">
      <div
          v-if="isOpen"
          class="md:hidden bg-white shadow-lg flex flex-col items-center gap-6 py-6"
      >
        <a href="#home" @click="closeMenu" class="text-lg font-semibold">Home</a>
        <a href="#menu" @click="closeMenu" class="text-lg font-semibold">Menu</a>
        <a href="#gallery" @click="closeMenu" class="text-lg font-semibold">Lounge</a>
        <a href="#reservation" @click="closeMenu" class="text-lg font-semibold">Reservation</a>
        <a href="#gallery" @click="closeMenu" class="text-lg font-semibold">Gallery</a>
        <a href="#reservation" @click="closeMenu" class="text-lg font-semibold">Contact</a>

        <a href="#reservation" class="bg-rose-900 px-6 py-2 text-white rounded-full font-bold">
          Reserve now
        </a>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.35s ease;
}
.slide-fade-leave-active {
  transition: all 0.25s ease;
  opacity: 0;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>