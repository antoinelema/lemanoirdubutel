import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const chambres = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/chambres' }),
  schema: z.object({
    title: z.string(),
    type: z.string(),
    surface: z.string(),
    capacity: z.string(),
    price: z.string(),
    description: z.string(),
    shortDescription: z.string(),
    bedType: z.string(),
    equipments: z.array(z.string()),
    order: z.number(),
  }),
});

const loisirs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/loisirs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    distance: z.string().optional(),
    link: z.string().optional(),
    order: z.number(),
  }),
});

const avis = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/avis' }),
  schema: z.object({
    author: z.string(),
    date: z.string(),
    rating: z.number().min(1).max(5),
    source: z.string().optional(),
  }),
});

export const collections = { chambres, loisirs, avis };
