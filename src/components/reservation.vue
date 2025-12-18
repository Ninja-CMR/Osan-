<script setup>
import { useReservation } from '../composables/useReservation.ts';
import BaseInput from '../components/baseInput/baseInput.vue';

const {
  name, email, phone, date, time, guests, requests,
  errors, onSubmit
} = useReservation("237692623885");
</script>

<template>
  <form @submit.prevent="onSubmit" class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
    <h3 class="text-2xl font-bold text-gray-800 mb-6">Reserve Your Table</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <BaseInput label="Name" v-model="name" :error="errors.name" placeholder="Your name" />
      <BaseInput label="Email" v-model="email" :error="errors.email" type="email" placeholder="your@email.com" />
      <BaseInput label="Phone" v-model="phone" :error="errors.phone" placeholder="+237 6..." />

      <div class="flex flex-col gap-1">
        <label class="font-bold text-gray-800 text-sm ml-1">Guests</label>
        <select v-model="guests" class="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-rose-900">
          <option v-for="n in 10" :key="n" :value="n + ' Guests'">{{ n }} Guests</option>
        </select>
      </div>

      <BaseInput label="Date" v-model="date" :error="errors.date" type="date" />
      <BaseInput label="Time" v-model="time" :error="errors.time" type="time" />
    </div>

    <div class="flex flex-col gap-1 mt-4">
      <label class="font-bold text-gray-800 text-sm ml-1">Special Requests</label>
      <textarea
          v-model="requests"
          rows="3"
          placeholder="Any special requests..."
          class="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-rose-900 resize-none shadow-sm"
      ></textarea>
    </div>

    <button
        type="submit"
        class="w-full mt-6 bg-rose-900 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-rose-950 transition-all active:scale-[0.98] shadow-lg shadow-rose-900/20"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
      </svg>
      Confirm Reservation
    </button>
  </form>
</template>