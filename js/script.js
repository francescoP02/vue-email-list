const app = new Vue(
    {
        el: `#root`,
        data: {
            emailArray : [],

        },

        methods: {
            getEmail: function() {
                let fetchedEmail = ''
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    generatedEmail = response.data.response;
                    console.log(generatedEmail);
                    this.emailArray.push(generatedEmail);
                }); 
            },

            buildEmailArray: function(numberofEmail) {
                this.emailArray = [];
                for (let i = 0; i < numberofEmail; i++) {
                    this.getEmail();
                }
            },
        },
        mounted() {
            this.buildEmailArray(this.howManyToGenerate);
        },
    }
) 