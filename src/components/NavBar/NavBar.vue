<script setup lang="ts">
import { ref } from 'vue'
import CButton from '../Button/Button.vue'
import CameraModal from '@/components/Camera/cameraModal.vue' // Importa el nuevo componente

const isCameraOpen = ref(false)

const goHome = () => console.log('Go Home')
const openCamera = () => {
    isCameraOpen.value = true
}
const openHelp = () => console.log('Open Help')
</script>

<template>
    <nav
        class="fixed bottom-0 left-0 w-full h-24 bg-white/80 backdrop-blur-xl border-t border-white/20 flex items-center justify-between px-12 z-[100] shadow-[0_-10px_40px_rgba(0,0,0,0.08)]">

        <div class="flex flex-col items-center gap-1">
            <CButton variant="ghost" icon="home"
                class="text-slate-400 hover:text-blue-600 transition-all duration-300 scale-125" @click="goHome" />
            <span class="text-[10px] font-black uppercase tracking-widest text-slate-400">Inicio</span>
        </div>

        <div class="relative -top-10">
            <div class="absolute inset-[-15px] bg-white/90 backdrop-blur-md rounded-full shadow-2xl shadow-blue-500/20">
            </div>

            <CButton variant="primary" icon="camera" class="relative w-20 h-20 bg-gradient-to-br from-slate-900 to-black text-white rounded-full 
                       flex items-center justify-center
                       hover:scale-110 active:scale-95 
                       transition-all duration-500
                       ring-[6px] ring-white shadow-[0_15px_30px_rgba(0,0,0,0.3)]" @click="openCamera" />

            <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse">
            </div>
        </div>

        <div class="flex flex-col items-center gap-1">
            <CButton variant="ghost" icon="help-circle"
                class="text-slate-400 hover:text-blue-600 transition-all duration-300 scale-125" @click="openHelp" />
            <span class="text-[10px] font-black uppercase tracking-widest text-slate-400">Ayuda</span>
        </div>

    </nav>
    <CameraModal :is-open="isCameraOpen" @close="isCameraOpen = false" />
</template>

<style scoped>
/* Sutil animación para que aparezca al cargar la app */
nav {
    animation: slideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

@keyframes slideUp {
    from {
        transform: translateY(100%);
    }

    to {
        transform: translateY(0);
    }
}
</style>