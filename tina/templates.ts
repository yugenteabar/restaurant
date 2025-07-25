import type { TinaField } from "tinacms";
export function indexFields() {
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
      name: "meta_description",
      label: "Meta Description",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "boolean",
      name: "show_popup",
      label: "Show Popup",
    },
    {
      type: "string",
      name: "popup_title",
      label: "Popup Title",
    },
    {
      type: "rich-text",
      name: "popup_text",
      label: "Popup Text",
    },
    {
      type: "string",
      name: "popup_button_text",
      label: "Popup Button Text",
    },
    {
      type: "string",
      name: "popup_button_link",
      label: "Popup Button Link",
    }
  ] as TinaField[];
}
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
      name: "meta_description",
      label: "Meta Description",
    },
    {
      type: "boolean",
      name: "show_popup",
      label: "Show Popup",
    },
    {
      type: "string",
      name: "popup_title",
      label: "Popup Title",
    },
    {
      type: "rich-text",
      name: "popup_text",
      label: "Popup Text",
    },
    {
      type: "string",
      name: "popup_button_text",
      label: "Popup Button Text",
    },
    {
      type: "string",
      name: "popup_button_link",
      label: "Popup Button Link",
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
      type: "string",
      name: "meta_description",
      label: "Meta Description",
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
      name: "meta_description",
      label: "Meta Description",
    },
    {
      type: "rich-text",
      name: "text_before_title",
      label: "Text Before Title",
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
          type: "string",
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
      name: "meta_description",
      label: "Meta Description",
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
      name: "meta_description",
      label: "Meta Description",
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
        },
        {
          type: "string",
          name: "menu_description",
          label: "Menu description",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "menu_link_text",
          label: "Menu link text",
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
      name: "meta_description",
      label: "Meta Description",
    },
    {
      type: "boolean",
      name: "show_page",
      label: "Show Page",
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
      name: "meta_description",
      label: "Meta Description",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "yugen_omakase_title",
      label: "Yugen Omakase Title",
    },
    {
      type: "image",
      name: "yugen_omakase_image",
      label: "Yugen Omakase Image",
    },

    {
      type: 'rich-text',
      name: "yugen_omakase_text",
      label: "Yugen Omakase Text",
    },
    {
      type: "string",
      name: "yugen_omakase_signature",
      label: "Signature",
    },
    {
      type: "string",
      name: "yugen_omakase_price",
      label: "Yugen Omakase Price",
    },
    {
      type: "string",
      name: "yugen_omakase_beverage_pairing",
      label: "Yugen Omakase Beverage pairing",
    },
    {
      type: "string",
      name: "yugen_omakase_availability",
      label: "Yugen Omakase Availability Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: 'string',
      name: "yugen_omakase_book_text",
      label: 'Book Omakase Button Text'
    },
    {
      type: 'string',
      name: "yugen_omakase_book_link",
      label: 'Book Omakase Button Link'
    },
    {
      type: 'string',
      name: "yugen_omakase_waitlist_button_text",
      label: 'Waitlist Button Text'
    },
    {
      type: 'string',
      name: "yugen_omakase_waitlist_button_link",
      label: 'Waitlist Button Link'
    },
    {
      type: 'string',
      name: "yugen_omakase_popup_title",
      label: 'Yugen Omakase T&C Title'
    },
    {
      type: 'rich-text',
      name: "yugen_omakase_terms_text",
      label: 'Yugen Omakase Terms T&C Text'
    },


    {
      type: "string",
      name: "yugen_nidaime_title",
      label: "Yugen Nidaime Title",
    },
    {
      type: "image",
      name: "yugen_nidaime_image",
      label: "Yugen Nidaime Image",
    },

    {
      type: 'rich-text',
      name: "yugen_nidaime_text",
      label: "Yugen Nidaime Text",
    },
    {
      type: "string",
      name: "yugen_nidaime_price",
      label: "Yugen Nidaime Price",
    },
    {
      type: "rich-text",
      name: "yugen_nidaime_beverage_pairing",
      label: "Yugen Nidaime Beverage pairing",
    },
    {
      type: "string",
      name: "yugen_nidaime_availability",
      label: "Yugen Nidaime Availability Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: 'string',
      name: "yugen_nidaime_book_text",
      label: 'Book Nidaime Button Text'
    },
    {
      type: 'string',
      name: "yugen_nidiame_book_link",
      label: 'Book Nidaime Button Link'
    },
    {
      type: 'string',
      name: "nidiame_terms_title",
      label: 'Yugen Nidaime T&C Title'
    },
    {
      type: 'rich-text',
      name: "nidiame_terms_text",
      label: 'Yugen Nidaime Terms T&C Text'
    },
  ] as TinaField[];
}
export function reservationsFields() {
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
      name: "meta_description",
      label: "Meta Description",
    },
    {
      type: "boolean",
      name: "show_page",
      label: "Show Page",
    },
    {
      type: "image",
      name: "main_image",
      label: "Background Image",
    },
    {
      type: "string",
      name: "above_title",
      label: "Text Above Title",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "text",
      label: "Text after title",
      ui: {
        component: "textarea",
      },
    }
    
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
      name: "meta_description",
      label: "Meta Description",
    },
    {
      type: "image",
      name: "main_image",
      label: "Background Image",
    },
    {
      type: "object",
      name: "events",
      label: "List of Events",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title} `}
        },
      },
      fields: [
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
          type: 'boolean',
          name: 'is_email',
          label: 'Is Email Button?'
        },
        {
          type: "string",
          name: "button_email",
          label: "Email for button",
        },
        {
          type: "image",
          name: "file_pdf",
          label: "File PDF",
        },
        {
          type: "string",
          name: "text_below_button",
          label: "Text Below First Button",
        },
        {
          type: "string",
          name: "secon_button_text",
          label: "Second Button Text",
        },
        {
          type: 'boolean',
          name: 'is_email_second_button',
          label: 'Is Email Second Button?'
        },
        {
          type: "string",
          name: "second_button_email",
          label: "Email for Second Button",
        },
        {
          type: "string",
          name: "text_below_second_button",
          label: "Text Below Second Button",
        },
      ],
    },
  ] as TinaField[];
}
