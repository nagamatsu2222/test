Vue.createApp({
    data:function() {
      return {
        user: [],
        sort_key: "",
        sort_asc: true,
        sortOrder: 1,
      }
    },
    async created() {
      const response = await fetch('/system/cards.json');
      const users = await response.json();
      this.user = users;
    },
    methods: {
      sortBy(key) {
        this.sort_key = ""
        this.sort_key = key
        this.sort_key === key
      ? (this.sort_asc = !this.sort_asc)
      : (this.sort_asc = true)

      },
      addClass(key) {
        return {
          asc: this.sort_key === key && this.sort_asc,
          desc: this.sort_key === key && !this.sort_asc
        }
      }
    },
    computed: {
      sort_users() {
        let idList = [];
        idList = this.user;
            // idをソートする
            if (this.sortOrder === 1 && this.sort_key === "id") {
              idList.sort((a, b) => b.id - a.id);
              this.sortOrder = 2;
            }else if(this.sortOrder === 2 && this.sort_key === "id") {
              idList.sort((a, b) => a.id - b.id);
              this.sortOrder = 1;
            }
            // 名前をソートする
            if (this.sortOrder === 1 && this.sort_key === "name") {
              idList.sort((a, b) => {
                return a.name.localeCompare(b.name, 'ja');
              });
              this.sortOrder = 2;
            }else if(this.sortOrder === 2 && this.sort_key === "name") {
              idList.sort((a, b) => {
                return b.name.localeCompare(a.name, 'ja');
              });
              this.sortOrder = 1;
            }
            // 会社名をソートする
            if (this.sortOrder === 1 && this.sort_key === "company") {
              idList.sort((a, b) => {
                return a.company.localeCompare(b.company, 'ja');
              });
              this.sortOrder = 2;
            }else if(this.sortOrder === 2 && this.sort_key === "company") {
              idList.sort((a, b) => {
                return b.company.localeCompare(a.company, 'ja');
              });
              this.sortOrder = 1;
            }
            // 部署をソートする
            if (this.sortOrder === 1 && this.sort_key === "division") {
              idList.sort((a, b) => {
                return a.division.localeCompare(b.division, 'ja');
              });
              this.sortOrder = 2;
            }else if(this.sortOrder === 2 && this.sort_key === "division") {
              idList.sort((a, b) => {
                return b.division.localeCompare(a.division, 'ja');
              });
              this.sortOrder = 1;
            }
            // 役職をソートする
            if (this.sortOrder === 1 && this.sort_key === "title") {
              idList.sort((a, b) => {
                return a.title.localeCompare(b.title, 'ja');
              });
              this.sortOrder = 2;
            }else if(this.sortOrder === 2 && this.sort_key === "title") {
              idList.sort((a, b) => {
                return b.title.localeCompare(a.title, 'ja');
              });
              this.sortOrder = 1;
            }

        return idList;
      }
    }
  }).mount('#app')