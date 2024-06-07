import React from 'react';

const challenges = [
    {
        title: "Survive the Night",
        description: "Can you survive a night in a haunted castle?",
        imgSrc: "https://www.da-files.com/contests/2021/fall-challenge/img/bg-header.jpg?3046714311",
    },
    {
        title: "Vampire Hunter",
        description: "Join the ranks of vampire hunters and save the day...",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiYsISoKbB8S23ET6y09aybcRFwPkEMYy1qonJ6PMFag&s",
    },
    {
        title: "Ghostly Encounters",
        description: "Face your fears and document ghostly encounters.",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc21EMx_PfeeTQ6O1CikbVfHXlW8MwiILBiH23rSXGdQ&s",
    },
    {
        title: "Escape the Crypt",
        description: "Solve puzzles to escape the ancient crypt before time runs out.",
        imgSrc: "https://helios-i.mashable.com/imagery/articles/012WfnaY2kXUmvXkE9rqllq/hero-image.fill.size_1248x702.v1611607218.jpg",
    },
];

const ChallengeSection: React.FC = () => {
    return (
        <div className="text-white p-8 ">
            <h2 className="text-4xl font-bold mb-8 text-center">Challenges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {challenges.map((challenge, index) => (
                    <div key={index} className="bg-gradient-to-r from-green-950 to-lime-950 p-6 rounded-lg shadow-lg">
                        <img className="h-64 w-full object-cover rounded-md mb-4" src={challenge.imgSrc} alt={challenge.title} />
                        <h3 className="text-2xl font-semibold mb-2">{challenge.title}</h3>
                        <p className="text-green-300">{challenge.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChallengeSection;
