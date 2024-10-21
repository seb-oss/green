import React, { useEffect, useState } from 'react'

const version = ({ pack }) => {
  const [version, setVersion] = useState('0.0.0')

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await fetch(
          `https://registry.npmjs.org/${pack}/latest`,
        )
        const data = await response.json()
        setVersion(data.version)
      } catch (error) {
        console.error('Error fetching package version:', error)
      }
    }

    fetchVersion()
  }, [pack])

  return version
}

export default version
