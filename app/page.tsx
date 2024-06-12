import { BlogPosts } from 'app/components/posts'
import { Title } from 'app/components/title'
export default function Page() {
  return (
    <section>
      <Title />
      <p className="mb-4">
        {`I'm a Python enthusiast, finding unmatched efficiency in microservice
        building with FastAPI, and a React amateur, learning the ropes of the web.
        `}
      </p>
      <p className="mb-4">
        {`I also find interests in system programming languages like Rust and Go, and
        I'm always looking for ways to improve my skills in these areas.
        `}
      </p>
      <p className="mb-4">
        {`I love trying to build nice developer oriented apis and tools, sometimes hiding complexities
        and abstraction for the sake of simplicity and ease of use.`}
      </p>
      <p className="mb-4">
        {`Finally, I like the thought of being interested in philosophy, and I'm always listening
        to podcasts on the subject when driving in my old but cool car.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section >
  )
}
