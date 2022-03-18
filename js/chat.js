Vue.createApp({
    data: () => ({
        inputValue: '',
        msgs: [],
    }),
    methods:{
        addNewMsg(){
            this.msgs.push(this.inputValue)
            this.inputValue = ''
        }
    }
}).mount("#chat")