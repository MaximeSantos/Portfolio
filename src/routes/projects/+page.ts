import { links } from '../../utils/links';
import type { PageLoad } from './$types';

interface Project {
	link: string;
	title: string;
	desc: string;
	previewUrl: string;
}

export const load = (async ({ fetch }) => {
	const projects: Project[] = [];

	try {
		for (const link of links) {
			const res = await fetch(link, {
				method: 'GET'
			});
			const data = await res.text();
			const parser = new DOMParser();
			const doc = parser.parseFromString(data, 'text/html');

			const project: Project = {
				link: link,
				title: doc.querySelector('title')?.textContent || 'No title',
				desc:
					doc.querySelector('meta[name="description"]')?.getAttribute('content') ||
					'No description',
				previewUrl:
					doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || 'No preview'
			};

			projects.push(project);
		}

		return { projects };
	} catch (e) {
		console.error(e);
		return { projects };
	}
}) satisfies PageLoad;
