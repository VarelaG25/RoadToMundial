<script setup lang="ts">
import { ref, onBeforeUnmount, watch } from 'vue'

const props = defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['close'])

const videoRef = ref<HTMLVideoElement | null>(null)
const stream = ref<MediaStream | null>(null)
const isLoading = ref(false)
const isProcessing = ref(false)
const showResult = ref(false)

const statusMessage = ref('Escaneando...')
const messages = [
    'Escaneando...',
    'Buscando coincidencia...',
    'Identificando colores...',
    'Extrayendo paleta...',
    'Verificando sede...',
    'Generando ficha...'
]

const colors = [
    { name: 'Forest Green', hex: '#006847' },
    { name: 'Pure White', hex: '#FFFFFF' },
    { name: 'National Red', hex: '#CE1126' }
]

const startCamera = async () => {
    isLoading.value = true
    showResult.value = false
    try {
        stream.value = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'user' },
            audio: false
        })
        if (videoRef.value) videoRef.value.srcObject = stream.value
    } catch (err) {
        alert("Error al acceder a la cámara")
        closeModal()
    } finally {
        isLoading.value = false
    }
}

const startAnalysis = () => {
    if (isProcessing.value) return
    isProcessing.value = true

    let msgIndex = 0
    const interval = setInterval(() => {
        if (msgIndex < messages.length - 1) {
            msgIndex++
            statusMessage.value = messages[msgIndex] || 'Procesando...'
        }
    }, 1600)

    setTimeout(() => {
        clearInterval(interval)
        handleCapture()
    }, 10000)
}

const handleCapture = () => {
    isProcessing.value = false
    showResult.value = true
    stopCamera()
}

const stopCamera = () => {
    if (stream.value) {
        stream.value.getTracks().forEach(track => track.stop())
        stream.value = null
    }
}

const closeModal = () => {
    isProcessing.value = false
    stopCamera()
    emit('close')
}

watch(() => props.isOpen, (newVal) => {
    if (newVal) startCamera()
    else stopCamera()
})

onBeforeUnmount(() => stopCamera())
</script>

<template>
    <Teleport to="body">
        <Transition name="fade">
            <div v-if="isOpen" class="fixed inset-0 z-[200] flex items-center justify-center p-4">
                <div class="absolute inset-0 bg-black/95 backdrop-blur-sm" @click="closeModal"></div>

                <div
                    class="relative bg-white rounded-[3rem] overflow-hidden w-full max-w-md shadow-2xl transition-all duration-500">

                    <div v-if="!showResult"
                        class="aspect-[3/4] bg-black relative flex items-center justify-center overflow-hidden">
                        <video ref="videoRef" autoplay playsinline
                            class="w-full h-full object-cover opacity-70"></video>

                        <div class="absolute inset-0 flex items-center justify-center p-12">
                            <div class="relative w-full h-full">
                                <div
                                    class="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-white rounded-tl-xl">
                                </div>
                                <div
                                    class="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-white rounded-tr-xl">
                                </div>
                                <div
                                    class="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-white rounded-bl-xl">
                                </div>
                                <div
                                    class="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-white rounded-br-xl">
                                </div>

                                <div v-if="isProcessing"
                                    class="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-black/40 backdrop-blur-[1px]">
                                    <div class="relative w-16 h-16 mb-6">
                                        <div class="absolute inset-0 border-4 border-white/20 rounded-full"></div>
                                        <div
                                            class="absolute inset-0 border-4 border-transparent border-t-white rounded-full animate-spin">
                                        </div>
                                    </div>
                                    <Transition name="slide-fade" mode="out-in">
                                        <p :key="statusMessage"
                                            class="text-white text-xs font-black uppercase tracking-[0.3em] text-center px-4">
                                            {{ statusMessage }}
                                        </p>
                                    </Transition>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-else class="p-8 bg-white">
                        <div class="flex justify-between items-center mb-6">
                            <span
                                class="bg-green-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Match
                                Identificado</span>
                            <button @click="showResult = false; startCamera()"
                                class="text-slate-400 hover:text-black text-xs font-bold underline">Reintentar</button>
                        </div>

                        <div class="bg-slate-50 rounded-[2.5rem] p-6 border-2 border-green-600/10 relative">
                            <div class="flex items-center gap-5 mb-6">
                                <span class="text-6xl drop-shadow-lg">🇲🇽</span>
                                <div>
                                    <h3 class="text-3xl font-black text-slate-900 tracking-tighter">MÉXICO</h3>
                                    <p class="text-[10px] font-bold text-green-600 uppercase tracking-widest">Official
                                        Team Data</p>
                                </div>
                            </div>

                            <div class="flex gap-2 mb-6">
                                <div v-for="color in colors" :key="color.hex" class="flex-1">
                                    <div class="h-12 rounded-xl border border-slate-200 shadow-sm mb-1"
                                        :style="{ backgroundColor: color.hex }"></div>
                                    <p class="text-[8px] font-black text-slate-400 uppercase text-center">{{ color.hex
                                    }}</p>
                                </div>
                            </div>

                            <div class="space-y-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                                <div class="flex justify-between items-center border-b border-slate-50 pb-2">
                                    <span class="text-[9px] font-bold text-slate-400 uppercase">Sede</span>
                                    <span class="text-xs font-black text-slate-800">Estadio Azteca</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-[9px] font-bold text-slate-400 uppercase">Kick-off</span>
                                    <span class="text-xs font-black text-slate-800">Junio 2026</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-8 bg-white border-t border-slate-50 flex justify-center">
                        <button v-if="!showResult" @click="startAnalysis" :disabled="isProcessing"
                            class="relative w-20 h-20 rounded-full flex items-center justify-center transition-all active:scale-90">
                            <div class="absolute inset-0 border-4 border-slate-200 rounded-full"></div>
                            <div
                                class="w-16 h-16 bg-white rounded-full border-[3px] border-slate-900 flex items-center justify-center">
                                <div v-if="isProcessing" class="w-8 h-8 bg-red-600 rounded-lg animate-pulse"></div>
                                <div v-else class="w-12 h-12 bg-slate-900 rounded-full"></div>
                            </div>
                        </button>

                        <button v-else @click="closeModal"
                            class="w-full py-5 bg-black text-white rounded-[1.5rem] font-black uppercase tracking-[0.2em]">
                            Finalizar
                        </button>
                    </div>

                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(60px);
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
    transform: translateY(10px);
    opacity: 0;
}

.slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}

@keyframes pulseFocus {

    0%,
    100% {
        transform: scale(1);
        opacity: 1;
    }

    50% {
        transform: scale(1.05);
        opacity: 0.8;
    }
}

.relative.w-full.h-full {
    animation: pulseFocus 2.5s ease-in-out infinite;
}
</style>