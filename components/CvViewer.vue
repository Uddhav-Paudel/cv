<template>
	<div class="cv-viewer">
		<!-- File input for selecting the PDF -->

		<!-- VuePDF component to render the selected PDF -->
		<div class="main-container">
			<div v-for="page in pages" :key="page">
				<VuePDF
					class="pdf-container"
					v-if="pdf"
					:pdf="pdf"
					:text-layer="true"
					fit-parent
					:annotation-layer="true"
					:annotations-filter="filter"
					@loaded="onPDFRendered"
					intent="print"
					@annotation="annotation"
					:page="page"
					image-resources-path="https://unpkg.com/pdfjs-dist@latest/web/images/"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { VuePDF, usePDF } from "@tato30/vue-pdf";
import "@tato30/vue-pdf/style.css";

export default {
	components: {
		VuePDF,
	},
	data() {
		return {
			filter: ["Link", "Text", "Widget"],
			pdfUrl: null, // Store the URL for the selected PDF
			pdf: null, // Store the pdf object
			pages: null,
		};
	},
	methods: {
		// Handle file input change
		onFileChange(event) {
			const file = event.target.files[0];
			if (file) {
				// Create an object URL for the selected file
				this.pdfUrl = URL.createObjectURL(file);
			}
		},
		annotation(value) {
			console.log(value);
			this.handleLinkClick(value);
		},
		onPDFRendered() {
			// Listen for click events inside the PDF canvas
			console.log(2);
		},
		// Handle link clicks within the PDF
		handleLinkClick(value) {
			if (value.type === "link") {
				// Check if it's an anchor tag (link)
				window.open(value.data.url, "_blank");
			}
		},
	},
	watch: {},
	// Optionally, use `onMounted` to handle initialization
	mounted() {
		this.pdfUrl = "CV Uddhav.pdf";
		const { pdf, pages } = usePDF(this.pdfUrl); // Use the usePDF hook to load the new PDF
		this.pdf = pdf;
		this.pages = pages;
	},
};
</script>

<style lang="scss">
/* Ensure the cursor changes to a pointer when hovering over links in the PDF */
.pdf-container a {
	cursor: pointer; /* Change the cursor to a pointer for clickable links */
	text-decoration: underline; /* Optional: Underline links to distinguish them */
}
.pdf-container canvas {
	width: 100% !important; /* Scale the canvas to fit the container's width */
	margin: 0; /* Remove any default margins */
	padding: 0;
}
.main-container > div:not(:last-child) {
	border-bottom: 2px solid var(--up-custom-bg-color);
}
.cv-viewer {
	width: 100%;
}
</style>
