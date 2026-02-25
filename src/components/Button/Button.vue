<script setup lang="ts">
import { computed } from 'vue'

// ===== ICONOS =====
import IconLucideSearch from '~icons/lucide/search'
import IconLucideHome from '~icons/lucide/home'
import IconLucideCamera from '~icons/lucide/camera'
import IconLucideHelpCircle from '~icons/lucide/help-circle'

// ===== COMPONENT NAME =====
defineOptions({
    name: 'CButton',
})

// ===== PROPS =====
const props = withDefaults(
    defineProps<{
        variant?: 'primary' | 'secondary' | 'ghost'
        disabled?: boolean
        icon?: string
        label?: string
        hiddenIcon?: boolean
        isSearchBar?: boolean
    }>(),
    {
        variant: 'primary',
        disabled: false,
        hiddenIcon: false,
        isSearchBar: false,
    }
)

// ===== EMITS =====
const emit = defineEmits<{
    (e: 'click'): void
}>()

// ===== ICON MAP =====
const iconMap: Record<string, any> = {
    search: IconLucideSearch,
    home: IconLucideHome,
    camera: IconLucideCamera,
    'help-circle': IconLucideHelpCircle,
}

// ===== COMPUTED =====
const IconComponent = computed(() => {
    if (!props.icon) return null
    return iconMap[props.icon] ?? null
})

const buttonClasses = computed(() => [
    'btn',
    'flex items-center justify-center gap-2 transition-all duration-200',
    props.isSearchBar ? 'btn--search' : `btn--${props.variant}`,
])
</script>

<template>
    <button :disabled="disabled" :class="buttonClasses" @click="emit('click')">
        <!-- LABEL -->
        <span v-if="label" class="font-medium">
            {{ label }}
        </span>

        <!-- ICON -->
        <component :is="IconComponent" v-if="IconComponent && !hiddenIcon" class="w-5 h-5" />
    </button>
</template>