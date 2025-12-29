<template>
    <div>
        <h2>Child Component</h2>
        <p :style="{color,
                    backgroundColor: bgColor}
        ">
            {{ color }}
        </p>
    </div>
</template>
<script setup>
    const props = defineProps({
        color: String,
        bgColor: String,
    });
    console.log(props.color);
</script>
<style>
    
</style>