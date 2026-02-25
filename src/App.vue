<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar/NavBar.vue'
import SideMenuBar from '@/components/SideMenuBar/SideManuBar.vue'
</script>

<template>
  <div class="h-dvh flex flex-col">
    <!-- TOP NAV -->

    <!-- BODY -->
    <div class="flex flex-1 overflow-hidden">
      <!-- SIDE MENU -->
      <!-- <SideMenuBar /> -->

      <!-- MAIN CONTENT -->
      <main class="flex-1 overflow-auto p-4 bg-background">
        <RouterView />
      </main>
    </div>
    <NavBar />
  </div>
</template>
