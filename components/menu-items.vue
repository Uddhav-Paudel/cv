<script setup lang="ts"></script>

<template>
	<div>
		<v-list>
			<v-list-item to="about" prepend-icon="mdi-information-variant">
				<v-list-item-title> About </v-list-item-title>
			</v-list-item>
			<v-list-item to="skill">
				<template #prepend>
					<v-icon icon="mdi-human-capacity-increase"> </v-icon>
				</template>
				<v-list-item-title> Skills </v-list-item-title>
			</v-list-item>
		</v-list>
	</div>
</template>

<style scoped></style>
