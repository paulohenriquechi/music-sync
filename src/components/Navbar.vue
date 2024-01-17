<template>
  <nav class="navbar navbar-expand-sm">
    <div class="container-fluid justify-content-start">
      <RouterLink class="navbar-brand" to="/">MusicSync</RouterLink>
      <div class="d-flex px-4 px-lg-5">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-item nav-link" to="/">Home</RouterLink>
          </li>
        </ul>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-item nav-link" to="/artists">Artists</RouterLink>
          </li>
        </ul>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-item nav-link" to="/albums">Albums</RouterLink>
          </li>
        </ul>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-item nav-link" to="/songs">Songs</RouterLink>            
          </li>
        </ul>
      </div>
    </div>

  </nav>


  <!-- <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">MusicSync</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-item nav-link" to="/">Home</RouterLink>
          </li>
        </ul>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-item nav-link" to="/artists">Artists</RouterLink>
          </li>
        </ul>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-item nav-link" to="/albums">Albums</RouterLink>
          </li>
        </ul>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-item nav-link" to="/songs">Songs</RouterLink>            
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
</template>

<script lang="ts">
export default {
  name: "Navbar",
};
</script>
