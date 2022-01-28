<template>
    <input :type="type" class="block rounded-[3px] font-open-sans text-base text-[#4B5563] border-[#DCDADA] border ring-2 ring-transparent focus:outline-0 transition ease-in focus:border-transparent focus:ring-[#B3BAF9] w-full py-[8px] px-[16px]" v-model="modelValue"/>
</template>
<script setup>
import {ref, watch} from 'vue';

let props = defineProps({
    modelValue: {},
    type: {
        type: String,
        default: 'text'
    }
});

const emit = defineEmits(['update:modelValue']);

let modelValue = ref(props.modelValue);

watch(() => modelValue.value, (v) => {
    emit('update:modelValue', v);
});
</script>