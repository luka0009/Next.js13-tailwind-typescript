import Image from "next/image";

type Props = {};

export default function ProfilePic({}: Props) {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 p-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/charlizard.png"
        width={200}
        height={200}
        alt="Stefan Zweig"
        priority={true}
      />
    </section>
  );
}
