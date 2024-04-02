import SanityClient from '@sanity/client';

const client = new SanityClient({
    projectId: '1qbzx9df',
    dataset: 'production',
    useCdn: true,
});

export default client;