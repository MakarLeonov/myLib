const App = {
    data() {
        return {
            itemClose: ['item-close', 'item-close', 'item-close',],
            name: ['Триумфальная арка', 'Прощай оружие', 'Заводной апельсин', ],
            author: ['Эрих Мария Ремарк', 'Эрнест Хемингуэй', 'Энтони Бёрджесс', ],
            date: ['22.03.22', '22.03.22', '22.03.22',],
            stars: ['🧡 🧡 🧡 🧡 🧡', '🧡 🧡 🧡 🧡 🖤', '🧡 🧡 🧡 🖤 🖤', ],
            notes: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, illum.', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, illum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, illum.', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, magni sit dolore, in reiciendis veritatis nihil iste mollitia, debitis illo porro? Accusantium esse perspiciatis perferendis. Culpa ex facilis qui nostrum?',],
            status: ['Моя книга', 'Сейчас читаю', 'Одолжил другу', ],
            modalWindowStatus: 'close',
            newBook: ['', '', '', '', ''],
            dataMethod: '',
            clicked: 0,
            starsStr: '🖤 🖤 🖤 🖤 🖤',
            darkTheme: false,


        }
    },
    methods: {
        changeTheme() {
            if (this.darkTheme) 
                this.darkTheme = false
            else
                this.darkTheme = true
        },

        openclose(key) {
            if (this.itemClose[key-1] === "item-open")
                this.itemClose[key-1] = 'item-close'
            else
                this.itemClose[key-1] = 'item-open'
        },

        closeAll(key) {
            for (i = 0; i < this.itemClose.length; i++){
                this.itemClose[i] = 'item-close';
            }
        },

        openModalWindow() {
            this.modalWindowStatus = 'open'
        },

        closeModalWindow() {
            this.clicked = 0
            this.modalWindowStatus = 'close'
        },

        addNewBook() {
            this.name.push(this.newBook[0])
            this.author.push(this.newBook[1])
            this.date.push(this.dataMethod[8] + this.dataMethod[9] + '.' + this.dataMethod[5] + this.dataMethod[6] + "." + this.dataMethod[2] + this.dataMethod[3])
            this.stars.push(this.starsStr)                
            this.notes.push(this.newBook[4])
            this.itemClose.push('item-close')
            this.newBook = ['']
            this.clicked = 0
            this.modalWindowStatus = 'close'

            
        },

        starsMethod(index) {
            this.clicked = index;
            this.starsStr = ''

            for (i = 0; i < 5; i++){
                if(i < index)
                    this.starsStr += "🧡 ";
                else
                    this.starsStr += "🖤 ";
            }
        },


        
    }
}



Vue.createApp(App).mount('#app');