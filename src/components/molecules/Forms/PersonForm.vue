
<template>
    <Input :required="true" :label="name" type="text"  v-model="form.name"/>
    <Input :required="true" :label="document" type="number"  :maxlength="document" v-model="form.document"/>
    <Input :required="false" :label="date" type="date"  v-model="form.birthdate"/>
    <Input :required="false" label="Telefone" type="tel"  v-model="form.phone"/>
</template>

<script setup>
import { computed } from 'vue';
import { Input } from '../../atoms';


const props = defineProps({
    form: Object,
});

const name = computed(() => props.form.type == 'PF' ? 'Nome' :'Razão Social' );
const document = computed(() => props.form.type == 'PF' ? 'CPF *' :'CNPJ', props.form.maxlength == 'PF' ? 11 : 14);
const date = computed(() => props.form.type == 'PF' ? 'Data de Nascimento ' :'Data de Abertura');

</script>