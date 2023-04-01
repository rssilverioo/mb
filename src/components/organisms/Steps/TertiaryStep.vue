
<template>
    <Header 
        title="Senha de Acesso"
        :currentStep="3"
        :totalSteps="4"
    ></Header>

    <form @submit.prevent="submitForm()">
        <PasswordForm :form="form"/>
        <Footer 
            prevBtn="Voltar"
            nextBtn="Continuar"
            @prev="emit('prev')"
        ></Footer>
    </form>
</template>

<script setup>
import { Footer, Header } from "../../molecules/"

import { PasswordForm } from "../../../components/molecules/Forms";

const emit = defineEmits(['next','prev']);

const props = defineProps({
    form: Object
})

const submitForm = () => emit('next');
</script>