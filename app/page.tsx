import { BlogPosts } from 'app/components/posts'
import { Title } from 'app/components/title'
import Image from 'next/image'
import L from './components/layout'

export default function Page() {
  return (
    <L>
      <section>
        <Title />
        <h1 className="text-2xl  mb-8 flex items-center justify-center m-auto w-[360px]">
          <Image src="/me.jpg" alt="Marc Dubois" width={100} height={200} className="rounded-full" />
          <div className='flex flex-col w-full'>
            <p className='font-bold ml-8'>Marc DUBOIS</p>
            <p className='text-neutral-900 dark:text-neutral-100 text-lg ml-8'><em>a Pragmatic fullstack dev</em></p>
          </div>
        </h1>
        <p className="mb-4">
          {`I'm a Python enthusiast, finding unmatched efficiency in microservice
        building with FastAPI, and a React amateur, learning the ropes of the web.
        `}
        </p>
        <p className="mb-4">
          {`I love trying to build nice developer oriented apis and tools, sometimes hiding complexities
        and abstraction for the sake of simplicity and ease of use.`}
        </p>
        <p className="mb-4 b border-l-[5px] border-l-neutral-300 pl-3">
          <em className='text-lg'>
            {`I am focused on making complex things simple. I always code with a pragmatic approach.`}
          </em>
        </p>
        <p className="mb-4">
          {`Finally, I like the thought of being interested in philosophy, and I'm always listening
        to podcasts on the subject when driving in my old but cool car.`}
        </p>
        <div className="my-8">
          <BlogPosts />
        </div>
      </section >
    </L>
  )
}
