<script setup lang="ts">
const drawer = ref<boolean>(false);
</script>

<template>
	<div>
		<v-app>
			<v-toolbar app>
				<v-navigation-drawer app v-if="drawer"> </v-navigation-drawer>
				<v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
				<v-toolbar-title> Paude Udi </v-toolbar-title>
			</v-toolbar>
			<v-main>
				<NuxtPage> </NuxtPage>
			</v-main>
		</v-app>
	</div>
</template>

<style scoped></style>
