import React, {useState, useEffect} from 'react';
import image from '../blue.jpg';
import sanityClient from '../client.js';
import { Link } from 'react-router-dom';

export default function Projects() {
    const [postData, setPost] = useState(null);
        useEffect(() => {
            sanityClient
                .fetch(`*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`).then((data) => setPost(data))
            .catch(console.error);
        }, []);
    return (
        

        <main className="relative pt-8 lg:pt-20 px-8 flex justify-start items-center flex-col min-h-screen">
            {/* Background Image */}
            <img src={image} alt="Blue tint" className="absolute top-0 left-0 object-cover w-full h-full z-0"/>
            
            {/* Title Section */}
            {/* The z-index of the title is higher than the image */}
            <div className="z-10 mb-20">
                <h2 className="text-6xl text-white font-bold cursive flex justify-center about-name">Projects:</h2>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-8'>
                { postData && postData.map((post, index) =>(
                <article className="overflow-hidden shadow-lg rounded-lg">
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <div className="w-60 h-40 md:w-80 md:h-60 relative"> {/* Adjust the w- and h- values to your preference */}
                    <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-full object-cover rounded-lg"/>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white">
                      <h3 className="text-lg font-bold p-4">{post.title}</h3>
                    </div>
                  </div>
                </Link>
              </article>
              
              
              
))}
            </div>

        </main>
    );
}
