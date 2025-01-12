<template>
	<v-container class="pa-2">
		<v-card class="mx-auto" flat="true">
			<v-card-title class="text-center font-weight-bold">
				Portfolio
			</v-card-title>
			<v-divider></v-divider>

			<v-card-text>
				<v-row>
					<!-- Skill 1 -->
					<v-col cols="12" md="6" class="d-flex align-center mb-4">
						<v-icon size="32" color="primary">mdi-laptop</v-icon>
						<div class="ml-3">
							<h3 class="font-weight-bold">Vue 3</h3>
							<p>
								Proficient in Vue 3's Composition API, reactive data, and
								component architecture for dynamic web apps.
							</p>
						</div>
					</v-col>

					<!-- Skill 2 -->
					<v-col cols="12" md="6" class="d-flex align-center mb-4">
						<v-icon size="32" color="primary">mdi-palette</v-icon>
						<div class="ml-3">
							<h3 class="font-weight-bold">Vuetify</h3>
							<p>
								Expert in crafting stunning, responsive UIs using Vuetify’s rich
								component library and grid system.
							</p>
						</div>
					</v-col>

					<!-- Skill 3 -->
					<v-col cols="12" md="6" class="d-flex align-center mb-4">
						<v-icon size="32" color="primary">mdi-router</v-icon>
						<div class="ml-3">
							<h3 class="font-weight-bold">Vue Router & State Management</h3>
							<p>
								Skilled in routing with <strong>Vue Router</strong> and managing
								state efficiently with <strong>Vuex</strong> and
								<strong>Pinia</strong>.
							</p>
						</div>
					</v-col>

					<!-- Skill 4 -->
					<v-col cols="12" md="6" class="d-flex align-center mb-4">
						<v-icon size="32" color="primary">mdi-language-html5</v-icon>
						<div class="ml-3">
							<h3 class="font-weight-bold">HTML5, CSS3 & JavaScript (ES6+)</h3>
							<p>
								Strong core in modern web standards, ensuring fast and
								accessible interfaces.
							</p>
						</div>
					</v-col>

					<!-- Skill 5 -->
					<v-col cols="12" md="6" class="d-flex align-center mb-4">
						<v-icon size="32" color="primary">mdi-cellphone</v-icon>
						<div class="ml-3">
							<h3 class="font-weight-bold">Responsive Design</h3>
							<p>
								Building pixel-perfect, mobile-first designs using Vuetify's
								flexible layout tools.
							</p>
						</div>
					</v-col>

					<!-- Skill 6 -->
					<v-col cols="12" md="6" class="d-flex align-center mb-4">
						<v-icon size="32" color="primary">mdi-format-color-fill</v-icon>
						<div class="ml-3">
							<h3 class="font-weight-bold">Custom Themes</h3>
							<p>
								Experienced in creating tailored themes and implementing dark
								mode with Vuetify.
							</p>
						</div>
					</v-col>

					<!-- Skill 7 -->
					<v-col cols="12" md="6" class="d-flex align-center mb-4">
						<v-icon size="32" color="primary">mdi-puzzle</v-icon>
						<div class="ml-3">
							<h3 class="font-weight-bold">Component Reusability</h3>
							<p>
								Developing modular, reusable components for scalable,
								maintainable code.
							</p>
						</div>
					</v-col>

					<!-- Skill 8 -->
					<v-col cols="12" md="6" class="d-flex align-center mb-4">
						<v-icon size="32" color="primary">mdi-progress-download</v-icon>
						<div class="ml-3">
							<h3 class="font-weight-bold">PWA Development</h3>
							<p>
								Creating fast, offline-ready Progressive Web Apps with Vue 3.
							</p>
						</div>
					</v-col>

					<!-- Skill 9 -->
					<v-col cols="12" md="6" class="d-flex align-center mb-4">
						<v-icon size="32" color="primary">mdi-api</v-icon>
						<div class="ml-3">
							<h3 class="font-weight-bold">API Integration</h3>
							<p>
								Seamless integration of RESTful services using
								<strong>Axios</strong> and <strong>Fetch API</strong>.
							</p>
						</div>
					</v-col>

					<!-- Skill 10 -->
					<v-col cols="12" md="6" class="d-flex align-center mb-4">
						<v-icon size="32" color="primary">mdi-tools</v-icon>
						<div class="ml-3">
							<h3 class="font-weight-bold">Vue CLI & Vite</h3>
							<p>
								Efficient project setups and builds using
								<strong>Vue CLI</strong> and <strong>Vite</strong> for optimized
								performance.
							</p>
						</div>
					</v-col>

					<!-- Skill 11 -->
					<v-col cols="12" md="6" class="d-flex align-center mb-4">
						<v-icon size="32" color="primary">mdi-palette-outline</v-icon>
						<div class="ml-3">
							<h3 class="font-weight-bold">Modern UI/UX</h3>
							<p>
								Delivering clean, intuitive designs following the latest UI/UX
								trends and material design principles.
							</p>
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
