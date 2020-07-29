<template>
    <div id="app">
        <PixiCanvas/>
        <hr>
        <PixiCanvas2/>
    </div>
</template>

<script>
    import PixiCanvas from './components/PixiCanvas.vue'
    import PixiCanvas2 from './components/PixiCanvas2.vue'

    export default {
        name: 'App',
        components: {
            PixiCanvas,
            PixiCanvas2
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
