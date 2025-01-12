<template>
	<v-container class="pa-2">
		<v-card v-if="!isSmallScreen" class="mx-auto" flat="true">
			<v-card-title class="text-center font-weight-bold mb-4">
				Skills Matrix
			</v-card-title>
			<v-divider></v-divider>
			<v-card-text class="pa-0">
				<div
					v-for="(section, sectionIndex) in skillSections"
					:key="sectionIndex"
					class="bg-blue-lighten-5 pa-2 mb-4"
				>
					<h3
						class="mb-0 text-center text-decoration-underline text-capitalize"
					>
						{{ section.title }}
					</h3>
					<div class="">
						<template
							v-for="(skill, skillIndex) in section.skills"
							:key="skillIndex"
						>
							<v-row
								dense
								class="align-center d-flex"
								v-if="!isEmpty(skill.proficiency)"
							>
								<v-col class="text-capitalize" cols="12" md="3">
									<strong>{{ skill.name }}</strong>
								</v-col>
								<v-col cols="12" md="9" class="d-flex">
									<v-row>
										<v-col
											cols="3"
											v-for="(level, levelIndex) in proficiencyLevels"
											:key="levelIndex"
										>
											<v-checkbox
												v-model="skill.proficiency[level]"
												:label="level"
												hide-details
												:color="getColorForProficiency(skill, level)"
												readonly
											/>
										</v-col>
									</v-row>
								</v-col>
							</v-row>
						</template>
					</div>
				</div>
			</v-card-text>
		</v-card>

		<v-expansion-panels v-else>
			<v-card-title class="text-center font-weight-bold w-100">
				Skills Matrix
			</v-card-title>
			<v-divider></v-divider>
			<div
				v-for="(section, sectionIndex) in skillSections"
				:key="sectionIndex"
				class="bg-blue-lighten-5 w-100 pa-2 mb-2"
			>
				<h3 class="mb-2 text-capitalize text-center text-decoration-underline">
					{{ section.title }}
				</h3>
				<template
					v-for="(skill, skillIndex) in section.skills"
					:key="skillIndex"
				>
					<v-expansion-panel
						v-if="!isEmpty(skill.proficiency)"
						:rounded="false"
						tile
					>
						<v-expansion-panel-title>
							{{ skill.name }}
						</v-expansion-panel-title>
						<v-expansion-panel-text>
							<v-row>
								<v-col cols="12">
									<v-checkbox
										v-for="(level, levelIndex) in proficiencyLevels"
										:key="levelIndex"
										v-model="skill.proficiency[level]"
										:label="level"
										hide-details
										readonly
										:color="getColorForProficiency(skill, level)"
										class="mb-2"
									/>
								</v-col>
							</v-row>
						</v-expansion-panel-text>
					</v-expansion-panel>
				</template>
			</div>
		</v-expansion-panels>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			isSmallScreen: false,
			proficiencyLevels: ["Basic", "Demonstrating", "Proficient", "Expert"],
			skillSections: [
				{
					title: "Development Practices",
					skills: [
						{ name: "Agile Development", proficiency: { Proficient: true } },
						{ name: "Scrum", proficiency: { Proficient: true } },
						{ name: "Kanban", proficiency: { Proficient: true } },
						{ name: "SAFe (Scaled Agile Framework)", proficiency: {} },
						{ name: "Extreme Programming (XP)", proficiency: {} },
						{ name: "Lean Development", proficiency: {} },
					],
				},
				{
					title: "Version Control and Code Management",
					skills: [
						{ name: "Git", proficiency: { Proficient: true } },
						{ name: "SVN (Subversion)", proficiency: { Proficient: true } },
						{ name: "Mercurial", proficiency: {} },
						{ name: "Perforce", proficiency: {} },
						{ name: "TFS/Azure DevOps", proficiency: {} },
					],
				},
				{
					title: "Testing and Debugging",
					skills: [
						{ name: "JUnit", proficiency: { Demonstrating: true } },
						{ name: "Mocha", proficiency: { Demonstrating: true } },
						{ name: "Pytest", proficiency: { Demonstrating: true } },
						{ name: "NUnit", proficiency: {} },
						{ name: "RSpec", proficiency: {} },
						{ name: "Chrome DevTools", proficiency: {} },
						{ name: "GDB", proficiency: {} },
						{ name: "Postman", proficiency: { Demonstrating: true } },
						{ name: "IntelliJ Debugger", proficiency: {} },
						{ name: "Xcode Debugger", proficiency: { Basic: true } },
						{ name: "Cucumber", proficiency: {} },
						{ name: "Behave", proficiency: {} },
						{ name: "SpecFlow", proficiency: {} },
						{ name: "JBehave", proficiency: {} },
						{ name: "Test Automation", proficiency: { Demonstrating: true } },
						{ name: "Unit Testing", proficiency: { Demonstrating: true } },
						{
							name: "Integration Testing",
							proficiency: { Demonstrating: true },
						},
					],
				},
				{
					title: "Design Principles and Patterns",
					skills: [
						{
							name: "SOLID Principles",
							proficiency: { Proficient: true },
						},
						{
							name: "DRY (Don’t Repeat Yourself)",
							proficiency: { Proficient: true },
						},
						{
							name: "KISS (Keep It Simple, Stupid)",
							proficiency: { Proficient: true },
						},
						{
							name: "YAGNI (You Aren’t Gonna Need It)",
							proficiency: { Proficient: true },
						},
						{
							name: "MVC (Model-View-Controller)",
							proficiency: { Proficient: true },
						},
						{
							name: "MVVM (Model-View-ViewModel)",
							proficiency: { Proficient: true },
						},
						{ name: "Factory Pattern", proficiency: {} },
						{
							name: "Singleton Pattern",
							proficiency: { Proficient: true },
						},
						{ name: "Observer Pattern", proficiency: {} },
					],
				},
				{
					title: "Frontend Development",
					skills: [
						{ name: "HTML5", proficiency: { Expert: true } },
						{ name: "CSS3", proficiency: { Expert: true } },
						{ name: "JavaScript", proficiency: { Expert: true } },
						{ name: "TypeScript", proficiency: { Demonstrating: true } },
						{ name: "Vue", proficiency: { Proficient: true } },
						{ name: "Angular", proficiency: { Demonstrating: true } },
						{ name: "React", proficiency: { Basic: true } },
						{ name: "Svelte", proficiency: { Basic: true } },
					],
				},
				{
					title: "Backend Development",
					skills: [
						{ name: "Node.js", proficiency: { Proficient: true } },
						{ name: "Laravel", proficiency: { Demonstrating: true } },
						{ name: "c#", proficiency: { Basic: true } },
						{ name: "Django", proficiency: { Basic: true } },
						{ name: "Flask", proficiency: { Basic: true } },
						{ name: "Spring Boot", proficiency: { Basic: true } },
					],
				},
				{
					title: "Databases and Messaging Systems",
					skills: [
						{ name: "PostgreSQL", proficiency: { Demonstrating: true } },
						{ name: "MySQL", proficiency: { Proficient: true } },
						{ name: "Microsoft SQL Server", proficiency: { Proficient: true } },
						{ name: "SQLite", proficiency: { Proficient: true } },
						{ name: "MariaDB", proficiency: { Proficient: true } },
						{ name: "MongoDB", proficiency: { Basic: true } },
						{ name: "Cassandra", proficiency: {} },
						{ name: "Redis", proficiency: { Basic: true } },
						{ name: "Couchbase", proficiency: {} },
						{ name: "Apache Kafka", proficiency: { Basic: true } },
						{ name: "RabbitMQ", proficiency: { Basic: true } },
						{ name: "Amazon SQS", proficiency: {} },
					],
				},
				{
					title: "Security and Monitoring",
					skills: [
						{ name: "OWASP Zap", proficiency: {} },
						{ name: "Snyk", proficiency: {} },
						{ name: "Burp Suite", proficiency: {} },
						{ name: "Grafana", proficiency: { Demonstrating: true } },
						{ name: "Prometheus", proficiency: { Demonstrating: true } },
						{ name: "Datadog", proficiency: {} },
					],
				},
				{
					title: "Collaboration and Project Management",
					skills: [
						{ name: "Jira", proficiency: { Expert: true } },
						{ name: "Confluence", proficiency: { Proficient: true } },
						{ name: "Slack", proficiency: { Proficient: true } },
						{ name: "GitHub", proficiency: { Proficient: true } },
						{ name: "GitLab", proficiency: { Demonstrating: true } },
						{ name: "Bitbucket", proficiency: { Demonstrating: true } },
					],
				},
			],
		};
	},
	mounted() {
		this.updateScreenSize();
		window.addEventListener("resize", this.updateScreenSize);
	},
	beforeDestroy() {
		window.removeEventListener("resize", this.updateScreenSize);
	},
	methods: {
		updateScreenSize() {
			this.isSmallScreen = window.innerWidth <= 600; // Matches 'sm' breakpoint
		},
		isEmpty(object) {
			return Object.keys(object).length === 0;
		},
		getColorForProficiency(skill, level) {
			switch (level) {
				case "Basic":
					if (skill.proficiency[level]) {
						return "red"; // Color for Basic
					} else {
						return "";
					}
				case "Demonstrating":
					return "orange"; // Color for Demonstrating
				case "Proficient":
					return "blue"; // Color for Proficient
				case "Expert":
					return "green"; // Color for Expert
				default:
					return "grey"; // Default color
			}
		},
	},
};
</script>

<style scoped lang="scss">
/* Add custom styles if needed */
.v-card-title {
	background-color: #fff;
	color: var(--up-custom-bg-color);
	padding: 16px;
}
</style>
