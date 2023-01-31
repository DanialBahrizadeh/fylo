type CommentProps = {
  body: string;
  name: string;
  job: string;
  profile: string;
  first?: boolean;
};

export default function Comment({
  body,
  name,
  job,
  profile,
  first,
}: CommentProps) {
  return (
    <div
      className={`bg-primary rounded-lg px-5 pb-5 pt-8 flex flex-col gap-5 ${
        first &&
        "relative before:w-20 before:aspect-square before:absolute before:left-1 before:scale-50 before:-top-10 before:bg-quotes before:z-50 before:bg-no-repeat "
      }`}
    >
      <p className="text-sm text-white opacity-80 whitespace-pre-wrap">
        {body}
      </p>
      <div className="flex gap-1">
        <img className="w-12 rounded-full scale-75" src={profile} alt={name} />
        <div className="flex flex-col justify-center items-left gap-[2px]">
          <h2 className="text-white tracking-wider font-bold text-sm ">
            {name}
          </h2>
          <span className="text-xs text-white opacity-80">{job}</span>
        </div>
      </div>
    </div>
  );
}
