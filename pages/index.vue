<script setup lang="ts">
const { height } = useDisplay();
</script>

<template>
	<div>
		<v-card variant="text" :height="height - 100" :max-height="height - 100">
			<!-- <template #image> -->
			<v-img
				class="align-end"
				src="logo_black.svg"
				:height="height - 100"
				contain
				transition="scale-transition"
			>
				<v-list-item-title class="d-flex justify-end">
					<v-btn size="default">
						<template #default>
							<div class="d-flex flex-column">
								<strong> Software Engineer </strong>
								<span class="text-lowercase">info@aone-solution.com</span>
							</div>
						</template>
					</v-btn>
				</v-list-item-title>
			</v-img>
			<!-- </template> -->
		</v-card>
		<!-- <v-img src="logo_black.svg" cover> </v-img> -->
	</div>
</template>

<style scoped></style>
