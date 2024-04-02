import SanityClient from '@sanity/client';

export default new SanityClient({
    projectId: "1qbzx9df", 
    dataset: "production",  
    useCdn: false, 
});