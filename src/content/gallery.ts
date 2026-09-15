export type GalleryCategory = "hair" | "dental" | "aesthetic";

export type GalleryCase = {
  id: string;
  category: GalleryCategory;
  before: string;
  after: string;
  /** Months between the two photographs. */
  monthsAfter: number;
};

const build = (category: GalleryCategory, months: number[]): GalleryCase[] =>
  months.map((monthsAfter, index) => {
    const n = index + 1;
    return {
      id: `${category}-${n}`,
      category,
      before: `/images/gallery/${category}-${n}-before.jpg`,
      after: `/images/gallery/${category}-${n}-after.jpg`,
      monthsAfter,
    };
  });

export const galleryCases: GalleryCase[] = [
  // Four documented cases, each split from a single side-by-side photograph.
  ...build("hair", [12, 12, 10, 14]),
  // Ten documented veneer/crown cases, each split from a single stacked
  // before/after photograph supplied by the clinic.
  ...build("dental", [1, 1, 2, 1, 1, 2, 1, 1, 2, 1]),
  ...build("aesthetic", [6, 4, 8]),
];

export const galleryCategories: GalleryCategory[] = ["hair", "dental", "aesthetic"];

export function casesByCategory(category: GalleryCategory): GalleryCase[] {
  return galleryCases.filter((c) => c.category === category);
}
