<template>
    <div ref="canvasBox" id="CanvasBox"/>
</template>

<script>
    import * as pixiObj from '@/pixi/pixi';

    export default {
        //https://qiita.com/t_furu/items/042f2d8f4cbcf8056b8c
        name: "PixiCanvas",
        data() {
            return {
                pixiApp: pixiObj.pixiApp,
                text: pixiObj.text,
            }
        },
        mounted() {
            const container = this.$refs.canvasBox;
            //同じ要素を指すがVueでは普通$refsを使用
            //console.log(this.$refs.canvasBox);
            //console.log(document.getElementById('CanvasBox'))
            container.appendChild(this.pixiApp.view);//<canvas>をcanvasBoxに差し込む
            this.pixiApp.stage.addChild(this.text);
        }
    }
</script>

<style scoped>

</style>