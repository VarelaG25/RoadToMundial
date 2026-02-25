<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

type LangKey = 'es' | 'en'

const { locale } = useI18n()
const isOpen = ref(false)

const languages: Record<LangKey, { label: string; flag: string }> = {
    es: {
        label: 'ES',
        flag: '/img/mexFlag.webp',
    },
    en: {
        label: 'EN',
        flag: '/img/euFlag.webp',
    },
}

function changeLanguage(lang: LangKey) {
    locale.value = lang
    isOpen.value = false
}

const currentLang = computed(() => languages[locale.value as LangKey])

function onBlur() {
    isOpen.value = false
}
</script>

<template>
    <div class="relative inline-block text-left" tabindex="0" @focusout="onBlur">
        <!-- Botón -->
        <button type="button" @click="isOpen = !isOpen"
            class="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-gray-100">
            <img :src="currentLang.flag" alt="Current language" class="h-4 w-6 rounded-sm" />
            <span>{{ currentLang.label }}</span>
        </button>

        <!-- Dropdown -->
        <div v-if="isOpen" class="absolute right-0 mt-1 w-full rounded-md bg-gray-100 shadow-lg z-50">
            <button v-for="(lang, key) in languages" :key="key" @mousedown.prevent="changeLanguage(key as LangKey)"
                class="flex w-full items-center gap-2 px-3 py-2 text-sm text-primary hover:bg-gray-200"
                :class="{ 'bg-gray-300': locale === key }">
                <img :src="lang.flag" :alt="lang.label" class="h-4 w-6 rounded-sm" />
                <span>{{ lang.label }}</span>
            </button>
        </div>
    </div>
</template>
