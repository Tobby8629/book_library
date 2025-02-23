export const config = {
  imageKit: {
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_URL_ENDPOINT!,
  },
  auth: {
    authEndpoint: process.env.NEXT_PUBLIC_AUTH_ENDPOINT!,
  }
} 