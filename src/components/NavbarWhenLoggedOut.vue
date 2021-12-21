<template>
    <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Register' }">
                Registre-se
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{ name: 'Login' }" class="nav-link">
                Login
            </router-link>
        </li>
    </ul>
</template>