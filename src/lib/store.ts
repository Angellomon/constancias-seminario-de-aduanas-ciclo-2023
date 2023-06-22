import { readable, writable } from "svelte/store";

export const events = readable([
  {
    name: "JUNIO",
    id: "qdxfw2lrot", // TODO: update event id [key]
  },
]);

export const logosSources = readable([
  {
    name: "Aduanas",
    file: "/img/logo-aduanas.png",
  },
  {
    name: "Careem",
    file: "/img/logo-careem.png",
  },
  {
    name: "canadian beef",
    file: "/img/logo-canadian-beef.png",
  },
  {
    name: "usa pultry & egg",
    file: "/img/logo-usa-poultry-egg.png",
  },
  {
    name: "us meat",
    file: "/img/logo-us-meat.png",
  },
  {
    name: "senasica",
    file: "/img/logo-senasica.png",
  },
  {
    name: "canada",
    file: "/img/logo-canada.png",
  },
  {
    name: "usda",
    file: "/img/logo-usda.png",
  },
  {
    name: "comecarne",
    file: "/img/logo-comecarne.png",
  },
]);

export const companyId = import.meta.env.VITE_COMPANY_ID;

export const apiUrl = import.meta.env.VITE_API_URL || '""';

export const assistantsUrl = import.meta.env.VITE_ASSISTANTS_URL;

export const emailStatus = writable({
  isError: false,
  isLoading: false,
  isNotFound: false,
  isInvalidReq: false,
  isServerError: false,
  isValid: false,
  isValidating: false,
});

export let email = writable("");
