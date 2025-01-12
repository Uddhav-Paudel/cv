<template>
	<v-container class="pa-2">
		<v-card class="mx-auto" flat="true">
			<v-card-title class="text-center font-weight-bold">
				Curriculum Vitae
			</v-card-title>
			<v-divider></v-divider>

			<v-card-text class="pa-0">
				<v-row>
					<v-col cols="12" class="d-flex align-center mb-4">
						<CvViewer></CvViewer>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.v-card-title {
	background-color: #fff;
	color: var(--up-custom-bg-color);
	padding: 16px;
}
</style>
