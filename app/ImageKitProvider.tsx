"use client"
import { authenticator } from '@/constants'
import { config } from '@/lib/config'
import { ImageKitProvider } from 'imagekitio-next'
import React, { ReactNode } from 'react'

const ImageKitProviderWrapper = ({children}:{children: ReactNode}) => {
  return (
    <ImageKitProvider publicKey={config.imageKit.publicKey} authenticator={authenticator} urlEndpoint={config.imageKit.urlEndpoint}>
      {children}
    </ImageKitProvider>
  )
}

export default ImageKitProviderWrapper