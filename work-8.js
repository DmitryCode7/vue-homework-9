const app = Vue.createApp ({
    data() {
        return {
            lastName: '',
            firstName: '',
            middleName: ''
        };
    },
    methods: {
        showText() {
            this.lastName = '';
            this.firstName = '';
            this.middleName = '';
        }
    }
});
app.mount('#app');