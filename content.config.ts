import { defineCollection, z } from '@nuxt/content'

const variantEnum = z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link'])
const colorEnum = z.enum(['primary', 'secondary', 'neutral', 'error', 'warning', 'success', 'info'])
const sizeEnum = z.enum(['xs', 'sm', 'md', 'lg', 'xl'])
const _orientationEnum = z.enum(['vertical', 'horizontal'])

const baseSchema = {
  title: z.string().nonempty(),
  description: z.string().nonempty()
}

const linkSchema = z.object({
  label: z.string().nonempty(),
  to: z.string().nonempty(),
  icon: z.string().optional(),
  size: sizeEnum.optional(),
  trailing: z.boolean().optional(),
  target: z.string().optional(),
  color: colorEnum.optional(),
  variant: variantEnum.optional()
})

// const imageSchema = z.object({
//   src: z.string().nonempty(),
//   alt: z.string().optional(),
//   loading: z.string().optional(),
//   srcset: z.string().optional()
// })

const featureItemSchema = z.object({
  ...baseSchema,
  icon: z.string().nonempty()
})

const collapsibleItemSchema = z.object({
  ...baseSchema,
  label: z.string().nonempty(),
  icon: z.string().nonempty(),
  content: z.string().nonempty()
})

const sectionSchema = z.object({
  headline: z.string().optional(),
  ...baseSchema,
  features: z.array(featureItemSchema)
})

const sectionWithLinksSchema = sectionSchema.extend({
  links: z.array(linkSchema)
})

export const collections = {
  docs: defineCollection({
    type: 'page',
    source: '1.docs/**/*',
    schema: z.object({
      title: z.string().nonempty(),
      description: z.string().nonempty()
    })
  }),
  content: defineCollection({
    source: 'index.yml',
    type: 'data',
    schema: z.object({
      ...baseSchema,
      hero: sectionWithLinksSchema,
      features: sectionSchema.extend({
        items: z.array(featureItemSchema)
      }),
      faq: sectionSchema.extend({
        items: z.array(collapsibleItemSchema)
      })
    })
  })
}
