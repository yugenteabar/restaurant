import { defineConfig } from "tinacms";
import { yugen_experienceFields } from "./templates";
import { beverageFields } from "./templates";
import { contactFields } from "./templates";
import { eventsFields } from "./templates";
import { foodFields } from "./templates";
import { musicFields } from "./templates";
import { omakaseFields } from "./templates";
import { private_diningFields } from "./templates";
import { reservationsFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: '423645d1-8948-496a-83be-dbe7cd59ba9d', // Get this from tina.io
  token: '4607b8d55bfecc220593d0c4961ecdddc452e67f', // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "/assets/images",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        label: 'Pages',
        name: 'page',
        path: '_pages',
        format: 'md',
        templates: [
          {
            name: 'about',
            label: 'About page',
            fields: yugen_experienceFields(),
          },
          {
            name: 'beverage',
            label: 'Beverage Page',
            fields: beverageFields(),
          },
          {
            name: 'contact',
            label: 'Contact page',
            fields: contactFields(),
          },
          {
            name: 'events',
            label: 'Events page',
            fields: eventsFields(),
          },
          {
            name: 'food',
            label: 'Food Page',
            fields: foodFields(),
          },
          {
            name: 'music',
            label: 'Music Page',
            fields: musicFields(),
          },
          {
            name: 'omakase',
            label: 'Omakase Page',
            fields: omakaseFields(),
          },
          {
            name: 'private_dining',
            label: 'Private Dining page',
            fields: private_diningFields(),
          },
          {
            name: 'reservations',
            label: 'Reservations page',
            fields: reservationsFields(),
          },
        ]
      },
    ],
  },
});
