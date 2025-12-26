const app = Vue.createApp ({
    data() {
        return {
             count: 0,
            intervalId: null
        };
    },
    methods: {
        startTimer() {
            if (this.intervalId == null) {
                this.intervalId = setInterval(() => {
                    this.count++;
                }, 1000);
            }
        },
        stopTimer() {
            clearInterval(this.intervalId);
            this.intervalId = null;
        },
        resetTimer() {
            this.stopTimer();
            this.count = 0;
        }
    }
});
app.mount('#app');