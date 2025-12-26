const app = Vue.createApp ({
    data() {
        return {
            angle: 0
        };
    },
    methods: {
        rotate() {
            this.angle += 45; 
        }
    }
});
app.mount('#app');