
<template>
    <Input v-if="form.email" disabled :required="true" label="Endereço de e-email *" type="email"  v-model="form.email"/>
    <Input v-if="form.name"  disabled :required="true" :label="name" type="text"  v-model="form.name"/>
    <Input v-if="form.document"  disabled :required="true" :label="document" type="text"  v-model="form.document"/>
    <Input v-if="form.birthdate" disabled :required="true" :label="date" type="date"  v-model="form.birthdate"/>
    <Input v-if="form.phone" disabled :required="true" label="Telefone" type="text"  v-model="form.phone"/>
</template>

<script setup>
import { computed } from 'vue';
import { Input } from '../../atoms';


const props = defineProps({
    form: Object,
});

const name = computed(() => props.form.type == 'PF' ? 'Nome' :'Razão Social');
const document = computed(() => props.form.type == 'PF' ? 'CPF *' :'CNPJ');
const date = computed(() => props.form.type == 'PF' ? 'Data de Nascimento ' :'Data de Abertura');

</script>
