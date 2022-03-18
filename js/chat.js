Vue.createApp({
    data: () => ({
        inputValue: '',
        msgs: ['Здравствуйте, чем могу Вам помочь?'],
    }),
    methods:{
        addNewMsg(){
            this.msgs.push(this.inputValue)
            this.inputValue = ''
        }
    }
}).mount("#chat")