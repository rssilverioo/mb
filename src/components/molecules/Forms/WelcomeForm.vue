
<template>
    <Input :required="true" label="Endereço de e-email *" type="email"  v-model="form.email"/>
    <RadioButton 
        :options="[{label : 'Pessoa Física', value : 'PF'}, {label : 'Pessoa Jurídica', value : 'PJ'}]"
        v-model="form.type"
    />
</template>

<script setup>
import { RadioButton, Input } from '../../atoms';

defineProps({
    form: Object,
});

</script>