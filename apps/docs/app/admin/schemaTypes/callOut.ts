import { defineType, defineField, defineArrayMember } from 'sanity'

export const callOut = defineType({
  name: "callOut",
  type: "object",
  fields: [
    defineField({
      name: "content",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
    }),
    defineField({
      name: "type",
      type: "string",
      options: {
        list: [
          {
            title: "Note",
            value: "note",
          },
          {
            title: "Warning",
            value: "warning",
          },
          {
            title: "Info",
            value: "info",
          },
        ],
      },
    }),
  ],
});

