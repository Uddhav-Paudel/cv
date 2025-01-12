<template>
	<v-container fluid>
		<v-row align="center" justify="center" class="py-6">
			<!-- Iterate over all the projects -->
			<v-col
				v-for="(project, index) in projects"
				:key="index"
				cols="12"
				sm="6"
				md="4"
				class="d-flex justify-center"
			>
				<v-card elevation="3" class="ma-4" max-width="400">
					<!-- Project Title -->
					<v-card-title>{{ project.title }}</v-card-title>

					<!-- Project Subtitle -->
					<v-card-subtitle>{{ project.subtitle }}</v-card-subtitle>

					<!-- Project Description -->
					<v-card-text>{{ project.description }}</v-card-text>

					<!-- Card Actions -->
					<v-card-actions>
						<v-spacer></v-spacer>
						<!-- Visit Button -->
						<v-btn v-if="!project.link" color="white" variant="outlined">
							Contact For Preview
						</v-btn>
						<div v-else>
							<v-btn
								:href="project.link"
								target="_blank"
								color="white"
								variant="outlined"
							>
								Visit
							</v-btn>
							<!-- Preview Button -->
							<v-btn
								color="secondary"
								variant="outlined"
								@click="openPreview(project.link)"
							>
								Preview
							</v-btn>
						</div>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>

		<!-- Dialog for Preview -->
		<v-dialog
			v-model="isDialogOpen"
			fullscreen
			hide-overlay
			persistent
			transition="dialog-bottom-transition"
		>
			<v-card class="d-flex flex-column align-stretch fill-height">
				<!-- Dialog Header -->
				<v-toolbar flat dense>
					<v-spacer></v-spacer>
					<v-btn icon @click="closePreview">
						<v-icon color="white">mdi-close</v-icon>
					</v-btn>
				</v-toolbar>

				<!-- Dialog Content (Iframe) -->
				<v-card-text class="p-0 fill-height">
					<iframe
						v-if="previewLink"
						:src="previewLink"
						frameborder="0"
						style="width: 100%; height: 100%; border: none"
						allow="autoplay; encrypted-media"
						allowfullscreen
					></iframe>
				</v-card-text>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			isDialogOpen: false, // Track dialog state
			previewLink: null, // URL of the project being previewed
			projects: [
				{
					title: "Weather Application",
					subtitle: "Accurate, Localized, Up-to-date Forecasts",
					description:
						"A weather app that provides accurate, localized forecasts using the Open-Meteo API.",
					link: "https://weather.aone-solution.com",
				},
				{
					title: "eCommerce PWA Platform",
					subtitle: "Fast, Offline, & Engaging Shopping",
					description:
						"A fully responsive eCommerce PWA with offline functionality and push notifications.",
					link: "https://stage.aone-solution.com",
				},
				{
					title: "Multimedia conversion tool.",
					subtitle: "Text & Image to Video/Audio",
					description:
						"Tool for converting text into audio, images, and YouTube-ready videos.",
					link: "https://youtube.com/embed/DDprlup8Z9U",
				},
				{
					title: "AVIF to PNG Converter",
					subtitle: "Convert AVIF images to PNG.",
					description:
						"A Python tool to convert AVIF images to PNG format for improved compatibility.",
					link: "",
				},
				{
					title: "Excel to Word Converter",
					subtitle: "Automated conversion tool.",
					description:
						"Tool for converting Excel data into formatted Word documents automatically.",
					link: "",
				},
				{
					title: "Document Merger",
					subtitle: "Merge Word documents.",
					description:
						"A Python script for merging multiple Word documents into one.",
					link: "",
				},
			],
		};
	},
	methods: {
		openPreview(link) {
			this.previewLink = link;
			this.isDialogOpen = true;
		},
		closePreview() {
			this.previewLink = null;
			this.isDialogOpen = false;
		},
	},
};
</script>

<style scoped>
/* Let iframe fill available space */
.fill-height {
	height: 100vh;
}
</style>
