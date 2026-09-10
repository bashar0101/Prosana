type JsonLdProps = {
  /** One schema object, or several rendered as a graph of separate scripts. */
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  const items = Array.isArray(data) ? data : [data];

  return (
    <>
      {items.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          // Schema payloads are built server-side from trusted content only.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\u003c"),
          }}
        />
      ))}
    </>
  );
}
