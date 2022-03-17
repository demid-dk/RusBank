Vue.createApp({
    data: () => ({
        inputValue: '',
        newValue: this.inputValue + ' ' + this.currency,
        currency: 'рублей'
    }),
    methods: {
    }
}).mount("#app")