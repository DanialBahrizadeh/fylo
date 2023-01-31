type InfoProps = {
  Icon: React.FC;
  desc: string;
};
export default function Info({ Icon, desc }: InfoProps) {
  return (
    <div className="flex  my-5">
      <span className="scale-90">
        <Icon />
      </span>
      <p className="text-white text-sm pl-4 pr-8 opacity-80">{desc}</p>
    </div>
  );
}
