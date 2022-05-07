import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: 'wuh53pdh',
    dataset: 'production',
    apiVersion: '2022-05-06',
    useCdn: false,  // til true når nettsiden publiseres
})