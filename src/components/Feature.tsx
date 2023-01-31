type FeatureProps = {
  Logo: React.FC;
  title: string;
  description: string;
};
export default function Feature({ Logo, title, description }: FeatureProps) {
  return (
    <div className="flex justify-center items-center flex-col text-white my-24">
      <span className="">
        <Logo />
      </span>
      <h1 className="font-bold text-lg mt-4 mb-2">{title}</h1>
      <p className="opacity-80 text-center px-10 text-sm whitespace-pre-wrap">
        {" "}
        {description}
      </p>
    </div>
  );
}
