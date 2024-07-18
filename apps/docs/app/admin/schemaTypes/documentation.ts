import { defineType, defineField, defineArrayMember } from 'sanity'

export const documentation = defineType({
  title: "Documentation article",
  name: "documentation",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "updateDate",
      type: "datetime",
    }),
    defineField({
      name: "apiVersion",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "sections",
      type: "array",
      of: [
        defineArrayMember({
          type: "section",
        }),
      ],
    }),
  ],
});

