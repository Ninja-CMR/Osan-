<script setup lang="ts">
import imageLounge from '../assets/Gallery/imageAtmosphereLounge.jpg'
import imageWine from '../assets/Gallery/imageWineCollection.jpg'
import imageGalleryDishes from '../assets/Gallery/imageGalleryDishes.jpg'
import imageGalleryLounge from '../assets/Gallery/imageGalleryLounge.jpg'
import imageCounterBarGallery from '../assets/Gallery/imageCounterBarGallery.jpg'
import imageExperienceDishes from '../assets/Gallery/imageExperienceDishes.jpg'
</script>

<template>
  <div class="space-y-20 py-10 px-6">

    <section id="gallery" class="text-center">
      <div class="flex flex-col items-center mt-[70px] py-2 gap-2
              px-5 md:px-24 lg:px-48 mb-10">
        <h1 class="text-4xl md:text-5xl text-center font-extrabold text-rose-900 pb-1">
          Gallery
        </h1>
        <div class="border-b-2 px-[85px] mb-[10px] border-rose-800"></div>
        <p class="text-xl text-gray-500 mb-[25px] text-center max-w-4xl">A glimpse into the OSAN experience
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 mb-[25px] gap-6 max-w-6xl mx-auto">

        <div class="group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer">
          <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url(${imageLounge})` }"
          ></div>

          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>

          <div class="absolute bottom-6 left-6 text-left">
            <h3 class="text-white text-xl font-bold tracking-wide">Elegant dining area</h3>
          </div>
        </div>

        <div class="group relative h-80 rounded-3xl overflow-hidden shadow-lg bg-rose-900 flex items-center justify-center">
          <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url(${imageWine})` }"
          ></div>
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
          <div class="absolute bottom-6 left-6 text-left">
            <h3 class="text-white text-xl font-bold tracking-wide">Wine collection</h3>
          </div>
        </div>

        <div class="group relative h-80 rounded-3xl overflow-hidden shadow-lg bg-rose-950 flex items-center justify-center">
          <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url(${imageGalleryDishes})` }"></div>
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
          <div class="absolute bottom-6 left-6 text-left">
            <h3 class="text-white text-xl font-bold tracking-wide">Gourmet dish</h3>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        <div class="group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer">
          <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url(${imageGalleryLounge})` }"
          ></div>

          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>

          <div class="absolute bottom-6 left-6 text-left">
            <h3 class="text-white text-xl font-bold tracking-wide">Lounge atmosphere</h3>
          </div>
        </div>

        <div class="group relative h-80 rounded-3xl overflow-hidden shadow-lg bg-rose-900 flex items-center justify-center">
          <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url(${imageCounterBarGallery})` }"
          ></div>
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
          <div class="absolute bottom-6 left-6 text-left">
            <h3 class="text-white text-xl font-bold tracking-wide">Bar counter</h3>
          </div>
        </div>

        <div class="group relative h-80 rounded-3xl overflow-hidden shadow-lg bg-rose-950 flex items-center justify-center">
          <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url(${imageExperienceDishes})` }"></div>
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
          <div class="absolute bottom-6 left-6 text-left">
            <h3 class="text-white text-xl font-bold tracking-wide">Fine Dining experience</h3>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>