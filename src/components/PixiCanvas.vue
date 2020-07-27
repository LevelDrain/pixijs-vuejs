<template>
    <canvas ref="canvas"/>
</template>

<script>
    import * as pixiObj from '@/pixi/pixi';
    import * as PIXI from 'pixi.js';

    export default {
        //https://qiita.com/t_furu/items/042f2d8f4cbcf8056b8c
        name: "PixiCanvas",
        data() {
            return {
                pixiApp: PIXI.Application({width: 340, height: 240}),
                style: pixiObj.style,
                text: pixiObj.text,
            }
        },
        created() {
            this.text.x = 300;
            this.text.y = 100;
        },
        mounted() {
            const renderer = new PIXI.autoDetectRenderer(900, 300, {
                backgroundColor: 0x8c89a0,
                view: this.$refs.canvas
            });
            this.pixiApp.stage.addChild(this.text);
            renderer.render(this.pixiApp.stage);
        },
        methods: {}
    }
</script>

<style scoped>

</style>