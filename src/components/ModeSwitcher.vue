<script setup lang="ts">
import { ref, onMounted } from 'vue'

// estado
const isDark = ref(false)

// aplica el tema
function applyTheme(value: boolean) {
    isDark.value = value
    document.documentElement.classList.toggle('dark', value)
    localStorage.setItem('theme', value ? 'dark' : 'light')
}

// toggle
function toggleTheme() {
    applyTheme(!isDark.value)
}

// cargar tema guardado
onMounted(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
        applyTheme(saved === 'dark')
    } else {
        // opcional: respetar preferencia del sistema
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        applyTheme(prefersDark)
    }
})
</script>

<template>
    <button @click="toggleTheme" class="relative inline-flex h-6 w-11 items-center rounded-full
           bg-gray-300 dark:bg-gray-700 px-0.5
           transition-colors duration-300
           shadow-inner" aria-label="Toggle theme">
        <span class="inline-flex h-5 w-5 items-center justify-center rounded-full
             bg-white shadow
             transition-transform duration-300 ease-in-out" :class="isDark ? 'translate-x-5' : 'translate-x-0'">
            <IconLucideSun v-if="!isDark" class="h-3.5 w-3.5 text-yellow-500" />
            <IconLucideMoon v-else class="h-3.5 w-3.5 text-blue-400" />
        </span>
    </button>
</template>
