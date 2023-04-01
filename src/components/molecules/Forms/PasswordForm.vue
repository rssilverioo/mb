
<template>
    <Input :required="true" label="Sua Senha" type="password"  v-model="form.password"/>
</template>

<script setup>
import { Input } from '../../atoms';
const props = defineProps({
    form: Object,
});

</script>