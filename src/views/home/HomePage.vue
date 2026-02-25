<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
    name: 'HomeView',
})

const nations = ref([
    { id: 1, name: 'México', group: 'A', status: 'Anfitrión', info: 'Tercera vez como sede mundialista. El Estadio Azteca será histórico.', flag: '🇲🇽', color: 'border-green-500' },
    { id: 2, name: 'Estados Unidos', group: 'D', status: 'Anfitrión', info: 'Sede de la gran final en el New York New Jersey Stadium.', flag: '🇺🇸', color: 'border-blue-600' },
    { id: 3, name: 'Canadá', group: 'B', status: 'Anfitrión', info: 'Primera vez que los Maple Leafs participan en dos mundiales seguidos.', flag: '🇨🇦', color: 'border-red-500' },
    { id: 4, name: 'Argentina', group: 'A', status: 'Clasificado', info: 'El campeón defensor busca revalidar su título tras ganar en 2022.', flag: '🇦🇷', color: 'border-sky-400' },
    { id: 5, name: 'Brasil', group: 'C', status: 'Clasificado', info: 'Única selección presente en todas las ediciones de la historia.', flag: '🇧🇷', color: 'border-yellow-400' },
    { id: 6, name: 'España', group: 'F', status: 'Clasificado', info: 'Clasificó como líder de grupo en las eliminatorias de la UEFA.', flag: '🇪🇸', color: 'border-red-600' },
    { id: 7, name: 'Inglaterra', group: 'E', status: 'Clasificado', info: 'Busca llevar el trofeo a casa tras décadas de espera.', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', color: 'border-slate-300' },
    { id: 8, name: 'Francia', group: 'B', status: 'Clasificado', info: 'Subcampeón de 2022 y uno de los grandes favoritos al título.', flag: '🇫🇷', color: 'border-blue-800' },
    { id: 9, name: 'Japón', group: 'H', status: 'Clasificado', info: 'Primer clasificado de Asia (AFC) en marzo de 2025.', flag: '🇯🇵', color: 'border-red-700' },
    { id: 10, name: 'Nueva Zelanda', group: 'G', status: 'Clasificado', info: 'Representante directo de la OFC tras ganar su torneo continental.', flag: '🇳🇿', color: 'border-black' },
    { id: 11, name: 'Egipto', group: 'D', status: 'Clasificado', info: 'Líder del Grupo A en África (CAF), con Salah a la cabeza.', flag: '🇪🇬', color: 'border-red-500' },
])
</script>

<template>
    <div class="min-h-screen bg-[#f8fafc] pb-32 overflow-x-hidden">

        <header class="relative h-[400px] flex items-center justify-center text-white overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black z-0"></div>
            <div class="absolute top-[-10%] left-[-5%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div class="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-red-500/20 rounded-full blur-3xl"></div>

            <div class="relative z-10 text-center px-4">
                <span
                    class="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-[0.3em] uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    Road to 2026
                </span>
                <h1 class="text-6xl md:text-8xl font-black italic tracking-tighter mb-4 drop-shadow-2xl">
                    WORLD <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">CUP</span>
                </h1>
                <p class="text-xl md:text-2xl font-light opacity-80 max-w-2xl mx-auto leading-relaxed">
                    La cita más grande de la historia en <span class="font-bold">Norteamérica</span>.
                </p>
            </div>
        </header>

        <main class="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
            <div
                class="bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-xl border border-white mb-12 flex flex-wrap gap-8 justify-around items-center">
                <div class="text-center">
                    <p class="text-3xl font-black text-blue-900">48</p>
                    <p class="text-xs uppercase tracking-widest font-bold text-gray-400">Equipos</p>
                </div>
                <div class="w-px h-10 bg-gray-200 hidden md:block"></div>
                <div class="text-center">
                    <p class="text-3xl font-black text-red-600">3</p>
                    <p class="text-xs uppercase tracking-widest font-bold text-gray-400">Países Sede</p>
                </div>
                <div class="w-px h-10 bg-gray-200 hidden md:block"></div>
                <div class="text-center">
                    <p class="text-3xl font-black text-green-600">104</p>
                    <p class="text-xs uppercase tracking-widest font-bold text-gray-400">Partidos</p>
                </div>
            </div>

            <h2 class="text-4xl font-black text-slate-900 mb-8 tracking-tight">
                Selecciones <span class="text-blue-600">Clasificadas</span>
            </h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                <div v-for="nation in nations" :key="nation.id"
                    class="group relative bg-white rounded-[2.5rem] p-1 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden border-2 border-transparent hover:border-gray-100">

                    <div
                        :class="['absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150', nation.color.replace('border-', 'bg-')]">
                    </div>

                    <div class="p-8 flex-grow relative z-10">
                        <div class="flex justify-between items-start mb-6">
                            <span
                                class="text-6xl transform group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-500">
                                {{ nation.flag }}
                            </span>
                            <span
                                :class="['px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border-2 shadow-sm', nation.color, nation.color.replace('border-', 'text-')]">
                                {{ nation.status }}
                            </span>
                        </div>

                        <h3 class="text-3xl font-black text-slate-800 mb-3 tracking-tighter">
                            {{ nation.name }}
                        </h3>
                        <p class="text-slate-500 leading-relaxed font-medium">
                            {{ nation.info }}
                        </p>
                    </div>

                    <div
                        class="px-8 py-6 bg-slate-50/50 flex justify-between items-center mt-auto border-t border-slate-100">
                        <div>
                            <p class="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Grupo Actual</p>
                            <p class="text-lg font-black text-slate-700">{{ nation.group }}</p>
                        </div>
                        <button
                            class="w-12 h-12 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap');

div {
    font-family: 'Inter', sans-serif;
}

/* Animación sutil de entrada */
.grid>div {
    animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>