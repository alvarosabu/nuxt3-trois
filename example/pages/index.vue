<script lang="ts" setup>
import { Plane } from 'troisjs'
import { onMounted, ref } from 'vue'

const renderer = ref(null)
const sphere = ref(null)

function loop () {
  sphere.value.mesh.position.y = (Math.sin(Date.now() / 1000) * 5) + 10
}
onMounted(() => {
  if (renderer.value) {
    renderer.value.onBeforeRender(loop)
  }
})
</script>
<template>
  <div class="container">
    <Renderer ref="renderer" orbit-ctrl alpha resize shadow>
      <Camera :position="{ x: 25, y: 25, z: 25 }" />
      <Scene background="#002E3B">
        <AmbientLight color="#fff" />
        <DirectionalLight
          ref="directionalLight"
          color="#FCF9D9"
          :intensity="0.5"
          cast-shadow
          :position="{ x: 5, y: 20, z: 0 }"
          :shadow-map-size="{ width: 1024, height: 1024 }"
          :shadow-camera="{
            left: -100,
            right: 100,
            top: 100,
            bottom: -100,
            near: 0.5,
            far: 500,
          }"
        />
        <Sphere
          ref="sphere"
          :position="{ x: 0, y: 4, z: 0 }"
          :radius="2"
          cast-shadow
          :width-segments="32"
          :height-segments="32"
        >
          <ToonMaterial color="teal" />
        </Sphere>
        <Plane :scale="{ x: 30, y: 30, z: 30 }" :rotation="{ x: -Math.PI / 2 }" receive-shadow>
          <StandardMaterial color="#333" />
        </Plane>
      </Scene>
    </Renderer>
  </div>
</template>

<style>
.container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
