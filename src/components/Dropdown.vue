<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <Menu as="div" class="relative inline-block text-left" v-slot="{ open }">
        <div>
            <MenuButton
                :class="[open ? 'bg-[#B3BAF9] ring-2 ring-[#B3BAF9] ring-offset-0' : 'bg-[#E0E8F9]', 'h-[32px] w-[32px] rounded-[3px] flex items-center justify-center']">
                <span class="sr-only">Open options</span>
                <icon name="ellipsis-v" class="h-5 w-5 fill-[#4C63B6]"/>
            </MenuButton>
        </div>

        <transition enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems
                class="origin-top-right z-10 absolute right-0 mt-2 min-w-fit whitespace-nowrap rounded-[4px] shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="py-1">
                    <slot></slot>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script>
import Icon from './layout/Icon.vue';
import {Menu, MenuButton, MenuItems} from '@headlessui/vue'

export default {
    props: {
        items: {
            type: Array
        }
    },
    components: {
        Icon,
        Menu,
        MenuButton,
        MenuItems
    },
}
</script>