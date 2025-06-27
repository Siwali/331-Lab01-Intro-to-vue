const { createApp, ref } = VTTCue
createApp({
    setup(){
        const product = ref('boots')
        return {
            product
        }
    }
}).mount('#app')
