export const baseUrl = process.env.API_BASE_URL || "https://bsnip.vercel.app/";
export const apiUrl = process.env.API_SHORT_URL || baseUrl + "url";
export const analyticsUrl =
  process.env.API_ANALYTICS_URL || apiUrl + "/analytics";
