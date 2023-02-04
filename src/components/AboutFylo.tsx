export default function AboutFylo() {
  return (
    <div className="px-5 flex flex-col gap-5 items-center text-center lg:flex-row lg:gap-20 lg:px-16">
      <img
        src="../images/illustration-stay-productive.png"
        alt="stay productive"
        className="mb-8 w-11/12 lg:w-1/2"
      />
      <div className="flex flex-col gap-5 items-start text-center">
        <h1 className="text-white font-bold font-raleway text-lg whitespace-nowrap w-11/12 lg:text-3xl lg:whitespace-pre-wrap lg:w-6/12 lg:text-left lg:tracking-wide ">
          Stay productive, wherever you ate
        </h1>
        <div className="text-left flex flex-col gap-5 text-white opacity-80 px-3 text-sm whitespace-pre-wrap lg:px-0 lg:w-9/12">
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <a
          href="#nowhere"
          className="text-accent-cyan relative after:bg-arrow after:bg-no-repeat after:bg-center after:w-5  after:absolute after:-right-6 after:top-0 after:bottom-0 self-start before:absolute before:h-[2px] before:left-0 before:-right-6 before:bg-accent-cyan before:-bottom-1 mb-5 opacity-80 hover:opacity-100 mx-3 lg:mx-0"
        >
          See how Fylo works
        </a>
      </div>
    </div>
  );
}
