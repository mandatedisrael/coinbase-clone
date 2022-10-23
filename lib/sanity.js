import sanityClient from '@sanity/client' 

export const client =  sanityClient({
    projectId:"opbub7cm",
    dataset: 'production',
    apiVersion: '2021-03-25',
    token:"skaRLEV5sdmd9CI4FEZehrPdB9G1vkA8haJlocidkMot3QMsGHhSGyiAf5O6sOdRNOjJe7Ux6L78JTTnCjwtpNNyb6fFYiuPy5D825rJm6J1ku8VEz2iLaTetm8kbMF6vunz0FrSgL807l2BoFvmjKimBLp0ERckGDMaBGjECdI2dXD0jnJR",
    useCdn: false,
})