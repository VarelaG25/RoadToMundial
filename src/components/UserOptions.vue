<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t: $t } = useI18n();

const isOpen = ref(false)

// Lista de opciones del usuario
const userOptions = [
    { label: "USER_OPTIONS.LOGIN", action: () => console.log('Iniciar sesión') },
    { label: "USER_OPTIONS.PROFILE", action: () => console.log('Mi perfil') },
    { label: "USER_OPTIONS.SHOPPING", action: () => console.log('Mis compras') },
    { label: "USER_OPTIONS.WISHLIST", action: () => console.log('Lista de deseados') },
    { label: "USER_OPTIONS.LOGOUT", action: () => console.log('Cerrar sesión') },
]

function toggleMenu() {
    isOpen.value = !isOpen.value
}

function selectOption(option: typeof userOptions[0]) {
    option.action()
    isOpen.value = false
}

// Se cierra cuando se pierde el foco
function onBlur() {
    isOpen.value = false
}
</script>

<template>
    <div class="relative inline-block text-left" tabindex="0" @focusout="onBlur">
        <!-- Botón del usuario -->
        <button @click="toggleMenu" class="inline-flex items-center gap-2 rounded-md px-3 py-2
             bg-[var(--color-bg)] text-[var(--color-primary)]
             hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-primary-hover)]
             shadow transition-colors duration-150" aria-label="User menu">
            <IconLucideUserCircle class="h-5 w-5" />
            <span>User</span>
        </button>

        <!-- Dropdown -->
        <div v-if="isOpen" class="absolute right-0 mt-1 w-48 rounded-md
             bg-[var(--color-bg)] text-[var(--color-primary)]
             shadow-lg z-50 overflow-hidden">
            <button v-for="option in userOptions" :key="option.label" @click="selectOption(option)" class="flex w-full items-center px-3 py-2 text-sm
               hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-primary-hover)]
               transition-colors duration-150">
                {{ $t(option.label) }}
            </button>
        </div>
    </div>
</template>
