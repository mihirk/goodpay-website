export default function SectionHeader({
  title,
  description,
  color = "light",
}: {
  title: string;
  description: string;
  color?: "light" | "dark";
}) {
  return (
    <div className="flex flex-col justify-center items-center w-full text-center gap-4">
      <h1 className={`text-center text-4xl font-semibold ${color === "light" ? "text-primary" : "text-white"}`}>
        {title}
      </h1>
      <div className="w-full sm:w-3/5 xl:w-3/5">
        <p className={`text-xl ${color === "light" ? "text-muted-foreground" : "text-white"}`}>{description}</p>
      </div>
    </div>
  );
}
