import Image from 'next/image'

export default () => {
    return (
        <section>
            <h1 className="font-bold text-2xl mb-8 tracking-tighter">About Me</h1>
            <p className="mb-4">French developer, who likes reading (notably SciFy), occasionnaly writing, playing tennis 4 times a week and windsurfing twice a month...</p>
            <p className="mb-4">
                <em>Life is better when it is in motion</em>: I have 4 kids at home, 6 twice a month.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-2 ">
                <div className='col-span-1 row-span-2'>
                    <Image className="rounded-xl" src="/tennis_gravity.jpg" alt="Tennis gravity raquet" width={200} height={0} style={{ height: "100%", width: "100%" }} />
                </div>
                <div className='col-span-1'>
                    <Image className="rounded-xl" src="/scify_book.jpg" alt="Classic scify books" width={200} height={0} style={{ height: "100%", width: "100%" }} />
                </div>

                <div className='col-span-1'>
                    <Image className="rounded-xl" src="/windsurfing.jpg" alt="Windsurfing" width={200} height={0} style={{ height: "100%", width: "100%" }} />
                </div>
            </div>
            <p className="mb-4">
                I am a <a href="https://www.python.org">Python</a> enthusiast with a strong interest in backend development. I can also write
                efficient front end code with <a href="https://react.dev/blog/2023/03/16/introducing-react-dev">React</a> (among others...), and I'm always looking for ways to improve my skills
                in these areas.
            </p>
            <p className="mb-4">
                I graduated in the nice city of <a href="https://www.u-bordeaux.fr/">Bordeaux</a> in France, with a master's degree in bioinformatics
                and plants biotechnology. I have always been interested in understanding the living things, and
                sutdying biology was a good way to start.
            </p>
            <p className="font-bold mb-8">
                Genomics, Proteomics, Metabolomics, PCR, Western Blot, ELISA, Image Processing...
            </p>

            <h3 className="font-bold text-xl mb-4 tracking-tighter">INRA/CNRS 2010-2015</h3>
            <p className="mb-4">
                Primarily, I have worked as a <strong>Bioinformatics engineer</strong> at the&nbsp;
                <em>Institut National de la Recherche Agronomique</em>, then at the&nbsp;
                <em>Centre National de la Recherche Scientifique</em>. I used to develop tools and pipelines
                to analyze high throughput spectrometry data, including developing signal processing algorithm.
                I also worked on the development of a web application to visualize and analyze the data.
            </p>
            <p className="mb-4">
                I had the opportunity to work on an european project <em>The Human Genome Project</em> and
                met great people from all over the world.
            </p>
            <p className="font-bold mb-8">
                Python(Flask, Numpy, Scikit-learn), C, C++, R, Scala(Play 2), SQLite, PostgreSQL...
            </p>
            <h3 className="font-bold text-xl mb-4 tracking-tighter">Omics 2015-2016</h3>
            <p className="mb-4">
                After ending my contract at the CNRS, I decided to create a startup with a collaborator with
                the mission to help biologists to analyze their data.
            </p>
            <p className="mb-4">
                I learnt a lot about the business world, and even, if the project was not successful, I
                learnt also a lot about myself.
            </p>
            <p className="font-bold mb-8">
                Entrepreneurship, Business, Communication, Python, R, MongoDB...
            </p>
            <h3 className="font-bold text-xl mb-4 tracking-tighter">Conserto 2016-2017</h3>
            <p className="mb-4">
                I joined a consulting company in Niort, and worked on various projects inlcuding a
                software suite for the financial sector.
            </p>
            <p className="font-bold mb-8">
                Java, Oracle
            </p>
            <h3 className="font-bold text-xl mb-4 tracking-tighter">SmartRx 2017-2020</h3>
            <p className="mb-4">
                I retrieved the life science sector with <a href="https://www.smart-rx.com/">SmartRx</a>. I worked on a project to develop a web application
                to help pharmacists to prescribe drugs to their patients. Incredible experience where I
                met really talented people that helped me to grow.
            </p>
            <p className="font-bold mb-8">
                Java, PostgreSQL, React, Redux, Javascript, Typescript, Webpack...
            </p>
            <h3 className="font-bold text-xl mb-4 tracking-tighter">Synpase Medicine 2020-2024</h3>
            <p className="mb-4">
                I am currently working at <a href="https://www.synapse-medicine.com/fr">Synapse Medicine</a>, a startup that helps doctors to prescribe drugs
                to their patients. I am in charge of the backend development, and set up health data interoperability systems using the <a href="https://fhir.org">FHIR standard</a>.
            </p>
            <p className='mb-4'>
                The company is also turning to the development of AI algorithms to help doctors to make safe prescription recommendation.
            </p>
            <p className="font-bold mb-8">
                Python, Java, Go, Node.js, React, Redux, PostgreSQL, MongoDB...
            </p>

            <p className="mb-4 font-bold">
                I am currently looking for new opportunities !
            </p>
        </section >
    )
}