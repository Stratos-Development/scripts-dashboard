'use client'

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white relative flex items-center justify-center" style={{ height: 'calc(100vh - 100px)' }}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl lg:leading-tight mb-6">
          Scripts made <span className="text-purple-500">easy</span>
        </h1>
        <p className="text-lg mb-8 max-w-lg mx-auto">
          Discover and utilize pre-made Docker Compose and Bash scripts for a smoother development experience.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/scripts"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg flex items-center gap-x-2 transition-transform transform hover:scale-105"
          >
            Docker Scripts
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
          <a
            href="/sh"
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg flex items-center gap-x-2 transition-transform transform hover:scale-105"
          >
            Bash Scripts
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
