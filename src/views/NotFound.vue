<template>
    <section class="flex flex-col justify-center items-center gap-2 mt-40">
        <h2 class=" text-6xl font-bold md:text-8xl">404</h2>
        <h3 class="font-semibold">Didn't find anything here</h3>
        <div class="flex items-center gap-2">
            <p>Go to</p> 
            <router-link to="/counter"><button class="lg:text-xs text-blue-400 tracking-wide 
            transition-all duration-200">Counter</button></router-link>
        </div>
    </section>
</template>

