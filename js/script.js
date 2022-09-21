const App = {
    data() {
        return {
            books: [
                {itemClose: 'item-close', name: 'Триумфальная арка', author: 'Эрих Мария Ремарк', date: '22.03.22', stars: '🧡 🧡 🧡 🧡 🧡', status: 'Моя книга', notes: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod aliquam eius assumenda, eos commodi reprehenderit corrupti molestiae neque saepe iure maiores quisquam blanditiis corporis accusamus, porro culpa doloribus cumque voluptatibus.'},
                {itemClose: 'item-close', name: 'Три товарища', author: 'Эрих Мария Ремарк', date: '22.03.22', stars: '🧡 🧡 🧡 🧡 🖤', status: 'Моя книга', notes: 'Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты. Города ведущими, даже, мир грустный от всех заглавных, ее власти на берегу живет что однажды текстов последний ipsum строчка диких это речью!'},
                {itemClose: 'item-close', name: 'Прощай оружие!', author: 'Эрнест Хемингуэй', date: '22.03.22', stars: '🧡 🧡 🧡 🖤 🖤', status: 'Моя книга', notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora, tempore dolorem possimus unde ex eos a accusamus ullam earum optio at exercitationem illo, rerum perferendis totam eius aspernatur neque?'},
                
            ],
            modalWindowStatus: 'close',
            newBook: ['', '', '', '', ''],
            dataMethod: '',
            clicked: 0,
            starsStr: '🖤 🖤 🖤 🖤 🖤',
            darkTheme: true,
            searchBooks: '',
        }
    },

    methods: {
        changeTheme() {
            if (this.darkTheme) 
                this.darkTheme = false
            else
                this.darkTheme = true
        },

        openclose(book) {
            if (book.itemClose === "item-open")
                book.itemClose = 'item-close'
            else
                book.itemClose = 'item-open'
        },

        closeAll(book) {
            for (i = 0; i < this.books.length; i++){
                this.books[i].itemClose = 'item-close';
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
    },

    computed: {
        filterBooks() {
            return this.books.filter(book => {
                return book.name.toUpperCase().indexOf(this.searchBooks.toUpperCase()) !== -1
                || book.author.toUpperCase().indexOf(this.searchBooks.toUpperCase()) !== -1
            })
        }
    }

}



Vue.createApp(App).mount('#app');