const GhostContentAPI = require("@tryghost/content-api");

const api = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_URL,
  key: process.env.NEXT_PUBLIC_GHOST_KEY,
  version: "v3",
});

export async function getPosts() {
  return api.posts
    .browse({
      limit: "all",
      include: "tags,authors",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return api.posts
    .read({
      slug: postSlug,
      include: "tags,authors",
    })
    .catch((err) => {
      console.error(err);
    });
}