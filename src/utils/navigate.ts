import { NavigationFailure, useRoute, useRouter } from "vue-router";

export const navigate = (
  url: string | undefined
): Promise<void | NavigationFailure | undefined> => {
  const route = useRoute();
  const router = useRouter();

  if (url) {
    // Inner absolute path
    if (url[0] === "/") return router.push(url);

    // Outter url
    if (url.includes("http://") || url.includes("https://")) window.open(url);
    // Inner relative path
    else {
      const base = route.path.slice(0, route.path.lastIndexOf("/"));

      return router.push(`${base}/${url}`);
    }
  }

  return new Promise((resolve) => resolve());
};
