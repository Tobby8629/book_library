export const config = {
  imageKit: {
    publickey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT,
  },
  auth: {
    authEndpoint: process.env.NEXT_PUBLIC_AUTH_ENDPOINT,
  }
} 