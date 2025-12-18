<script setup>
defineProps(['label', 'modelValue', 'type', 'placeholder', 'error']);
defineEmits(['update:modelValue']);
</script>

<template>
  <div class="flex flex-col gap-1 w-full text-left">
    <label class="font-bold text-gray-800 text-sm ml-1">{{ label }}</label>
    <input
        :type="type || 'text'"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        :class="[
        'w-full p-3 border rounded-xl transition-all outline-none',
        error ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-rose-900 focus:ring-1 focus:ring-rose-900'
      ]"
    />
    <span v-if="error" class="text-red-500 text-xs mt-1">{{ error }}</span>
  </div>
</template>