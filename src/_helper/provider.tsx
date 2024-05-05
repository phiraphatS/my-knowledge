'use client'

import { ChakraProvider, createCookieStorageManager } from '@chakra-ui/react'
import { theme } from '@/styles/theme'
import { Suspense } from 'react'
import Loading from './loading'

const manager = createCookieStorageManager('chakra-color-mode')
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Loading/>}>
      <ChakraProvider theme={theme} colorModeManager={manager}>
        {children}
      </ChakraProvider>
    </Suspense>
  )
}