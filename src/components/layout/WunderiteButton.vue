<template>
    <button :class="baseClasses" :disabled="disabled" :aria-disabled="disabled ? 'disabled':null">
        <slot></slot>
    </button>
</template>
<script>
export default {
    inheritAttrs: true,
    props: {
        primary: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        baseClasses(){
            return [
                'inline-flex text-base leading-[22px] font-semibold py-[8px] px-[16px] font-open-sans border border-0 rounded-[3px] transition-colors ease-in disabled:bg-[#F2F3F7] disabled:text-[#6E6E6E] disabled:cursor-not-allowed',
                this.primary ? 'bg-[#4355F3] text-white hover:bg-[#0F40D8]' : 'text-[#16244F] bg-transparent hover:bg-[#CFD3EE]'
            ];
        }
    }
}
</script>