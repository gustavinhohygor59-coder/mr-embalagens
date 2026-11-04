type LegacyPageProps = {
  source: string;
  title: string;
};

export default function LegacyPage({ source, title }: LegacyPageProps) {
  return (
    <iframe
      className="legacy-page"
      src={`/legacy/${source}`}
      title={title}
    />
  );
}
