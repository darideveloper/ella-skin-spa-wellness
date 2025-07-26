import { useEffect } from "react"

interface UpdateLangBtnProps {
  link: string
}

export default function UpdateLangBtn({ link }: UpdateLangBtnProps) {
  useEffect(() => {
    setTimeout(() => {
    const langBtn = document.querySelector('.lang-btn a')
      if (langBtn) {
        langBtn.setAttribute('href', link)
      }
    }, 200)
  }, [link])
  return <></>
}