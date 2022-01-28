<template>
    <label :for="id" class="font-regular text-base leading-[22px] font-open-sans text-[#4B5563] relative cursor-pointer inline-flex flex-row-reverse items-center">
        <span>{{ label }}</span>
        <input :id="id" :name="name" type="checkbox" class="h-0 w-0 opacity-0 absolute peer" />
        <span class="mr-4 h-[18px] w-[18px] inline-flex justify-center items-center border-2 border-[#D1D5DB] rounded-[4px] bg-white peer-checked:bg-blue-500 fill-transparent peer-checked:fill-white peer-checked:border-0 transition ease-in">
            <icon name="check" class="h-[9px] w-[9px]" />
        </span>
    </label>
</template>
<script>
import Icon from "./Icon.vue";

export default {
    components: {Icon},
    props: {
        id: {
            type: String
        },
        name: {
            type: String
        },
        label: {
            type: String
        }
    }
}
</script>