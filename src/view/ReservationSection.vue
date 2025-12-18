<script setup>
import ReservationForm from '../components/reservation.vue';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <section class="py-16 px-6 bg-[#FFF1F1]">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl text-center font-extrabold text-rose-900 pb-1">
          Reservations & Contact
          <span class="border-b-2 px-[85px] mb-[10px] border-rose-800 absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 "></span>
        </h1>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ReservationForm />

        <div class="space-y-10 text-left">
          <div>
            <h3 class="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="bg-rose-900 p-3 rounded-full text-white"><MapPinIcon class="size-6"/></div>
                <div>
                  <h4 class="font-bold text-gray-900">Location</h4>
                  <p class="text-gray-600">Bloc Sonel Bonamoussadi<br>Douala, Cameroun</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="bg-rose-900 p-3 rounded-full text-white"><PhoneIcon class="size-6"/></div>
                <div>
                  <h4 class="font-bold text-gray-900">Phone</h4>
                  <p class="text-gray-600">+237 692-623-885</p>
                  <p class="text-gray-500 text-sm">WhatsApp: +237 692-623-885</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="bg-rose-900 p-3 rounded-full text-white"><EnvelopeIcon class="size-6"/></div>
                <div>
                  <h4 class="font-bold text-gray-900">Email</h4>
                  <p class="text-gray-600">reservations@osan.com</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="bg-rose-900 p-3 rounded-full text-white"><ClockIcon class="size-6"/></div>
            <div>
              <h4 class="font-bold text-gray-900">Hours</h4>
              <div class="text-gray-600 text-sm">
                <p>Tuesday - Thursday: 5:00 PM - 11:00 PM</p>
                <p>Friday - Saturday: 5:00 PM - 1:00 AM</p>
                <p>Sunday: 4:00 PM - 10:00 PM</p>
                <p class="italic text-rose-800 mt-1">Closed Mondays</p>
              </div>
            </div>
          </div>

          <div class="w-full h-48 bg-gray-200 rounded-3xl flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
            <MapPinIcon class="size-10 text-rose-900 mb-2" />
            <p class="text-gray-500 font-medium">Map integration placeholder</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>