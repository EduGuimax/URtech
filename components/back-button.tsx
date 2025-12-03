"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import React from "react"

type Props = {
  className?: string
  children?: React.ReactNode
}

export default function BackButton({ className = "", children }: Props) {
  const router = useRouter()

  function handleClick() {
    try {
      if (typeof window !== "undefined" && window.history.length > 1) {
        router.back()
      } else {
        router.push("/")
      }
    } catch (e) {
      router.push("/")
    }
  }

  return (
    <button onClick={handleClick} className={`${className} inline-flex items-center gap-2`}>
      <ArrowLeft size={20} />
      {children ? children : "Voltar"}
    </button>
  )
}
