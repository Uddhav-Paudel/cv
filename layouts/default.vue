<script setup lang="ts">
const drawer = ref<boolean>(false);
const { mobile } = useDisplay();
</script>

<template>
	<div>
		<v-app>
			<v-app-bar dense app>
				<v-app-bar-nav-icon @click="drawer = !drawer" v-if="mobile">
					<v-icon :icon="drawer ? 'mdi-window-close' : 'mdi-menu'"> </v-icon>
				</v-app-bar-nav-icon>
				<v-list-item to="/">
					<v-toolbar-title> Uddhav Paudel </v-toolbar-title>
				</v-list-item>
				<template #append>
					<v-container>
						<v-row v-if="!mobile">
							<v-col cols="auto">
								<v-list-item to="about"> About </v-list-item>
							</v-col>
							<v-col cols="auto">
								<v-list-item to="skill"> Skills </v-list-item>
							</v-col>
							<v-col cols="auto">
								<v-list-item to="CV"> Portfolio </v-list-item>
							</v-col>
							<v-col cols="auto">
								<v-list-item to="Contact"> Contact </v-list-item>
							</v-col>
						</v-row>
					</v-container>
				</template>
			</v-app-bar>

			<v-navigation-drawer v-model="drawer" v-if="mobile" app>
				<menu-items></menu-items>
			</v-navigation-drawer>

			<v-main>
				<v-container>
					<NuxtPage></NuxtPage>
				</v-container>
			</v-main>
		</v-app>
	</div>
</template>

<style scoped></style>
