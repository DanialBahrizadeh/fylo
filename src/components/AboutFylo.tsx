export default function AboutFylo() {
  return (
    <div className="px-5 flex flex-col gap-5 items-center text-center">
      <img
        src="../images/illustration-stay-productive.png"
        alt="stay productive"
        className="mb-8 w-11/12"
      />
      <h1 className="text-white font-bold text-lg whitespace-nowrap w-11/12">
        Stay productive, wherever you ate
      </h1>
      <div className="text-left flex flex-col gap-5 text-white opacity-80 px-3 text-sm whitespace-pre-wrap ">
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
      </div>
      <a
        href="#nowhere"
        className="text-accent-cyan relative after:bg-arrow after:bg-no-repeat after:bg-center after:w-5  after:absolute after:-right-6 after:top-0 after:bottom-0 self-start before:absolute before:h-[2px] before:left-0 before:-right-6 before:bg-accent-cyan before:-bottom-1 mb-5 opacity-80 hover:opacity-100 mx-3"
      >
        See how Fylo works
      </a>
    </div>
  );
}
