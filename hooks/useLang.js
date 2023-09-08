'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { getDictionary } from '@/getDictionary'

const useLang = () => {
  const [lang, setLang] = useState({})
  const params = useParams()

  const handleLang = async () => {
    const langParams = await getDictionary(params.lang)
    setLang(langParams)
  }
  useEffect(() => {
    handleLang()
  }, [params])

  return lang
}

export default useLang
