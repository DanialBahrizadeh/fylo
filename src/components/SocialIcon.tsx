type SocialIconProps = {
  Icon: React.FC;
  address: string;
};
export default function SocialIcon({ Icon, address }: SocialIconProps) {
  return (
    <span className="text-white rounded-full aspect-square border-white border p-2 scale-75 hover:text-accent-cyan hover:border-accent-cyan cursor-pointer">
      <a href={address}>
        <Icon />
      </a>
    </span>
  );
}
