import { links } from '../../utils/links';
import type { PageServerLoad } from './$types';
import { parse } from 'node-html-parser';

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
			const res = await fetch(link);
			const resToText = await res.text();
			const parsed = parse(resToText);

			const project: Project = {
				link: link,
				title: parsed.querySelector('title')?.textContent || 'No title found',
				desc:
					parsed.querySelector('meta[name="description"]')?.getAttribute('content') ||
					'No description found',
				previewUrl: parsed.querySelector('meta[property="og:image"]')?.getAttribute('content') || ''
			};

			projects.push(project);
		}

		return { projects };
	} catch (e) {
		console.error(e);
		return { projects };
	}
}) satisfies PageServerLoad;
