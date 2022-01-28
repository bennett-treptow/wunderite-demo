<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="$emit('close')">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0"
                                 enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100"
                                 leave-to="opacity-0">
                    <DialogOverlay class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"/>
                </TransitionChild>

                <!-- This element is to trick the browser into centering the modal contents. -->
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <TransitionChild as="template" enter="ease-out duration-300"
                                 enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                 enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                                 leave-from="opacity-100 translate-y-0 sm:scale-100"
                                 leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <div
                        class="inline-block align-bottom bg-white rounded-[3px] text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">

                        <div class="px-[30px] pt-5">
                            <div class="text-left">
                                <DialogTitle as="h3" class="text-[20px] leading-[24px] font-medium text-[#16244F] mb-[30px]">
                                    {{ title }}
                                </DialogTitle>
                                <div class="text-[#4B5563]">
                                    <slot></slot>
                                </div>
                            </div>
                        </div>
                        <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                            <button type="button"
                                    tabindex="2"
                                    class="bg-white rounded-[4px] fill-[#909399] hover:fill-[#16244F] hover:bg-[#CFD3EE] transition flex justify-center items-center h-[28px] w-[28px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    @click="$emit('close')">
                                <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="h-4 w-6"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class=""></path></svg>
                                <span class="sr-only">Close</span>
                            </button>
                        </div>
                        <div class="mt-5 px-4 pt-5 pb-4 bg-[#F8F9FF] space-x-4 text-right">
                            <wunderite-button @click="$emit('close')" :disabled="cancelDisabled">
                                {{ cancelText }}
                            </wunderite-button>
                            <wunderite-button primary @click="$emit('confirm')" :disabled="confirmDisabled">
                                {{ confirmText }}
                            </wunderite-button>
                        </div>
                    </div>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script>
import {Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'
import WunderiteButton from "./layout/WunderiteButton.vue";

export default {
    components: {
        WunderiteButton,
        Dialog,
        DialogOverlay,
        DialogTitle,
        TransitionChild,
        TransitionRoot
    },
    emits: ['close', 'confirm'],
    props: {
        open: {
            type: Boolean,
            default: false
        },
        title: {
            type: String
        },
        confirmText: {
            type: String,
            default: 'Confirm'
        },
        cancelText: {
            type: String,
            default: 'Cancel'
        },
        confirmDisabled: {
            type: Boolean,
            default: false
        },
        cancelDisabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>