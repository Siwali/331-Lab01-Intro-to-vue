const { createApp, ref } = Vue
createApp({
    setup(){
        const product = ref('boots')
        const image = ref('./assets/images/socks_green.jpg')
        const productName = ref('CAMT')
        const productLink = ref('https://www.camt.cmu.ac.th')
        return {
            product,image,productLink,productName
        }
    }
}).mount('#app')
