import type { LeadData } from '../../types/lead'

const leadsEndpoint = `${import.meta.env.PUBLIC_API_BASE_URL}/leads/`

export async function submitLead(lang: string, leadData: LeadData): Promise<any> {
  // Setup headers
  const myHeaders = new Headers()
  myHeaders.append('Accept-Language', lang)
  myHeaders.append('Content-Type', 'application/json')
  myHeaders.append('Authorization', `Token ${import.meta.env.PUBLIC_API_SECRET_KEY}`)


  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(leadData),
  }

  // Call external API using config
  const response = await fetch(`${leadsEndpoint}`, requestOptions)
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const result = await response.json()
  return result
}
