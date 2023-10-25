import { generateKeyPairSync } from 'crypto'
import JWT from 'jsonwebtoken'
const createTokenPair = async (payload: any, publicKey: string, privateKey: string) => {
  try {
    // auth token
    const accessToken = await JWT.sign(payload, privateKey, {
      algorithm: 'RS256',
      expiresIn: '1 days'
    })

    // refresh token
    const refreshToken = await JWT.sign(payload, privateKey, {
      algorithm: 'RS256',
      expiresIn: '2 days'
    })

    // verify key
    JWT.verify(accessToken, publicKey, (err: any, decode: any) => {
      if (err) {
        console.error(`error verify:: `, err)
      } else {
        console.log('decode verify::', decode)
      }
    })

    return {
      accessToken,
      refreshToken
    }
  } catch (error) {
    console.error(`createTokenPair error:: `, error)
  }
}

const generateKeyPair = () => {
  const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: 'pkcs1', // public key cryptography standards 1
      format: 'pem' // pem - privacy enhanced mail
    },
    privateKeyEncoding: {
      type: 'pkcs1', // public key cryptography standards 1
      format: 'pem' // pem - privacy enhanced mail
    }
  })

  return { privateKey, publicKey }
}

const verifyJwt = (token: string, keySecret: string) => {
  return JWT.verify(token, keySecret)
}

const parseJwt = (token: string) => {
  return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
}
export { createTokenPair, parseJwt, verifyJwt, generateKeyPair }
