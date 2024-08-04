import { useEffect } from 'react'

const components = {
  card: 'https://esm.sh/@sebgroup/green-core@1.32.0/components/layout/card/card.js',
  theme: 'https://esm.sh/@sebgroup/green-core@1.32.0/components/theme/theme.js',
  container:
    'https://esm.sh/@sebgroup/green-core@1.32.0/components/layout/container/container.js',
  divider:
    'https://esm.sh/@sebgroup/green-core@1.32.0/components/layout/divider/divider.js',
  flex: 'https://esm.sh/@sebgroup/green-core@1.32.0/components/layout/flex/flex.js',
  img: 'https://esm.sh/@sebgroup/green-core@1.32.0/components/media/img/img.js',
  text: 'https://esm.sh/@sebgroup/green-core@1.32.0/components/text/text.js',
  button:
    'https://esm.sh/@sebgroup/green-core@1.32.0/components/form/button/button.js',
  icon: 'https://esm.sh/@sebgroup/green-core@1.32.0/components/icon/icon.js',
  video:
    'https://esm.sh/@sebgroup/green-core@1.32.0/components/media/video/video.js',
  icons:
    'https://esm.sh/@sebgroup/green-core@1.32.0/components/icon/icons/index.js',

  // Add more components as needed
}

const useComponent = (componentNames: (keyof typeof components)[]) => {
  useEffect(() => {
    const scripts: HTMLScriptElement[] = []

    componentNames.forEach((componentName) => {
      const url = components[componentName]
      if (!url) {
        console.error(
          `Component ${componentName} not found in the components list.`,
        )
        return
      }

      const script = document.createElement('script')
      script.src = url
      script.async = true
      document.body.appendChild(script)
      scripts.push(script)
    })

    return () => {
      scripts.forEach((script) => {
        document.body.removeChild(script)
      })
    }
  }, [componentNames])
}

export default useComponent

// const components = {
//   theme: () => import('https://esm.sh/@sebgroup/green-core@1.32.0/components/theme/theme.js'),
//   container: () => import('https://esm.sh/@sebgroup/green-core@1.32.0/components/layout/container/container.js'),
//   divider: () => import('https://esm.sh/@sebgroup/green-core@1.32.0/components/layout/divider/divider.js'),
//   flex: () => import('https://esm.sh/@sebgroup/green-core@1.32.0/components/layout/flex/flex.js'),
//   img: () => import('https://esm.sh/@sebgroup/green-core@1.32.0/components/media/img/img.js'),
//   text: () => import('https://esm.sh/@sebgroup/green-core@1.32.0/components/text/text.js'),
//   button: () => import('https://esm.sh/@sebgroup/green-core@1.32.0/components/form/button/button.js'),
//   icon: () => import('https://esm.sh/@sebgroup/green-core@1.32.0/components/icon/icon.js'),
//   video: () => import('https://esm.sh/@sebgroup/green-core@1.32.0/components/media/video/video.js'),
//   icons: () => import('https://esm.sh/@sebgroup/green-core@1.32.0/components/icon/icons.js')
// };

// export default components;
