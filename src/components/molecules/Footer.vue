


<template>
  <div class="footer">
    <Button :disabled="disabled" v-if="prevBtn" @click="prev()">{{ prevBtn }}</Button>
    <Button :disabled="disabled"  v-if="nextBtn" class="primary" @click="next()" type="submit">{{ nextBtn }}</Button>
  </div>
</template>


<script setup>
import { Button } from '../atoms';


defineProps({
  nextBtn: String,
  prevBtn: String,
  disabled: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['next', 'prev']);

const next = () => emit('next');
const prev = () => emit('prev');
</script>

<style lang="scss" scoped>
  .footer {
    margin-top: 30px;
    margin-bottom: 100px;
    display: flex;
    gap: 10px;
  }
</style>

