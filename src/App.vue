<template>
    <div class="container mx-auto max-w-[600px] p-4">
        <transition-group tag="div" class="space-y-4" enter-active-class="transition ease-out duration-100"
                          enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                          leave-active-class="transition ease-in duration-75"
                          leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <questionnaire-tile
                v-for="q in questionnaires"
                :key="q.id"
                :questionnaire="q"
                @duplicate="duplicate"
                @remove="questionnaires.splice(questionnaires.findIndex((item) => item.id == q.id), 1)"
            />
            <div v-if="questionnairesLoading" key="empty" class="rounded-[5px] shadow flex justify-center items-center transition ease-in p-[16px] bg-[#F8F9FF]">
                Loading
            </div>
        </transition-group>
    </div>
</template>
<script setup>
import {ref} from 'vue';
import QuestionnaireTile from './components/QuestionnaireTile.vue';
import {createQuestionnaire, fetchQuestionnaires, questionnaireIdGenerator} from './api/questionnaires';

let questionnaires = ref([]);
let questionnairesLoading = ref(true);

fetchQuestionnaires().then((response) => {
    questionnaires.value = response;
}).catch(() => {

}).finally(() => {
    questionnairesLoading.value = false;
});

function duplicate($event){
    $event.id = questionnaireIdGenerator();
    questionnaires.value.push($event);
}

</script>