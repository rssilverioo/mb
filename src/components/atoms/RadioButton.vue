
<template>
  <div class="radio-section">
    <label class="radio" v-for="option in options" >
      <input type="radio" :value="option.value" v-model="value" />
      {{ option.label }}
    </label>
  </div>
</template>



<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  options : {
    type : Array,
    required : true
  },
  modelValue : String,
})

const emit = defineEmits(["update:modelValue"]);
const value = ref(props.modelValue)

watch(() => value.value, (val) => {
  emit("update:modelValue",val)
})
</script>

<style lang="scss" scoped>
.radio-section {

  display: flex;
  flex-direction: row;
  gap:20px;
  margin: 20px 0;
  .radio {
    display: flex;
    flex-direction: row;

    input {
      margin: 0 5px 0 0;
    }
  }
}
</style>