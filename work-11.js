const app = Vue.createApp ({
    data() {
        return {
            lastName: '',
            firstName: ''
        };
    },
    computed: {
        fullName () {
            return this.lastName + ' ' + this.firstName;
        }
    }
    
});
app.mount('#app');