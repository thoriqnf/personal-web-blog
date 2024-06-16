import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-950 text-gray-300 dark:bg-gray-950 dark:text-gray-300">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Thoriq Personal Website</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-300"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-300"
            href="#"
          >
            Blog
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-t border-gray-700">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Welcome to Thoriq's Personal Website
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl mt-4">
                  Explore my interests, thoughts, and the latest blog posts.
                </p>
                <div className="space-x-4 mt-6">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-700 px-4 py-2 text-sm font-medium text-gray-300 shadow transition-colors hover:bg-gray-700/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-600 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    Read the Blog
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <img
                  alt="Hero"
                  className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="space-y-12 px-4 md:px-6">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  About Me
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl mt-4">
                  I am a software engineer with a passion for building
                  innovative and user-friendly applications. With over 5 years
                  of experience in the industry, I have honed my skills in
                  various programming languages, frameworks, and methodologies.
                </p>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl mt-4">
                  My expertise lies in full-stack development, where I
                  seamlessly integrate the front-end and back-end components of
                  web applications. I am proficient in JavaScript, React,
                  Node.js, and SQL, and I am always eager to learn new
                  technologies to stay ahead of the curve.
                </p>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl mt-4">
                  In my free time, I enjoy exploring the great outdoors, reading
                  thought-provoking books, and experimenting with new recipes in
                  the kitchen. I believe in the power of continuous learning and
                  strive to share my knowledge and experiences through my
                  personal website and blog.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <img
                  alt="About Me"
                  className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Contact Me
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with me for any inquiries or collaboration
                  opportunities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2">
              <div className="group grid gap-4">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <MailIcon className="h-8 w-8 text-gray-400" />
                  <div className="space-y-1 text-center">
                    <h3 className="text-lg font-bold">Email</h3>
                    <p className="text-sm text-gray-400">
                      thoriqnfaizal@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="group grid gap-4">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <MapPinIcon className="h-8 w-8 text-gray-400" />
                  <div className="space-y-1 text-center">
                    <h3 className="text-lg font-bold">Address</h3>
                    <p className="text-sm text-gray-400">
                      Jakarta, Indonesia 🇮🇩
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Latest from the Blog
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Read the latest thoughts, ideas, and experiences from me.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <Link className="group grid gap-4" href="#">
                <img
                  alt="Blog Post 1"
                  className="aspect-[3/2] overflow-hidden rounded-xl object-cover"
                  height="200"
                  src="/placeholder.svg"
                  width="300"
                />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">The Joy of Minimalism</h3>
                  <p className="text-sm text-gray-400">
                    Discover the benefits of living a minimalist lifestyle and
                    how it can improve your life.
                  </p>
                  <p className="text-sm text-gray-400">May 1, 2023</p>
                </div>
              </Link>
              <Link className="group grid gap-4" href="#">
                <img
                  alt="Blog Post 2"
                  className="aspect-[3/2] overflow-hidden rounded-xl object-cover"
                  height="200"
                  src="/placeholder.svg"
                  width="300"
                />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Exploring the Outdoors</h3>
                  <p className="text-sm text-gray-400">
                    Discover the joys of connecting with nature and the benefits
                    it can bring to your life.
                  </p>
                  <p className="text-sm text-gray-400">April 15, 2023</p>
                </div>
              </Link>
              <Link className="group grid gap-4" href="#">
                <img
                  alt="Blog Post 3"
                  className="aspect-[3/2] overflow-hidden rounded-xl object-cover"
                  height="200"
                  src="/placeholder.svg"
                  width="300"
                />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">The Art of Mindfulness</h3>
                  <p className="text-sm text-gray-400">
                    Learn how to cultivate a mindful practice and improve your
                    overall well-being.
                  </p>
                  <p className="text-sm text-gray-400">March 28, 2023</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
        <p className="text-xs text-gray-400">
          © 2024 Thoriq. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-400"
            href="#"
          >
            Privacy
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-400"
            href="#"
          >
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
