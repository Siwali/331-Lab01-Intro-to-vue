const { createApp, ref } = Vue
createApp({
    setup(){
        const product = ref('boots')
        const image = ref('./assets/images/socks_green.jpg')
        const productName = ref('CAMT')
        const productLink = ref('https://www.camt.cmu.ac.th')
        const inStock = ref(false)
        const inventory = ref(5)
        const onSale = ref(true)
        return {
            product,image,productLink,productName,inStock,inventory,onSale
        }
    }
}).mount('#app')
