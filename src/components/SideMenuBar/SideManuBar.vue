<script setup lang="ts">
import IconLucideHome from '~icons/lucide/home'

</script>

<template>
    <aside class="w-64 h-full bg-background text-primary border-r border-gray-200 p-4 flex flex-col">
        <nav class="flex flex-col gap-4">
            <a href="#" class="side-menu-bar__link flex items-center gap-2">
                <IconLucideHome />
                {{ $t('SIDEMENUBAR.HOME') }}
            </a>
            <a href="#" class="side-menu-bar__link flex items-center gap-2">
                {{ $t('SIDEMENUBAR.CATEGORIES') }}
            </a>
            <a href="#" class="side-menu-bar__link flex items-center gap-2">
                {{ $t('SIDEMENUBAR.OFFERS') }}
            </a>
            <a href="#" class="side-menu-bar__link flex items-center gap-2">
                {{ $t('SIDEMENUBAR.CONTACT') }}
            </a>
        </nav>
    </aside>
</template>