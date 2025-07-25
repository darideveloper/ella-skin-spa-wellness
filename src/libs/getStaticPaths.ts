import { getPosts } from "./apis/blog"

export async function getStaticPathsLangs() {
  return [
    { params: { lang: "es" }},
    { params: { lang: "en" }},
  ];
}

export async function getStaticPathsBlogPostsLangs() {

  const langs = await getStaticPathsLangs()

  const paths = []

  for (const lang of langs) {
    const posts = await getPosts(lang.params.lang, 1000)
    for (const post of posts) {
      paths.push({ params: { lang: lang.params.lang, slug: post.slug } })
    }
  }
  return paths
}