import './index.css';
import igor from "./gallery/igor.jpg";
import html from "./gallery/icons/html.png";
import css from "./gallery/icons/css.png";
import javascript from "./gallery/icons/javascript.png";
import react from "./gallery/icons/react.png";
import redux from "./gallery/icons/redux.png";
import git from "./gallery/icons/git.png";
import terminal from "./gallery/icons/terminal.png";
import linux from "./gallery/icons/linux.png";

function App() {
  return (
    <main className="main-section">
      <section className="page-section">
        <header className="header-section">
          <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <nav aria-labelledby="header-navigation" className="header-navigation">
                <ul className="flex items-center gap-6 text-sm list-itens">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 text-xl"
                      href="#about"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 text-xl"
                      href="#portfolio"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 text-xl"
                      href="#skills"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 text-xl"
                      href="#contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <article className="about-section">
          <h1 id="about">ABOUT</h1>
          <div className="about-text">
            <h4>
              My name is Igor Castro and I'm a Software Developer.
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            </h4>
          </div>
        </article>
        <div className="portfolio-header">
          <h1 id="portfolio">PORTFOLIO</h1>
        </div>
        <section className="portfolio-section">
          <div className="block">
            <img
              className="object-cover w-full h-52"
              src="https://www.hyperui.dev/photos/art-1.jpeg"
              alt=""
            />
            <h5 className="mt-4 text-xl font-bold text-gray-900">Footguess</h5>
            <p className="max-w-sm mt-2 text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis
              sequi ipsam incidunt.
            </p>
            <div className="card-actions">
              <a target="_blank" href="https://github.com/IgorNCastro/project-footguess">
                <button className="btn btn-primary">GitHub</button>
              </a>
              <a target="_blank" href="https://igorncastro.github.io/project-footguess/">
                <button className="btn btn-primary">Site</button>
              </a>
            </div>
          </div>
          <div className="block">
            <img
              className="object-cover w-full h-52"
              src="https://www.hyperui.dev/photos/art-1.jpeg"
              alt=""
            />
            <h5 className="mt-4 text-xl font-bold text-gray-900">Trivia</h5>
            <p className="max-w-sm mt-2 text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis
              sequi ipsam incidunt.
            </p>
            <div className="card-actions">
              <a target="_blank" href="https://github.com/IgorNCastro/project-trivia">
                <button className="btn btn-primary">GitHub</button>
              </a>
              <a target="_blank" href="https://igorncastro.github.io/project-trivia/">
                <button className="btn btn-primary">Site</button>
              </a>
            </div>
          </div>
          <div className="block">
            <img
              className="object-cover w-full h-52"
              src="https://www.hyperui.dev/photos/art-1.jpeg"
              alt=""
            />
            <h5 className="mt-4 text-xl font-bold text-gray-900">Wallet</h5>
            <p className="max-w-sm mt-2 text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis
              sequi ipsam incidunt.
            </p>
            <div className="card-actions">
              <a target="_blank" href="https://github.com/IgorNCastro/project-wallet">
                <button className="btn btn-primary">GitHub</button>
              </a>
              <a target="_blank" href="https://igorncastro.github.io/project-wallet/">
                <button className="btn btn-primary">Site</button>
              </a>
            </div>
          </div>
          <div className="block">
            <img
              className="object-cover w-full h-52"
              src="https://www.hyperui.dev/photos/art-1.jpeg"
              alt=""
            />
            <h5 className="mt-4 text-xl font-bold text-gray-900">Tryunfo</h5>
            <p className="max-w-sm mt-2 text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis
              sequi ipsam incidunt.
            </p>
            <div className="card-actions">
              <a target="_blank" href="https://github.com/IgorNCastro/project-tryunfo">
                <button className="btn btn-primary">GitHub</button>
              </a>
              <a target="_blank" href="https://igorncastro.github.io/project-tryunfo/">
                <button className="btn btn-primary">Site</button>
              </a>
            </div>
          </div>
          <div className="block">
            <img
              className="object-cover w-full h-52"
              src="https://www.hyperui.dev/photos/art-1.jpeg"
              alt=""
            />
            <h5 className="mt-4 text-xl font-bold text-gray-900">Solar System</h5>
            <p className="max-w-sm mt-2 text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis
              sequi ipsam incidunt.
            </p>
            <div className="card-actions">
              <a target="_blank" href="https://github.com/IgorNCastro/project-solar-system">
                <button className="btn btn-primary">GitHub</button>
              </a>
              <a target="_blank" href="https://igorncastro.github.io/project-solar-system/">
                <button className="btn btn-primary">Site</button>
              </a>
            </div>
          </div>
          <div className="block">
            <img
              className="object-cover w-full h-52"
              src="https://www.hyperui.dev/photos/art-1.jpeg"
              alt=""
            />
            <h5 className="mt-4 text-xl font-bold text-gray-900">Tic-Tac-Toe</h5>
            <p className="max-w-sm mt-2 text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis
              sequi ipsam incidunt.
            </p>
            <div className="card-actions">
              <a target="_blank" href="https://github.com/IgorNCastro/project-tic-tac-toe">
                <button className="btn btn-primary">GitHub</button>
              </a>
              <a target="_blank" href="https://igorncastro.github.io/project-tic-tac-toe/">
                <button className="btn btn-primary">Site</button>
              </a>
            </div>
          </div>
        </section>
        <h1 id="skills">SKILLS</h1>
        <section className="skills-section">
          <div className="block-skills">
            <img
              className="object-cover w-28 h-28 shadow-xl rounded-xl"
              src={html}
              alt="HTML"
            />
            <div className="p-2">
              <h5 className="text-xl font-bold text-gray-900">
                HTML
              </h5>
            </div>
          </div>
          <div className="block-skills">
            <img
              className="object-cover w-28 h-28 shadow-xl rounded-xl"
              src={css}
              alt="CSS"
            />
            <div className="p-2">
              <h5 className="text-xl font-bold text-gray-900">
                CSS
              </h5>
            </div>
          </div>
          <div className="block-skills">
            <img
              className="object-cover w-28 h-28 shadow-xl rounded-xl"
              src={javascript}
              alt="Javascript"
            />
            <div className="p-2">
              <h5 className="text-xl font-bold text-gray-900">
                Javascript
              </h5>
            </div>
          </div>
          <div className="block-skills">
            <img
              className="object-cover w-28 h-28 shadow-xl rounded-xl"
              src={react}
              alt="React"
            />
            <div className="p-2">
              <h5 className="text-xl font-bold text-gray-900">
                React
              </h5>
            </div>
          </div>
          <div className="block-skills">
            <img
              className="object-cover w-28 h-28 shadow-xl rounded-xl"
              src={redux}
              alt="Redux"
            />
            <div className="p-2">
              <h5 className="text-xl font-bold text-gray-900">
                Redux
              </h5>
            </div>
          </div>
          <div className="block-skills">
            <img
              className="object-cover w-28 h-28 shadow-xl rounded-xl"
              src={git}
              alt="Git"
            />
            <div className="p-2">
              <h5 className="text-xl font-bold text-gray-900">
                Git
              </h5>
            </div>
          </div>
          <div className="block-skills">
            <img
              className="object-cover w-28 h-28 shadow-xl rounded-xl"
              src={terminal}
              alt="Terminal"
            />
            <div className="p-2">
              <h5 className="text-xl font-bold text-gray-900">
                Terminal
              </h5>
            </div>
          </div>
          <div className="block-skills">
            <img
              className="object-cover w-28 h-28 shadow-xl rounded-xl"
              src={linux}
              alt="Linux"
            />
            <div className="p-2">
              <h5 className="text-xl font-bold text-gray-900">
                Linux
              </h5>
            </div>
          </div>
        </section>
        <section className="contact-section">
          <h5 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 text-center" id="contact">Contact me</h5>
          <div className="soc">
            <a href="#" className="icon facebook" title="Facebook">
              <svg viewBox="0 0 512 512">
                <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"/>
              </svg>
            </a>
            <a href="#" className="icon github" title="GitHub">
              <svg viewBox="71 71 370 370">
                <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"/>
              </svg>
            </a>
            <a href="#" className="icon stackoverflow" title="StackOverflow">
              <svg viewBox="0 0 512 512">
                <path d="M294.8 361.2l-122 0.1 0-26 122-0.1L294.8 361.2zM377.2 213.7L356.4 93.5l-25.7 4.5 20.9 120.2L377.2 213.7zM297.8 301.8l-121.4-11.2 -2.4 25.9 121.4 11.2L297.8 301.8zM305.8 267.8l-117.8-31.7 -6.8 25.2 117.8 31.7L305.8 267.8zM321.2 238l-105-62 -13.2 22.4 105 62L321.2 238zM346.9 219.7l-68.7-100.8 -21.5 14.7 68.7 100.8L346.9 219.7zM315.5 275.5v106.5H155.6V275.5h-20.8v126.9h201.5V275.5H315.5z"/>
              </svg>
            </a>
            <a href="#" className="icon linkedin" title="LinkedIn">
              <svg viewBox="0 0 512 512">
                <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"/>
              </svg>
            </a>
          </div>
        </section>
      </section>
      <aside className="aside-section">
        <div className="flex flex-col w-64 h-screen py-8 dark:bg-gray-800 dark:border-gray-600">
          <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">Igor Castro</h2>
          <div className="flex flex-col items-center mt-6 -mx-2">
              <img className="object-cover w-24 h-24 mx-2 rounded-full" src={igor} alt="avatar" />
              <h5 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">Software Developer</h5>
              <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">ncastro.igor@gmail.com</p>
          </div>
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav className="navegation-bar">
              <a className="flex items-center px-2 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#about">
                <span className="mx-4 font-medium">About</span>
              </a>
              <a className="flex items-center px-2 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#portfolio">
                <span className="mx-4 font-medium">Portfolio</span>
              </a>
              <a className="flex items-center px-2 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#skills">
                <span className="mx-4 font-medium">Skills</span>
              </a>
            </nav>
          </div>
          <h5 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 text-center">Contact me</h5>
          <div className="soc">
            <a href="#" className="icon facebook" title="Facebook">
              <svg viewBox="0 0 512 512">
                <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"/>
              </svg>
            </a>
            <a href="#" className="icon github" title="GitHub">
              <svg viewBox="71 71 370 370">
                <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"/>
              </svg>
            </a>
            <a href="#" className="icon stackoverflow" title="StackOverflow">
              <svg viewBox="0 0 512 512">
                <path d="M294.8 361.2l-122 0.1 0-26 122-0.1L294.8 361.2zM377.2 213.7L356.4 93.5l-25.7 4.5 20.9 120.2L377.2 213.7zM297.8 301.8l-121.4-11.2 -2.4 25.9 121.4 11.2L297.8 301.8zM305.8 267.8l-117.8-31.7 -6.8 25.2 117.8 31.7L305.8 267.8zM321.2 238l-105-62 -13.2 22.4 105 62L321.2 238zM346.9 219.7l-68.7-100.8 -21.5 14.7 68.7 100.8L346.9 219.7zM315.5 275.5v106.5H155.6V275.5h-20.8v126.9h201.5V275.5H315.5z"/>
              </svg>
            </a>
            <a href="#" className="icon linkedin" title="LinkedIn">
              <svg viewBox="0 0 512 512">
                <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"/>
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </main>
  );
}

export default App;
