import { onMounted, onUnmounted, ref } from "vue";

export default function useWindow() {
    const Y = ref(window.innerHeight);
    const X = ref(window.innerWidth);

    // Definiere die size Funktion, die aufgerufen wird, wenn das Browserfenster seine Größe ändert
    function size() {
        Y.value = window.innerHeight;
        X.value = window.innerWidth;
    }

    // Füge einen Event Listener hinzu, wenn die Komponente eingebunden ist
    onMounted(() => {
        window.addEventListener('resize', size);
    });

    // Entferne den Event Listener, wenn die Komponente nicht mehr verwendet wird, um Memory Leaks zu verhindern
    onUnmounted(() => {
        window.removeEventListener('resize', size);
    });

    // Gebe die reaktiven Referenzen zurück, sodass sie in der Komponente, die diesen Hook verwendet, genutzt werden können
    return { Y, X };
}
