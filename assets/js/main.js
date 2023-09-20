/*
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */

const { createApp } = Vue

createApp({
  data() {
    return {

      listEmail: []
      
    }

  },
  methods: {

  },
  mounted() {

    for (let i = 0; i < 10; i++) {

      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {

          this.listEmail.push(response.data.response)

        })

    }


    console.log(this.listEmail);
  }

}).mount('#app')

