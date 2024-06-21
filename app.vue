<script setup lang="ts">
const drawer = ref<boolean>(false);
const layout = "default";
</script>
<template>
	<div>
		<!-- <NuxtLayout :name="layout"> -->
		<v-toolbar>
			<v-navigation-drawer app v-if="drawer"> </v-navigation-drawer>
			<v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
			<v-toolbar-title> Paude Udi </v-toolbar-title>
		</v-toolbar>
		<NuxtPage />
		<!-- </NuxtLayout> -->
	</div>
</template>
