import React from 'react';

const ArticleSection: React.FC = () => {
    const articles = [
        {
            title: "The Haunted Mansion",
            description: "Discover the chilling tales of the abandoned mansion where spirits roam freely.",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxFkaL1MdPrCc0YZuFuI7WSJKCMjPnKFNL_A&s",
        },
        {
            title: "Cryptid Sightings",
            description: "Uncover the mystery behind the sightings of legendary cryptids in remote areas.",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4lFeSvuiWCv7uNJ32cXpEmh5ajukYr42uA&s",
        },
        {
            title: "Urban Legends",
            description: "Dive into the dark and eerie urban legends that have terrified generations.",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ZjCXvtxIvJ9qWBnfex6HwjAMzE1-J4w1Pw&s",
        },
        {
            title: "Vampire Myths",
            description: "Explore the myths and realities of vampires, from folklore to modern interpretations.",
            imgSrc: "https://i.pinimg.com/236x/bc/44/8a/bc448ae0ba105e822fd5a025151cd71e.jpg",
        },
        {
            title: "Ghostly Apparitions",
            description: "Read about encounters with ghostly apparitions that defy explanation.",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswtdJzFIPKMoR0EuAJfJG9-2r4Gryt7x0kQDpTg5NAA&s",
        },
        {
            title: "Cursed Objects",
            description: "Learn about objects said to carry curses, bringing misfortune to their owners.",
            imgSrc: "https://i.pinimg.com/236x/bc/44/8a/bc448ae0ba105e822fd5a025151cd71e.jpg",
        },
    ];

    return (
        <>
            <section className="text-gray-400 body-font mt-32 mb-16 max-w-7xl mx-auto">
                <div className="container px-5 py-24 mx-auto">
                 
                    <div className="flex flex-wrap -m-4">
                        {articles.map((article, index) => (
                            <div key={index} className="p-4 md:w-1/3">
                                <div className="h-full  rounded-lg overflow-hidden">
                                    <img
                                        className="h-96 w-full object-cover object-center"
                                        src={article.imgSrc}
                                        alt={article.title}
                                    />
                                    <div className="p-6 bg-black bg-opacity-75">
                                        <h2 className="text-lg font-bold text-white mb-2">{article.title}</h2>
                                        <p className="leading-relaxed text-gray-300">{article.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ArticleSection;
