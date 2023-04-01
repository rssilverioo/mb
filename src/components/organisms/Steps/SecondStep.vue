
<template>
    <Header 
        :title="title"
        :currentStep="2"
        :totalSteps="4"
    ></Header>

    <form @submit.prevent="submitForm()">
        <PersonForm :form="form"/>
        <Footer 
            prevBtn="Voltar"
            nextBtn="Continuar"
            @prev="emit('prev')"
        ></Footer>
    </form>
</template>

<script setup>
import { computed } from "vue";
import { Footer, Header } from "../../molecules/"
import { PersonForm } from "../../../components/molecules/Forms";
const emit = defineEmits(['next','prev']);

const props = defineProps({
    form: Object
})

const submitForm = () => emit('next');

const title = computed(() => props.form.type == 'PF' ? 'Pessoa Física' :'Pessoa Jurídica');

</script>