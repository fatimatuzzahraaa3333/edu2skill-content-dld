import Image from "next/image";

type MDXImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export default function MDXImage({
  src,
  alt,
  width = 800,
  height = 450,
  priority = false,
}: MDXImageProps) {
  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="rounded-lg border shadow-md mx-auto"
      />
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        {alt}
      </figcaption>
    </figure>
  );
}
