<!--setup이 있으면 옵션 구분 없이 한 번에 선언할 수 있음-->
<script setup>
    import { ref, onMounted, watch } from 'vue';
    import ChildComp from './components/ChildComp.vue';

    let count = ref(0); // 상태변수 초기값(state)
    let title = "Hello Vue";
    let color = ref('blue');

    onMounted(() => {
        console.log('mounted');
    });

    const increaseCount = () => {
        count++;
    }

    watch(color, () => {
        console.log('color 변경');
    });
</script>

<template>
    <div>
        <h1>{{ title }}</h1>
        <button @click="increaseCount">count++</button>
        <p>{{ count }}</p>
        <ChildComp :color="color" bgColor="yellow"/>
        <button @click="color='red'">change color</button>
    </div>
</template>

<style scoped>

</style>
