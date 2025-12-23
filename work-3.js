const app = Vue.createApp ({
    data() {
        return {
            count: 0
            
            
        }
    },
    methods: {
        myMethods () {
            this.count++;
        }
    }
});
app.mount('#app');