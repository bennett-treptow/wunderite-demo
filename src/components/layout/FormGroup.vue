<template>
    <div class="block">
        <label :for="labelFor" class="block text-[#627398] mb-[8px]">
            {{ label }}
        </label>
        <slot></slot>
    </div>
</template>
<script setup>
const props = defineProps({
    label: String,
    labelFor: String
});
</script>