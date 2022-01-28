<template>
    <div>
        <div class="rounded-[5px] shadow flex transition ease-in hover:ring-2 hover:ring-offset-0 hover:ring-[#B3BAF9]">
            <div class="bg-[#627398] rounded-l-[5px] flex justify-center items-center px-[5px]">
                <img :src="questionnaire.image" class="w-[56px]" />
            </div>
            <div class="flex p-[16px] bg-[#F8F9FF] rounded-r-[5px] flex-1">
                <div class="flex-1">
                    <h3 class="text-[#16244F] font-semibold leading-[23px] text-lg">{{ questionnaire.name }}</h3>
                    <p class="text-[#4B5563] text-base font-normal font-open-sans leading-[22px] mt-[12px]">{{ questionnaire.description }}</p>
                </div>
                <div class="ml-auto">
                    <dropdown class="font-open-sans text-base leading-[22px]">
                        <MenuItem v-slot="{ active }">
                            <a href="#"
                               :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'px-4 py-2 flex items-center']">
                                <span class="inline-flex h-[16px] w-[23px] justify-center items-center mr-2">
                                    <icon name="input-pipe" class="h-[16px] w-auto inline-block"/>
                                </span>
                                Rename
                            </a>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                            <a href="#"
                               @click="modalOpen = true"
                               :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'px-4 py-2 flex items-center']">
                                <span class="inline-flex h-[16px] w-[23px] justify-center items-center mr-2">
                                    <icon name="copy" class="h-[16px] w-auto inline-block"/>
                                </span>
                                Make a Copy
                            </a>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                            <a href="#"
                               :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'px-4 py-2 flex items-center']">
                                <span class="inline-flex h-[16px] w-[23px] justify-center items-center mr-2">
                                    <icon name="file-xmark" class="h-[16px] w-auto inline-block"/>
                                </span>
                                Mark Form Incomplete
                            </a>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                            <a href="#"
                               @click="$emit('remove', questionnaire.id)"
                               :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'px-4 py-2 flex items-center']">
                                <span class="inline-flex h-[16px] w-[23px] justify-center items-center mr-2">
                                    <icon name="trash-can" class="h-[16px] w-auto inline-block"/>
                                </span>
                                Remove
                            </a>
                        </MenuItem>
                    </dropdown>
                </div>
            </div>
        </div>
        <modal
            :open="modalOpen"
            title="Copy Questionnaire"
            confirm-text="Copy Questionnaire"
            :confirm-disabled="localCopy.name.length === 0"
            @close="modalOpen = false"
            @confirm="$emit('duplicate', localCopy); modalOpen = false;">
            <p class="mb-[20px] max-w-[400px] text-base leading-[22px]">
                Making a copy of <span class="font-semibold">{{ questionnaire.name }}</span> allows you to create a new version of
                the same questionnaire.
            </p>
            <form-group label="New Questionnaire Name" :label-for="'name-'+questionnaire.id">
                <form-input v-model="localCopy.name" ref="nameInput" :id="'name-'+questionnaire.id" />
            </form-group>
            <checkbox id="copy_responses" name="copy_responses" class="mt-[18px]" label="Copy responses from original form" />
        </modal>
    </div>
</template>

<script>
import {ref, reactive} from 'vue';
import Modal from './Modal.vue';
import FormGroup from './layout/FormGroup.vue';
import FormInput from './layout/FormInput.vue';
import Dropdown from './Dropdown.vue';
import Icon from './layout/Icon.vue';
import { MenuItem } from '@headlessui/vue'
import Checkbox from "./layout/Checkbox.vue";
export default {
    components: {
        Modal,
        FormGroup,
        FormInput,
        Dropdown,
        Icon,
        MenuItem,
        Checkbox
    },
    props: {
        questionnaire: {
            type: Object
        }
    },
    setup(props){
        return {
            nameInput: ref(null),
            modalOpen: ref(false),
            localCopy: reactive(
                Object.assign(Object.assign({}, props.questionnaire), {
                    name: props.questionnaire.name + ' - Copy'
                })
            )
        }
    },
    computed: {
        nameInputElement(){
            if(this.nameInput){
                console.log(this.nameInput.value);
                return this.nameInput.value;
            }
            return null;
        }
    },
    emits: ['duplicate', 'remove']
}

</script>
