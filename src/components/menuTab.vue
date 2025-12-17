<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import { menuCategories } from '../utils/data/menData.ts';
import { ref } from 'vue';

const categories = ref(menuCategories);
</script>

<template>

  <div class ="flex flex-col items-center mt-[30px] py-2 gap-2
              px-5 md:px-24 lg:px-48">
    <h1 class="text-4xl md:text-5xl text-center mt-[80px] font-extrabold text-rose-900 pb-1">
      Our menu
    </h1>
    <div class="border-b-2 px-[85px] border-rose-800"></div>

    <div class="w-full max-w-4xl mx-auto mt-[30px] px-4 py-10 sm:px-6">
      <TabGroup>

        <TabList class="flex flex-wrap justify-center space-x-3 rounded-xl bg-gray-100 p-2 shadow-inner">
          <Tab
              v-for="category in Object.keys(categories)"
              as="template"
              :key="category"
              v-slot="{ selected }"
          >
            <button
                :class="[
              'flex items-center justify-center gap-2 rounded-xl py-3 px-5 text-lg font-medium leading-5 transition-colors duration-200',

              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-rose-700 ring-rose-900',

              selected
                ? 'bg-rose-900 text-white shadow-md'
                : 'text-gray-700 hover:bg-white hover:text-rose-900',
            ]"
            >
              {{ category }}
            </button>
          </Tab>
        </TabList>

        <TabPanels class="mt-8">
          <TabPanel
              v-for="(items, idx) in Object.values(categories)"
              :key="idx"
              :class="[
            'p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6',
            'rounded-xl bg-white shadow-xl',
            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-100 ring-rose-900',
          ]"
          >
            <div
                v-for="item in items"
                :key="item.id"
                class="relative rounded-lg p-4 bg-white border border-gray-200 hover:shadow-lg transition duration-200"
            >
              <h3 class="text-xl font-bold leading-6 text-rose-900">
                {{ item.title }}
              </h3>

              <p class="mt-1 text-sm text-gray-600">
                {{ item.description }}
              </p>

              <div class="mt-2 text-lg font-extrabold text-gray-800">
                {{ item.price }}
              </div>

              <a
                  href="#"
                  :class="[
                'absolute inset-0 rounded-lg',
                'focus:z-10 focus:outline-none focus:ring-2 ring-rose-900/50',
              ]"
              />
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>