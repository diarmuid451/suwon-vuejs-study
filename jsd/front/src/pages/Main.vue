<template>
    <div>
    <main>
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col" v-for = "product in products" :key = "product.id">
                        <div class="card shadow-sm">
                            <img :src="product.image" heigth = "180" />
                            <div class="card-body">
                                <p class="card-text">{{product.title}}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary" @click="like(product.id)">Like</button>
                                    </div>
                                    <small class="text-muted">{{product.likes}} likes</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </div>
</template>

<script>
import {ref, onMounted} from 'vue';
// import {Product} from '../interfaces/Product'

export default {
    name: "Main",
    setup() {
        const products = ref([]);
        onMounted(async () => {
            const response = await fetch('http://localhost:8001/api/products');
            products.value = await response.json();
        });

        const like = async (id) => {
            await fetch(`http://localhost:8001/api/product/${id}/like`, {
                method: 'POST',
                headers: {'Content-type':'application/json'}
            });

            products.value = products.value.map((p)=>{
                if(p.id === id){
                    p.likes++;
                }
                return p;
            });
        }
        return {
            products, like
        }
    }
}
</script>
