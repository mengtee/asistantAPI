import Image from 'next/image';

export default function TeamIntroduction() {
  return (
    <div className="mt-8">
      {/* Team Introduction Section */}
      <section className="team-introduction text-center">
        <h4 className="text-3xl font-thin">Contributors to the Project</h4>
        
        {/* Flex Container for Team Members */}
        <div className="flex flex-wrap mt-8 justify-center items-start gap-10">
          
          {/* Flex Item for Each Team Member */}
          <div className="flex flex-col items-center p-7 border-2 border-gray-300 rounded-lg shadow-md bg-white">
            <div className="w-24 h-24 relative mb-4">
              <Image
                src="/IMG_8303.jpg" // Replace with the path to the image
                alt="Tee Meng Kiat"
                layout="fill"
                objectFit="cover" // Cover ensures the image covers the area, without stretching
                className="rounded-full" // Makes the image circular
              />
            </div>
            <h3 className="text-xl p-2">Tee Meng Kiat</h3>
            <p className="text-sm">Computer Science Student</p>
            <p className="text-sm mb-4">In charge of Embeddings, Advanced RAG methods and Evaluation</p>
            {/* Social Icons */}
            <div className="w-24 flex justify-center gap-10">
              <a href="https://github.com/mengtee" target="_blank" rel="noopener noreferrer">
                {/* Replace with actual SVG or icon class */}
                <img src="/github-mark.svg" alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/tee-meng-kiat-5589471b7/" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.svg" alt="LinkedIn" />
              </a>
            </div>
        
          </div>
          
          {/* Repeat for each team member */}
          <div className="team-member flex flex-col items-center p-7 border-2 border-gray-300 rounded-lg shadow-md bg-white">
          <div className="w-24 h-24 relative mb-4">
              <Image
                src="/huiru.png" // Replace with the path to the image
                alt="Than Hui Ru"
                layout="fill"
                objectFit="cover" // Cover ensures the image covers the area, without stretching
                className="rounded-full" // Makes the image circular
              />
            </div>
            <h3 className="text-xl p-2">Than Hui Ru</h3>
            <p className="text-sm">Computer Science Student</p>
            <p className="text-sm mb-4">In charge of Front End, podcast retrieval pipeline and embeddings</p>
            {/* Social Icons */}
            <div className="w-24 flex justify-center gap-10">
              <a href="https://github.com/xoxo2002" target="_blank" rel="noopener noreferrer">
                {/* Replace with actual SVG or icon class */}
                <img src="/github-mark.svg" alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/than-hui-ru-0ba917169/" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.svg" alt="LinkedIn" />
              </a>
            </div>
          </div>
          
          {/* ... additional team members ... */}
          
        </div>
      </section>
    </div>
  );
}
