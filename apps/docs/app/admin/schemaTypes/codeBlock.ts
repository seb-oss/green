import { defineType, defineField } from 'sanity'

export const codeBlock = defineType({
  name: "codeBlock",
  type: "object",
  fields: [
    defineField({
      name: "code",
      type: "text",
    }),
    defineField({
      name: "language",
      type: "string",
      options: {
        list: [
          {
            title: "JavaScript",
            value: "javascript",
          },
          {
            title: "HTML",
            value: "html",
          },
          {
            title: "CSS",
            value: "css",
          },
          {
            title: "Bash",
            value: "bash",
          },
          {
            title: "Text",
            value: "text",
          },
        ],
      },
    }),
  ],
});

