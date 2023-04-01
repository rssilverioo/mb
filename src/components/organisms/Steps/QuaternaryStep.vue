
<template>
    <Header 
        title="Revise suas informações"
        :currentStep="4"
        :totalSteps="4"
    ></Header>

    <form @submit.prevent="submitForm()">
        <ReviewForm :form="form"/>
        <Footer     

            prevBtn="Voltar"
            nextBtn="Cadastrar"
            @prev="emit('prev')"
        ></Footer>
    </form>
</template>

<script setup>
import { Footer, Header } from "../../molecules/"
import { ReviewForm } from "../../../components/molecules/Forms";

const emit = defineEmits(['next','prev']);

const props = defineProps({
    form: Object
})

const submitForm = async () => {

    setTimeout(async() => {
        const api = 'http://localhost:3002'
        const request = await fetch(`${api}/registration`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(props.form)
        })

        const response = await request.json()

        return response
    })
}
</script>