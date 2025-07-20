// hooks/useExtensions.js
import { useState, useMemo } from 'react'
import { extensions as initialExtensions } from '../mocks/data.json'

export function useExtensions() {
  const [extensions, setExtensions] = useState(initialExtensions)
  const [filter, setFilter] = useState('All')

  const filteredExtensions = useMemo(() => {
    if (filter === 'All') return extensions
    return extensions.filter(extension => 
      filter === 'Active' ? extension.isActive : !extension.isActive
    )
  }, [extensions, filter])

  const toggleActive = (name) => {
    setExtensions(prev => 
      prev.map(extension => 
        extension.name === name 
          ? { ...extension, isActive: !extension.isActive } 
          : extension
      )
    )
  }

  const removeExtension = (name) => {
    setExtensions(prev => prev.filter(extension => extension.name !== name))
  }

  return {
    extensions: filteredExtensions,
    setFilter,
    toggleActive,
    removeExtension
  }
}