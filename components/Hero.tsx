import AboutCode from '../components/AboutCode'
import img from '../public/images/me.png'

export default function Hero() {
  return (
    <div className="bg-[#000000] ">
      <div className="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-10">
          <div className="px-6 lg:px-0">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg ">
                <img
                  className="h-18 max-sm:h-11"
                  src={img}
                  alt="Your Company"
                />
                <div className="">
                  <a href="#" className="inline-flex space-x-6">
                    <span className="rounded-full bg-customYellow-light/10 px-3 py-1 text-sm/6 font-semibold text-customYellow-light ring-1 ring-indigo-600/10 ring-inset">
                      Hey There
                    </span>
                    {/* <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-200">
                      <span>Hey There,</span>
                    </span> */}
                  </a>
                </div>
                <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-200 sm:text-7xl">
                  Welcome to Laramic Studio
                </h1>
                <p className="mt-6 text-lg/8 text-gray-600">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-customBlack-dark px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Need a developer
                  </a>
                  <a href="#" className="text-sm/6 font-semibold text-gray-500">
                    View My Projects <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">

            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-[#000000] ring-1 shadow-xl shadow-indigo-600/10 ring-customYellow-light md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-customYellow-dark2 [clip-path:inset(0)] md:[clip-path:inset(0_round_var(--radius-3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-customBlack-dark opacity-20 ring-1 ring-[#fff312] ring-inset md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 mt-10 max-sm:mt-1 md:pr-0 md:pl-16">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-customBlack-dark">
                      <div className="flex bg-bg-customBlack-dark ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                          <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                            NotificationSetting.jsx
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">Hassan.jsx</div>
                        </div>
                      </div>
                      <AboutCode />
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset md:rounded-3xl"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
      </div>
    </div>
  )
}
