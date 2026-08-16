// Source unique de l'adresse publique du site. Les balises canonical, les og:url
// et le sitemap doivent porter des URL absolues : Google ignore les URL relatives
// dans un sitemap, et une canonical relative n'identifie pas la page de façon fiable.
export const SITE_URL = "https://idelec-sarl.fr";

/** Transforme un chemin interne ("/contact") en URL absolue. */
export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).href;
}

// Coordonnées de l'entreprise, reprises des mentions légales.
export const BUSINESS = {
  name: "IDELEC",
  legalName: "IDELEC SARL",
  phone: "+33388868814",
  email: "info@idelec-sarl.fr",
  vatID: "FR47502409410",
  streetAddress: "7 Rue des Prés",
  postalCode: "67470",
  addressLocality: "Schaffhouse-près-Seltz",
  addressRegion: "Grand Est",
  addressCountry: "FR",
} as const;
