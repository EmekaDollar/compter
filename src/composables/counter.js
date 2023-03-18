import { ref } from 'vue';

export default function Counter(initialValue = 0) {
    const count = ref(initialValue);

function increment() {
    count.value++;
}

function decrement() {
    count.value--;
}

function reset() {
    count.value = initialValue;
}

function setValue(inputValue) {
    count.value = inputValue;
}

return {
    count, 
    increment,
    decrement,
    reset,
    setValue,
};
}