import { Link } from "react-router-dom";

const Home = () => {
    const skills = [
        { name: 'PHP', level: '95%' },
        { name: 'Laravel', level: '90%' },
        { name: 'Node.js', level: '85%' },
        { name: 'Express.js', level: '85%' },
        { name: 'React.js', level: '90%' },
        { name: 'Vue.js', level: '85%' },
        { name: 'Next.js', level: '80%' },
        { name: 'TypeScript', level: '85%' },
        { name: 'Tailwind CSS', level: '90%' },
        { name: 'AWS', level: '75%' },
        { name: 'GCP', level: '70%' },
        { name: 'Git', level: '95%' },
        { name: 'MySQL', level: '90%' },
        { name: 'MongoDB', level: '85%' },
    ];

    return (
        <div className="bg-gray-100 w-full min-h-screen">
            {/* Hero Section */}
            <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 w-full">
                <div className="w-full px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Full Stack Developer
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Specialized in modern web technologies and cloud solutions
                    </p>
                    <Link to={'/projects'} className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                        View Projects
                    </Link>
                </div>
            </header>

            {/* Skills Section */}
            <section className="py-16 w-full px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill) => (
                        <div key={skill.name} className="bg-white p-4 rounded-lg shadow-md">
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold">{skill.name}</span>
                                <span className="text-blue-600">{skill.level}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    style={{ width: skill.level }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-white py-16 w-full">
                <div className="w-full px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
                    <div className="flex justify-center gap-4">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                            Email Me
                        </button>
                        <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
                            GitHub
                        </button>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
                            LinkedIn
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;