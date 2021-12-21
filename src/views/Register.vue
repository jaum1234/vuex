<template>
    <div class="container">
        <h1>Registro</h1>
        <form @submit.prevent="enviarFormulario">
            <div class="form-group">
                <label for="nome">Nome</label>
                <input type="text" class="form-control" v-model="usuario.nome">
            </div>
            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="text" class="form-control" v-model="usuario.email">
            </div>
            <div class="form-group">
                <label for="senha">Senha</label>
                <input type="password" class="form-control" v-model="usuario.senha">
            </div>
            <button class="btn btn-primary">Salvar</button>
        </form>
        <router-link :to="{ name: 'Login' }">Já possuo cadastro.</router-link>
    </div>
</template>

<script>
export default {
  methods: {
      enviarFormulario() {
          this.$http.post('auth/register', this.usuario)
            .then((result) => {
                console.log(result);
                this.$router.push({ name: 'Login' });
            }).catch((err) => {
                console.log(err)
            });
      }
  },
  data () {
    return {
        usuario: {
            nome: '',
            senha: '', 
            email: ''
        }
    }
  },
    
}
</script>
