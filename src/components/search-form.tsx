'use client'

import { Search } from 'lucide-react'
import { InputSearch } from './input'
import { FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q

    if (!query) {
      return null
    }

    router.push(`/search?q=${query}`)
  }

  return (
    <form onSubmit={handleSearch} className="flex">
      <InputSearch.Field>
        <InputSearch.Prefix>
          <Search className="h-5 w-5" />
        </InputSearch.Prefix>
        <InputSearch.Input
          name="q"
          placeholder="Buscar produtos..."
          defaultValue={query ?? ''}
        />
      </InputSearch.Field>
    </form>
  )
}
