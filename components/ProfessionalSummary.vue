<template>
	<v-container class="pa-2">
		<!-- About Me Section -->
		<v-card :flat="true">
			<v-card-title class="text-center font-weight-bold header-title">
				Professional Summary
			</v-card-title>
		</v-card>
		<v-divider></v-divider>
		<v-row class="">
			<v-col cols="12">
				<v-card class="pa-0">
					<!-- <v-card-title class="headline">About Me</v-card-title> -->
					<v-card-text class="pa-2">
						I am a versatile professional with a passion for solving complex
						challenges and delivering innovative solutions. With experience
						across a variety of domains, I thrive in collaborative environments
						where creative thinking and teamwork drive success. My goal is to
						continuously learn, adapt, and contribute to meaningful projects
						that create value for both businesses and users.
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>

		<!-- My Approach Section -->
		<v-row class="">
			<v-col cols="12" sm="6">
				<v-card class="pa-0" variant="tonal">
					<v-sheet color="blue-lighten-5">
						<v-card-title class="headline pa-2">My Approach</v-card-title>
					</v-sheet>
					<v-card-text class="pa-2">
						My approach revolves around delivering high-quality solutions with a
						focus on collaboration, creativity, and continuous learning. I
						prioritize clear communication and adaptability to ensure efficient
						problem-solving and successful project execution, meeting client
						needs effectively.
					</v-card-text>
				</v-card>
			</v-col>
			<v-col cols="12" sm="6">
				<v-card class="pa-0" variant="tonal">
					<v-sheet color="blue-lighten-5">
						<v-card-title class="headline pa-2">What I Offer</v-card-title>
					</v-sheet>

					<v-card-text class="pa-2">
						I offer a wide range of skills in web development, specializing in
						building scalable applications, optimizing user interfaces, and
						creating engaging user experiences. My goal is to deliver innovative
						solutions that enhance functionality, usability, and overall
						performance.
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>

		<!-- Core Strengths Section -->
		<v-row class="">
			<v-col cols="12">
				<v-card class="pa-0" :flat="true" :rounded="false">
					<v-card-title class="headline ps-0">Core Strengths</v-card-title>

					<v-card-text class="pa-0">
						<v-list class="bg-blue-lighten-5">
							<v-list-item>
								<v-list-item-content>
									<v-list-item-title
										><strong>Innovation:</strong> Consistently generating
										creative solutions to meet unique
										challenges.</v-list-item-title
									>
								</v-list-item-content>
							</v-list-item>

							<v-list-item>
								<v-list-item-content>
									<v-list-item-title
										><strong>Versatility:</strong> Proficiency across multiple
										domains—technical, design, strategy, and
										more.</v-list-item-title
									>
								</v-list-item-content>
							</v-list-item>

							<v-list-item>
								<v-list-item-content>
									<v-list-item-title
										><strong>Collaboration:</strong> Leading or contributing to
										teams that drive successful project
										outcomes.</v-list-item-title
									>
								</v-list-item-content>
							</v-list-item>

							<v-list-item>
								<v-list-item-content>
									<v-list-item-title
										><strong>Growth Mindset:</strong> Always seeking new ways to
										improve processes, skills, and products.</v-list-item-title
									>
								</v-list-item-content>
							</v-list-item>
						</v-list>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>

		<!-- Creative Products Section -->
		<v-row class="">
			<v-col cols="12">
				<v-card class="pa-0" :rounded="false">
					<v-card-title class="headline ps-0">My Creation</v-card-title>
					<v-card-text class="pa-0">
						<v-list class="bg-blue-lighten-5">
							<!-- eCommerce PWA Platform -->
							<v-list-item>
								<v-list-item-content>
									<v-list-item-title class="font-weight-bold">
										eCommerce PWA Platform
									</v-list-item-title>
									<v-list-item-subtitle>
										Designed and developed a Progressive Web Application (PWA)
										for eCommerce that delivers a seamless shopping experience.
										Features include offline browsing, push notifications for
										personalized updates, and enhanced performance for mobile
										users. The platform is fully responsive, ensuring
										accessibility across devices.
									</v-list-item-subtitle>
								</v-list-item-content>
								<v-list-item-action>
									<v-btn
										color="primary"
										variant="text"
										href="https://stage.aone-solution.com"
										target="_blank"
									>
										Visit
									</v-btn>
								</v-list-item-action>
							</v-list-item>

							<v-divider></v-divider>

							<!-- Text-to-Audio, Image, and Video Tool -->
							<v-list-item>
								<v-list-item-content>
									<v-list-item-title class="font-weight-bold">
										Text-to-Audio, Image, and Video Tool
									</v-list-item-title>
									<v-list-item-subtitle>
										Created a comprehensive tool to transform written content
										into engaging multimedia formats. Users can convert text
										into natural-sounding audio, generate relevant images, and
										produce YouTube-ready videos. This tool empowers creators to
										enhance their content's accessibility and reach.
									</v-list-item-subtitle>
								</v-list-item-content>
								<v-list-item-action>
									<v-btn
										color="primary"
										variant="text"
										href="https://www.youtube.com/@eonsoulnspirit"
										target="_blank"
									>
										Watch
									</v-btn>
								</v-list-item-action>
							</v-list-item>

							<v-divider></v-divider>

							<!-- Weather Application -->
							<v-list-item>
								<v-list-item-content>
									<v-list-item-title class="font-weight-bold">
										Weather Application (Open-Meteo API)
									</v-list-item-title>
									<v-list-item-subtitle>
										Developed a weather application that provides real-time
										weather forecasts, including temperature, humidity, and wind
										data. The app integrates with the Open-Meteo API to deliver
										accurate, localized forecasts and features a sleek,
										user-friendly interface for quick navigation.
									</v-list-item-subtitle>
								</v-list-item-content>
								<v-list-item-action>
									<v-btn
										color="primary"
										variant="text"
										href="https://weather.aone-solution.com"
										target="_blank"
									>
										Visit
									</v-btn>
								</v-list-item-action>
							</v-list-item>

							<v-divider></v-divider>

							<!-- AVIF to PNG Converter -->
							<v-list-item>
								<v-list-item-content>
									<v-list-item-title class="font-weight-bold">
										AVIF to PNG Converter
									</v-list-item-title>
									<v-list-item-subtitle>
										Developed a Python-based utility to convert AVIF images to
										PNG format, enhancing compatibility across various platforms
										and applications. This tool is optimized for performance,
										handling bulk image conversion efficiently while preserving
										image quality.
									</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>

							<v-divider></v-divider>

							<!-- Excel to Word Converter -->
							<v-list-item>
								<v-list-item-content>
									<v-list-item-title class="font-weight-bold">
										Excel to Word Converter
									</v-list-item-title>
									<v-list-item-subtitle>
										Automated the process of converting structured data from
										Excel spreadsheets into well-formatted Word documents
										(DOCX). This tool streamlines reporting workflows, ensuring
										consistent formatting and saving significant time for users
										handling large datasets.
									</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>

							<v-divider></v-divider>

							<!-- Document Merger -->
							<v-list-item>
								<v-list-item-content>
									<v-list-item-title class="font-weight-bold">
										Document Merger
									</v-list-item-title>
									<v-list-item-subtitle>
										Developed a Python script to merge multiple Word documents
										into a single cohesive file. The tool is ideal for compiling
										reports, consolidating content, and maintaining document
										consistency across projects.
									</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
						</v-list>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: "ProfessionalSummary",
};
</script>

<style scoped lang="scss">
.v-card-title.header-title {
	background-color: #fff;
	color: var(--up-custom-bg-color);
	padding: 16px;
}
.v-list-item-subtitle {
	white-space: normal;
	-webkit-line-clamp: unset !important;
}
</style>
