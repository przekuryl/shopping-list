export const sections = [
  { name: "Warzywa i owoce", rating: 1 },
  { name: "Pieczywo", rating: 2 },
  { name: "Przetwory i konserwy", rating: 3 },
  { name: "Płatki oraz pieczywo i wypieki gotowe", rating: 4 },
  { name: "Lodówki", rating: 5 },
  { name: "Słodycze", rating: 6 },
  { name: "Kawa i herbata", rating: 7 },
  { name: "Promocje i oferty okolicznościowe", rating: 8 },
  { name: "Napoje roślinne, produkty do pieczenia i jaja", rating: 9 },
  { name: "Mrożonki", rating: 10 },
  { name: "Kosmetyki i higiena", rating: 11 },
  { name: "Chemia domowa", rating: 12 },
  { name: "Napoje i soki", rating: 13 },
  { name: "Chipsy, przekąski i alkohol", rating: 14 },
];

export const sectionRatingMap = new Map(
  sections.map((s) => [s.name, s.rating])
);
