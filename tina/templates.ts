import type { TinaField } from "tinacms";
export function yugen_experienceFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "text_after_title",
      label: "Text after title",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "list_of_experiences",
      label: "List of experiences",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.experience_title} `}
        },
      },
      fields: [
        {
          type: "string",
          name: "experience_title",
          label: "Title",
          required: true,
        },
        {
          type: "string",
          name: "experience_text",
          label: "Text",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "string",
      name: "experience_conclusion",
      label: "Experiences conclusion",
    },
  ] as TinaField[];
}
export function beverageFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "object",
      name: "beverage_sections",
      label: "Beverage sections",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.section_title} `}
        },
      },
      fields: [
        {
          type: "string",
          name: "section_title",
          label: "Section title",
        },
        {
          type: "string",
          name: "section_text",
          label: "Section text",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "string",
      name: "manager_signature",
      label: "Manager signature",
    },
    {
      type: "object",
      name: "menus",
      label: "Menus",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.menu_title} -  ${item?.menu_pdf}`}
        },
      },
      fields: [
        {
          type: "string",
          name: "menu_title",
          label: "Menu title",
        },
        {
          type: "image",
          name: "menu_pdf",
          label: "Menu PDF",
        },
      ],
    },
  ] as TinaField[];
}
export function contactFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      required: true,
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "object",
      name: "phone_number",
      label: "Phone number",
      fields: [
        {
          type: "string",
          name: "phone_number",
          label: "Phone number",
        },
        {
          type: "number",
          name: "phone_number_formated",
          label: "Phone number formated",
        },
      ],
    },
    {
      type: "string",
      name: "email",
      label: "Email",
    },
    {
      type: "string",
      name: "careers_title",
      label: "Careers title",
    },
    {
      type: "string",
      name: "careers_text",
      label: "Careers text",
    },
    {
      type: "string",
      name: "newsletter_title",
      label: "Newsletter title",
    },
    {
      type: "string",
      name: "newsletter_text",
      label: "Newsletter text",
    },
    {
      type: "string",
      name: "subsribe_button_text",
      label: "Subsribe button text",
    },
    {
      type: "string",
      name: "subsribe_button_link",
      label: "Subsribe button link",
    },
  ] as TinaField[];
}
export function eventsFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "object",
      name: "events",
      label: "Events",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.event_title}`}
        },
      },
      fields: [
        {
          type: "image",
          name: "event_image",
          label: "Image",
        },
        {
          type: "string",
          name: "event_title",
          label: "Title",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "event_description",
          label: "Event Description",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "event_date",
          label: "Event Date",
        },
        {
          type: "string",
          name: "event_time",
          label: "Event time",
        },
        {
          type: "string",
          name: "event_adress",
          label: "Event Address",
        },
        {
          type: "string",
          name: "event_ticket_info",
          label: "Event Ticket info",
        },
        {
          type: "string",
          name: "event_extra_info",
          label: "Event Extra Info",
        },
        {
          type: "string",
          name: "button_text",
          label: "Button Text",
        },
        {
          type: "string",
          name: "button_link",
          label: "Button Link",
        },
      ],
    },
  ] as TinaField[];
}
export function foodFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "object",
      name: "food_sections",
      label: "Food sections",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.section_title}`}
        },
      },
      fields: [
        {
          type: "string",
          name: "section_title",
          label: "Section Title",
        },
        {
          type: "string",
          name: "section_text",
          label: "Section text",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "string",
      name: "culinary_signature",
      label: "Culinary signature",
    },
    {
      type: "object",
      name: "menus",
      label: "Menus",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.menu_title}`}
        },
      },
      fields: [
        {
          type: "string",
          name: "menu_title",
          label: "Menu title",
          required: true,
        },
        {
          type: "image",
          name: "pdf_file",
          label: "PDF file",
        },
      ],
    },
  ] as TinaField[];
}
export function musicFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "music_sections",
      label: "Music Sections",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.section_title}`}
        },
      },
      fields: [
        {
          type: "string",
          name: "section_title",
          label: "Title",
        },
        {
          type: "string",
          name: "section_text",
          label: "Text",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "object",
      name: "opening_hours",
      label: "Opening hours",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.days}: ${item?.open_hours} -  ${item?.closing_hours} `}
        },
      },
      fields: [
        {
          type: "string",
          name: "days",
          label: "Days",
        },
        {
          type: "string",
          name: "open_hours",
          label: "Open_hours",
        },
        {
          type: "string",
          name: "closing_hours",
          label: "Closing_hours",
        },
      ],
    },
  ] as TinaField[];
}
export function omakaseFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "text",
      label: "Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "signature",
      label: "Signature",
    },
    {
      type: "string",
      name: "price",
      label: "Price",
    },
    {
      type: "string",
      name: "beverage_pairing",
      label: "Beverage pairing",
    },
    {
      type: "string",
      name: "availability",
      label: "Availability",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "terms_and_conditions",
      label: "Terms & Conditions",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "book_omakase_btn_link",
      label: "Book omakase btn link",
    },
  ] as TinaField[];
}
export function private_diningFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "text",
      label: "Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "button_text",
      label: "Button text",
    },
    {
      type: "string",
      name: "button_link",
      label: "Button link",
    },
  ] as TinaField[];
}
