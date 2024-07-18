import { defineType, defineField, defineArrayMember } from 'sanity'

export const chapter = defineType({
  name: "chapter",
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
      name: "description",
      type: "text",
    }),
    defineField({
      name: "articles",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [
            { type: "documentation" },
          ],
        }),
      ],
    }),
  ],
});

