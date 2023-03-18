<template>
    <main class="max-w-7xl px-8 mx-auto flex pb-6">
        <div class="flex flex-col md:flex-row rounded-md bg-white">
            <section class="bg-[#e5e5f1] my-2 mr-2 ml-2 rounded p-6 flex-1 mx-auto">
                <p class="bg-blue-500 w-4 h-4 rounded"></p>
                <h1 class="b text-3xl mt-20 font-bold text-left max-w-[35rem]">
                    Count your blessings; name them one by one. Count your blessings
                </h1>
                <div class="mt-20 flex justify-center items-center gap-4">
                    <p class="font-bold text-lg uppercase">Blessings:</p>
                    <p class="font-bold text-xl bg-blue-500 py-[0.1rem] px-6 rounded text-white">{{ count }}</p>
                </div>
                <p class="bg-[#3b3636] text-gray-200 p-4 text-left text-sm rounded mt-20 font-medium">
                    Count your blessings; Name them one by one Count your blessings; Name them one by one
                    Count your blessings; Name them one by one Count your blessings; Name them one by one
                    Count your blessings; Name them one by one Count your blessings; Name them one by one
                </p>
            </section>
            <section class="bg-white text-center flex-1 my-2 mx-2 p-4">
                <form class="flex justify-center items-center mt-40 gap-2">
                    <label class="text-[#aaa] uppercase text-md font-bold tracking-wider" for="count-input">Set value:</label>
                    <input class="px-1 w-37 py-1 box-border border-2 border-[#ddd]" id="count-input" type="number" v-model.number="inputValue"/>
                    <button class="bg-blue-500 rounded py-[0.35rem] px-6 text-white font-medium hover:opacity-75" @click.prevent="setValue(inputValue)">Set</button>
                </form>
                <div class="flex justify-center items-center gap-2 mt-32">
                    <button class="bg-blue-500 py-2 px-10 rounded text-white font-medium hover:opacity-75" @click="increment">Count</button>
                    <button class="bg-blue-500 py-2 px-8 rounded text-white font-medium hover:opacity-75" @click="decrement">Decrease</button>
                    <button class="bg-blue-500 py-2 px-10 rounded text-white font-medium hover:opacity-75" @click="reset">Reset</button>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import { ref } from 'vue';
import Counter  from '@/composables/counter';

export default {
    setup() {
        const {count, increment, decrement, reset, setValue} = Counter();

        const inputValue = ref(count.value);

        return {count, inputValue, increment, decrement, reset, setValue}
    }
}
</script>

<style>

</style>