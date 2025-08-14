import type { BlogPost } from '../../types/blog'

const postsEndpoint = `${import.meta.env.PUBLIC_API_BASE_URL}/posts`

export async function getPosts(lang: string, limit: number = 1000): Promise<BlogPost[]> {
  // Setup headers
  const myHeaders = new Headers()
  myHeaders.append('Accept-Language', lang)
  myHeaders.append('Authorization', `Token ${import.meta.env.PUBLIC_API_SECRET_KEY}`)

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
  }

  const response = await fetch(
    `${postsEndpoint}/?page-size=${limit}`,
    requestOptions
  )

  // Get the data from the response
  const jsonData = await response.json()
  const data: BlogPost[] = jsonData.results
  return data
}


export async function getPost(lang: string, id: string): Promise<BlogPost> {
  // Setup headers
  const myHeaders = new Headers()
  myHeaders.append('Accept-Language', lang)
  myHeaders.append('Authorization', `Token ${import.meta.env.API_SECRET_KEY}`)

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
  }

  const response = await fetch(`${postsEndpoint}/${id}/?details=true`, requestOptions)
  const jsonData = await response.json()
  const data: BlogPost = jsonData
  return data
}