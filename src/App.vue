<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">
          <img
            width="100"
            src="https://occ-0-1001-999.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQg4OOsp8DJ6-nYYMwVijC0cmx2fk-gtmmZZ136WdOuVd0cmaJmRgEKRDsAkFYW_guLKFxQ7ltdUw--1OETg2VaOqeC1k5THCWLB.png?r=563"
            alt="logo"
          />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>
              <router-link class="nav-link text-white" to="/">
                Inicio
              </router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

