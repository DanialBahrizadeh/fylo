import Feature from "./Feature";
import {
  IconAccessAnywhere,
  IconSecurity,
  IconCollaboration,
  IconAnyFile,
} from "./Logos";

export default function Features() {
  return (
    <div
      id="features"
      className="mt-24 lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:mt-0 lg:relative lg:z-50 lg:px-32"
    >
      <Feature
        Logo={IconAccessAnywhere}
        title={"Access your files, anywhere"}
        description={`The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.`}
      />
      <Feature
        Logo={IconSecurity}
        title={"Security you can trust"}
        description={`2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.`}
      />
      <Feature
        Logo={IconCollaboration}
        title={"Real-time collaboration"}
        description={`Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.`}
      />
      <Feature
        Logo={IconAnyFile}
        title={"Store any type of file"}
        description={` Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.`}
      />
    </div>
  );
}
