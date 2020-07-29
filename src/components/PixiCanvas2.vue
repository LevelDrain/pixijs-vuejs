<template>
    <canvas ref="canvas" id="Canvas"/>
</template>

<script>
    import * as pixiObj from '@/pixi/pixi';
    import * as PIXI from 'pixi.js';

    export default {
        name: "PixiCanvas2",
        data() {
            return {
                text2: pixiObj.text2,
                stage2: pixiObj.stage2,
            }
        },
        mounted() {
            //--by 上島
            const renderer = new PIXI.autoDetectRenderer({
                width: 900,
                height: 300,
                backgroundColor: 0x08c89a,
                view: this.$refs.canvas
            });
            console.log(renderer.view);
            this.stage2.addChild(this.text2);
            renderer.render(this.stage2);
        }
    }
</script>

<style scoped>

</style>