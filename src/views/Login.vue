<template>
    <div class="container">
        <h1>Login</h1>
        <form @submit.prevent="efetuarLogin">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" v-model="usuario.email">
            </div>
            <div class="form-group">
                <label for="senha">Senha</label>
                <input type="password" class="form-control" v-model="usuario.senha">
            </div>
            <p class="alert alert-danger" v-if="mensagemErro">{{ mensagemErro }}</p>
            <button class="btn btn-primary btn-block">Logar</button>
            <router-link :to="{ name: 'Register' }">Ainda nao possuo cadastro.</router-link>
        </form>
    </div>  
</template>

<script>
export default {
  methods: {
      efetuarLogin() {
        this.$store.dispatch('efetuarLogin', this.usuario)
            .then(() => {
                this.$router.push({name: 'gerentes'});
                this.mensagemErro = '';
            }) 
            .catch(err => {
                if (err.request.status === 401) {
                    console.log('okok')
                    this.mensagemErro = 'E-mail ou senha inválidos.'
                }
            });
      }
  },
  data () {
    return {
        mensagemErro: '',
        usuario: {
            email: '',
            senha: ''
        }
    }
  },
    
}
</script>