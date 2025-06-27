const { createApp, ref } = Vue
createApp({
    setup(){
        const product = ref('boots')
        const image = ref('./assets/images/socks_green.jpg')
        const productName = ref('CAMT')
        const productLink = ref('https://www.camt.cmu.ac.th')
        const inventory = ref(5)
        const inStock = ref(true)
        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'}
        ])
        const sizes = ref(['S','M','L'])
        const cart =ref(0)
        function addToCart() {
            cart.value +=1
        }
        function updateImage(variantImage){
            image.value = variantImage
        }
        function showInStock(instock){
            if (inventory>10) {
                instock.value = 'In Stock'
            }
            else if (inventory <= 10 && inventory > 0){
                instock.value = 'Almost out of stock'
            }
            else {
                instock.value = 'Out of Stock'
            }
        }
        return {
            product,image,productLink,productName,inStock,inventory,onSale,details,variants,sizes,cart
            ,addToCart,updateImage,showInStock
        }
    }
}).mount('#app')
