import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/projects',
  }),
    schema: z.object({
    title: z.string(),
    description: z.string(),
    githubUrl: z.string().optional(),
    demoUrl: z.string().optional(),
    icon: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  projects,
};