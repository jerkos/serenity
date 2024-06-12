
export default () => {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Tools</h1>
            <p className="mb-4">
                I am a software developer who loves to work with the following tools:
            </p>
            <ul>
                <li className="mb-8">
                    <h3 className="font-bold">Python</h3>
                    The first language I learnt was Python, and I have been using it since 2010.
                    I have worked on various projects, including web development, data analysis, and
                    system programming. I have also developed tools and libraries to help other developers
                    to be more efficient in their work.
                    I love the simplicity of the language and the community around it.
                    The typing system tends to improve by the time and I am really happy to see that.
                    I use extensively <a href="https://fastapi.tiangolo.com/">FastAPI</a>, <a href="https://flask.palletsprojects.com/en/3.0.x/">Flask</a>,
                    and <a href="https://textual.textualize.io/">Textual</a> for terminal applications.
                </li>
                <li className="mb-8">
                    <h3 className="font-bold">JavaScript/Typescript</h3>
                    I was late to use <a href="https://www.typescriptlang.org">Typescript</a> but I am now using it in all my projects.
                    The tooling around those languages has always been kind of a mess, but it is getting better
                    and better: vite, nx for monorepo, and the new features of the language are really great.
                </li>
                <li className="mb-8">
                    <h3 className="font-bold">React <small>and Next.js</small></h3>
                    I started to learn React in 2018, and I have been using it since then.
                    At the complete beginning of react, when there was a plethorus libraries for
                    frontend development, we developed in my company a clone in the hope to maintain
                    it and be performant using jsx syntax. It was a great experience, and I learnt a lot !
                </li>
                <li className="mb-8">
                    <h3 className="font-bold">Rust</h3>
                    I was curious about <a href="https://www.rust-lang.org/fr">Rust</a>, after I heard
                    a lot of good things about it. I started a pet project using it, a&nbsp;
                    <a href="https://github.com/jerkos/apikrab">clone</a> of postman or insomnia in the terminal.

                    I used <a href="https://rocket.rs/">Rocket</a> for fast api prototyping, and&nbsp;
                    <a href="https://ratatui.rs/">ratatui</a> for terminal applications.
                </li>
                <li className="mb-8">
                    <h3 className="font-bold"><a href="https://go.dev/">Go</a></h3>
                    Still a beginner, but started to use during job time building microservices
                    with <a href="https://gofiber.io/">fiber</a>. I am not amazed by the language, lack of decent standard
                    library, error handling, poor functional programming support, but the tooling is
                    really great and the performance is amazing.
                </li>
                <li className="mb-8">
                    <h3 className="font-bold"><a href="https://www.postgresql.org/">PostgreSQL</a></h3>
                    During my experience, I had to write really complex queries, and I have always been
                    amazed by the power of the language. The thing is so performant, that the mantra was
                    <em>let the database engine doing its job</em>
                </li>
                <li className="mb-8">
                    <h3 className="font-bold"><a href="https://git-scm.com">Git</a></h3>
                    Quite a long time that I used it, and still find new stuffs to learn about it.
                    A must have tool for every developer.
                </li>
            </ul>

            <h2 className="font-semibold text-xl mb-8 tracking-tighter"> Others ...</h2>
            <ul>
                <li>
                    <a href="https://github.com">Github</a> and <a href="https://gitlab.com">Gitlab</a>. I am now using github for my personal projects,
                    with ci and cd which are insanely good. Thanks Microsoft !
                </li>
                <li>
                    <a href="https://bear.app/">Bear</a>, a note taking app,
                    note a big fan of all machinery around <a href="https://www.notion.so/">notion</a>,
                    <a href="https://obsidian.md/">obsidian</a> other,
                </li >
                <li>
                    <a href="https://www.postman.com/">Postman</a> for api testing,
                </li>
                <li>
                    <a href="https://wezfurlong.org/wezterm/index.html">Wezterm</a> an rust alternative
                    to iterm2, with a lot of features
                </li>
                <li>
                    <a href="https://code.visualstudio.com/"> Visual studio code</a> and <a href="https://www.jetbrains.com/fr-fr/">Jetbrains Pycharm, IntelliJ...</a>, interested in <a href="https://zed.dev/">Zed</a>&nbsp;
                    and <a href="https://lapce.dev/">lapce</a> both written in rust
                </li>
                <li>
                    <a href="https://www.docker.com/">Docker</a>,&nbsp;
                    <a href="https://kubernetes.io/fr/">Kubernetes</a>,&nbsp;
                    <a href="https://helm.sh/">Helm</a>

                </li>
                <li>
                    <a href=""> </a>
                </li>
            </ul >


        </section >
    )
}