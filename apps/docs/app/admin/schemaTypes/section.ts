import { defineType, defineField, defineArrayMember } from 'sanity'

export const section = defineType({
  name: "section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "anchor",
      type: "slug",
      description:
        "Will be used to create the section anchor",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "content",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
        }),
        defineArrayMember({
          type: "codeBlock",
        }),
        defineArrayMember({
          type: "image",
        }),
        defineArrayMember({
          type: "callOut",
        }),
      ],
    }),
  ],
});

