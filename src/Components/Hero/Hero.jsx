const Hero = () => {
  return (
    // <div>                             https://i.ibb.co/NCjMz2R/45106.jpg
    <div>
      <section className="relative bg-[url(https://i.ibb.co/NLQy27w/6242199.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[600px] lg:items-center lg:px-8">
          <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto flex flex-col  items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
              <h1 className="text-4xl bg-gradient-to-tl from-green-600 to-indigo-600 bg-clip-text text-transparent  font-bold leadi sm:text-5xl">
                Degital finance service of Bangladesh <br></br>
                <span className="dark:text-violet-400"> </span>
                Lets Join Us
              </h1>
              
              <div className="flex flex-wrap justify-center">
                <button className="px-8 py-3 bg-green-500 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                  Get started
                </button>
                <button className="px-8 py-3 m-2 text-lg bg-indigo-500 border rounded dark:text-gray-50 dark:border-gray-700">
                  Learn more
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Hero;
