import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSection() {
  const features = [
    {
      title: "UploadThing",
      description:
        "Streamlined file uploads for all your applications",
      icon: <IconTerminal2 />,
    },
    {
      title: "LiveKit",
      description:
        "Real-time audio and video communication made simple",
      icon: <IconEaseInOut />,
    },
    {
      title: "Prisma",
      description:
        "Powerful ORM for seamless database management",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "SVIX",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud />,
    },
    {
      title: "UUID",
      description: "Easily generate unique identifiers for your projects",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Framer Motion",
      description:
        "Add fluid animations to your React components effortlessly",
      icon: <IconHelp />,
    },
    {
      title: "JWT Decode",
      description:
        "Decode and verify JWT tokens securely",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Sonner",
      description: "Elegant toast notifications for React applications",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="relative z-10 py-10 max-w-7xl max-auto">
      <div>
        <h1 className="heading text-purple-600 mt-16">Some Libraries</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-16 relative group/feature"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-black-200 rounded-lg to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-black-200 rounded-lg to-transparent pointer-events-none" />
      )}

      <div className="mb-4 relative z-10 px-10 text-purple">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-violet-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 relative z-10 px-10">
        {description}
      </p>

    </div>
  );
};
