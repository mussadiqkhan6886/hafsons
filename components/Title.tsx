import { instrumentSerif } from '@/fonts/font'
import React from 'react'

const Title = ({content, className}: {content: string, className?: string}) => {
  return (
    <h3 className={`${instrumentSerif.className} text-3xl font-bold text-slate-900 sm:text-4xl ${className}`}>
      {content}
    </h3>
  )
}

export default Title
