
<template>
    <Header 
        title="Seja bem vindo(a)"
        :currentStep="1"
        :totalSteps="4"
    ></Header>
    <form @submit.prevent="submitForm()">
        <WelcomeForm :form="form"/>
        <Footer 
            nextBtn="Continuar"
        ></Footer>
    </form>
</template>

<script setup>
import { Footer, Header } from "../../molecules";
import { WelcomeForm } from "../../molecules/Forms";
const emit = defineEmits(['next']);

const props = defineProps({
    form: Object
})

const submitForm = () => emit('next');
</script>