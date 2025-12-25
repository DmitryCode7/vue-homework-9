const app = Vue.createApp ({
    data() {
        return {
            newText:  "",
            list: [
                {
                    text: "Читать"
                },
                {
                    text: "Разминка"
                },
                {
                    text: "Обед"
                }
            ]
        };
    }
});
app.mount('#app');