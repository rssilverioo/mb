
<template>
  <div class="container">
    <div>
      <FirstStep v-if="step == 1" @next="step = ++step" :form="form"/>
      <SecondStep v-if="step == 2" @next="step = ++step" @prev="$step = --step" :form="form"/>
      <TertiaryStep v-if="step == 3" @next="step = ++step" @prev="$step = --step" :form="form"/>
      <QuaternaryStep v-if="step == 4" @next="step = ++step" @prev="$step = --step" :form="form"/>
      <LastStep v-if="step == 5" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {FirstStep, SecondStep, TertiaryStep, QuaternaryStep, LastStep} from "../components/organisms/Steps"

const step = ref(1); 
const form = ref({});

const fetchFormFields = async () => {
  const api = 'http://localhost:3002'
  const response = await fetch(`${api}/registration`);
  const data = await response.json();
  form.value = data;

}

setTimeout(() => {
  fetchFormFields();
});
</script>