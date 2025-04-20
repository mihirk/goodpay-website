export default function SectionHeader({
  title,
  description,
  color = "light",
}: {
  title: string;
  description: React.ReactNode;
  color?: "light" | "dark";
}) {
  return (
    <div className="flex flex-col justify-center items-center w-full text-left md:text-center gap-4">
      <div className="w-full md:w-3/5">
        <h1
          className={`text-left md:text-center text-2xl md:text-4xl font-medium ${
            color === "light" ? "text-primary" : "text-white"
          }`}
        >
          {title}
        </h1>
      </div>
      <div className="w-full md:w-3/5">
        <p className={`text-base md:text-xl ${color === "light" ? "text-muted-foreground" : "text-white"}`}>
          {description}
        </p>
      </div>
    </div>
  );
}
