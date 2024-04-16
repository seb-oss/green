// FigmaContext.tsx
import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"

interface FigmaData {
  node: string
  svgContent: string
}

interface FigmaContextProps {
  figmaData: FigmaData[]
}

const FigmaContext = createContext<FigmaContextProps | undefined>(undefined)

export const useFigma = () => useContext(FigmaContext)

interface FigmaProviderProps {
  nodes: string[]
  children: React.ReactNode
}

export const FigmaProvider: React.FC<FigmaProviderProps> = ({
  children,
  nodes,
}) => {
  const [figmaData, setFigmaData] = useState<FigmaData[]>([])
  const figmaAccessKey = process.env.NEXT_PUBLIC_FIGMA_ACCESS_KEY
  const figmaProjectId = process.env.NEXT_PUBLIC_FIGMA_PROJECT_ID

  useEffect(() => {
    const fetchData = async (node: string) => {
      try {
        const response = await axios.get(
          `https://api.figma.com/v1/images/${figmaProjectId}/?ids=${node}&format=svg`,
          {
            headers: {
              "X-Figma-Token": figmaAccessKey,
            },
          }
        )

        const images = response.data.images
        const imageUrl = Object.values(images)[0] as string
        const svgResponse = await axios.get(imageUrl)
        return { node, svgContent: svgResponse.data }
      } catch (error) {
        console.error("Error fetching Figma image:", error)
        return { node, svgContent: "" }
      }
    }

    Promise.all(nodes.map(fetchData)).then(setFigmaData)
  }, [])

  return (
    <FigmaContext.Provider value={{ figmaData }}>
      {children}
    </FigmaContext.Provider>
  )
}
