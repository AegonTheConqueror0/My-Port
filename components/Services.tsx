export const Services = () => {
    const services = [
        { id: '01', title: 'Web Development', description: 'Building responsive and user-friendly websites.' },
        { id: '02', title: 'Mobile Development', description: 'Creating mobile applications for iOS and Android.' },
        { id: '03', title: 'UI/UX & Graphics Design', description: 'Designing intuitive interfaces for web and mobile applications, along with creative graphics for branding and marketing materials.' },
        { id: '04', title: 'Digital Marketing', description: 'Helping brands grow online through social media management, content creation, and targeted campaigns.' },
    ]


        return (
            <section className="text-white py-20">
                <div className="container mx-auto flex flex-col md:flex-row">

                    <div className=" md:w-1/4 pr-8 mb-12 md:mb-0">
                        <h2 className="text-6xl text-purple-300 font-extrabold sticky top-20">SERVICES</h2>
                    </div>

                    <div className="md:w-3/4">
                        {services.map(service => (
                            <div key={service.id} className="mb-16 flex items-start">
                                <div className="text-purple-300 font-bold text-5xl mr-6"> 
                                    {service.id}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>
        )
    }