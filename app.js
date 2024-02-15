const app = Vue.createApp({
    data() {
        return {
            firstName: 'Nouman',
            lastName: 'Altaf',
            image: 'https://www.portotheme.com/wordpress/porto/shortcodes/wp-content/uploads/sites/32/2016/06/team-1-640x640.jpg',
            email: 'nouman@gmail.com',
            gender: 'male',
            age: 20,
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api');

            const { results } = await res.json();

            this.firstName = results[0].name.first;
            this.lastName = results[0].name.last;
            this.image = results[0].picture.large;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.age = results[0].dob.age;
        }
    }
});

app.mount('#app');