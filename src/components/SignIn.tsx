export default function SignIn() {
  return (
    <div
      className="absolute -top-44 w-11/12 left-1/2 -translate-x-1/2 px-7 py-8 flex flex-col gap-4 bg-primary rounded-lg drop-shadow-2xl lg:w-2/3 "
      id="sign-in"
    >
      <h1 className="text-white text-center text-lg font-bold font-raleway lg:text-3xl lg:tracking-wide lg:mt-4">
        Get early access today
      </h1>
      <p className="text-white opacity-80 whitespace-pre-wrap text-center text-sm mb-5 lg:w-9/12 mx-auto">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-8">
        <input
          type="email"
          placeholder="email@example.com"
          className="rounded-full px-8 py-5 text-xs outline-none mb-4 lg:w-7/12 lg:mb-0"
        />
        <button className="text-white border-none font-raleway font-bold bg-gradient-to-r from-accent-cyan to-accent-blue py-4 text-center tracking-wide text-sm rounded-full hover:to-accent-cyan lg:w-1/4 ">
          Get Started For Free
        </button>
      </div>
    </div>
  );
}
