
const About = ({title, text}) => {
    return (
        <section className='sm:px-20 flex flex-col'>
              <div className="w-full sm:px-0 px-7 lg:w-6/12">
                <h3 className='carte-text carte-text-after lg:text-center text-4xl font-bold py-10 lg:py-20 font-news uppercase'>{title}</h3>
                <p className='lg:text-center w-full text-sm text-start lg:text-xl text-gray-800 font-extralight'>
                    {text}
                </p>
              </div>
            </section>
    )
}
export default About;
