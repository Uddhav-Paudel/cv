<template>
	<v-container class="pa-2">
		<v-card class="mx-auto" color="" flat="true">
			<v-card-title class="text-center font-weight-bold">
				Professional Summary
			</v-card-title>
			<v-divider></v-divider>

			<v-card-text class="pa-0">
				<v-row>
					<v-col
						cols="12"
						md="4"
						class="text-center d-flex flex-column justify-center align-center"
					>
						<div class="d-flex mb-4">
							<v-icon size="48" color="primary">mdi-school</v-icon>
							<h3 class="font-weight-bold mt-2 ms-2">Education</h3>
						</div>
						<div class="d-flex flex-column text-start">
							<!-- <v-icon size="48" color="primary">mdi-school</v-icon>
							<h3 class="font-weight-bold mt-2">Education</h3> -->
							<p class="pa-2">
								<span
									><strong>MSc In Information Technology</strong> - London</span
								><br />
							</p>
							<p class="pa-2">
								<span
									><strong>Bachelor’s in Computer Engineering </strong>-
									Nepal</span
								><br />
							</p>
							<p class="pa-2">
								<span
									><strong>Proficiency Certificate Level In Science</strong> -
									Nepal</span
								><br />
							</p>
						</div>
					</v-col>

					<v-col cols="12" md="8" class="d-flex flex-column">
						<div class="d-flex">
							<v-icon size="24" color="primary" class="mr-2"
								>mdi-code-braces</v-icon
							>
							<div>
								<strong>SaaS PRODUCT development</strong><br />
								I have worked extensively in the TIA (Testing, Inspection, and
								Approval) business domains as an application developer. Led
								teams to build services and functionalities for following
								<strong> domains</strong>.
								<i>
									Manufacturing, Construction, Automotive, Oil & Gas, Food &
									Beverage.
								</i>
							</div>
						</div>

						<v-divider class="my-4"></v-divider>

						<div class="d-flex">
							<v-icon size="24" color="primary" class="mr-2"
								>mdi-chart-line</v-icon
							>
							<div>
								<strong>Master's Dissertation</strong><br />
								Completed a dissertation titled
								<i
									>"Popularity of Categories and Its Evaluation and Uses in the
									eCommerce Market"</i
								>
								using Python.
							</div>
						</div>

						<v-divider class="my-4"></v-divider>
						<div class="d-flex">
							<v-icon size="24" color="primary" class="mr-2">mdi-web</v-icon>
							<div>
								<strong>Current Focus & Interest</strong><br />
								Progressive Web Apps (PWA) using Vue 3 (Vuetify 3).
							</div>
						</div>
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
