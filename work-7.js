const app = Vue.createApp ({
    data() {
        return {
            inputText: '',
            text: ''
        };
    },
    methods: {
        showText() {
            this.text = this.inputText;
        }
    }
});
app.mount('#app');