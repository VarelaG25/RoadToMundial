<script setup lang="ts">
import { computed, type Component } from 'vue'

import IconLucideHome from '~icons/lucide/home'
import IconLucideSearch from '~icons/lucide/search'
import IconLucideUser from '~icons/lucide/user'

defineOptions({
    name: 'CInput',
})

const props = withDefaults(
    defineProps<{
        modelValue: string
        type?: string
        placeholder?: string
        label?: string
        icon?: string
        disabled?: boolean
        isSearchBar?: boolean
    }>(),
    {
        type: 'text',
        placeholder: '',
        label: '',
        icon: 'home',
        disabled: false,
        isSearchBar: false,
    }
)

const iconMap: Record<string, Component> = {
    home: IconLucideHome,
    search: IconLucideSearch,
    user: IconLucideUser,
}

const IconComponent = computed(() => iconMap[props.icon])
</script>

<template>
    <div class="input" :class="{
        'input--search': isSearchBar,
        'input--disabled': disabled,
    }">
        <label v-if="label" class="input__label">
            {{ label }}
        </label>

        <div class="input__control">
            <component :is="IconComponent" v-if="IconComponent" class="input__icon" />

            <input :type="type" :placeholder="placeholder" :disabled="disabled" class="input__field" :value="modelValue"
                @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
        </div>
    </div>
</template>
