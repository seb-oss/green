import {defineType, defineField, defineArrayMember} from 'sanity'

// Define the footer schema
export const site = defineType({
  title: 'Home Page',
  name: 'home',
  type: 'document',
  icon: () => '🏠',
  fields: [
    defineField({
      name: 'heroSection',
      type: 'object',
      title: 'Hero Section',
      fields: [
        defineField({
          name: 'heroTitle',
          type: 'string',
          title: 'Hero Title',
        }),
        defineField({
          name: 'heroText',
          type: 'text',
          title: 'Hero Text',
        }),
      ],
      fieldset: 'hero',
    }),
    defineField({
      name: 'footerSection',
      type: 'object',
      title: 'Footer Section',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Footer Title',
        }),
        defineField({
          name: 'copyright',
          type: 'string',
          title: 'Copyright Text',
        }),
        defineField({
          name: 'links',
          type: 'array',
          title: 'Footer Links',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  type: 'string',
                  title: 'Link Label',
                }),
                defineField({
                  name: 'url',
                  type: 'url',
                  title: 'Link URL',
                }),
              ],
            }),
          ],
        }),
      ],
      fieldset: 'footer',
    }),
  ],
  fieldsets: [
    {name: 'hero', title: 'Hero Section'},
    {name: 'footer', title: 'Footer Section'},
  ],
})
