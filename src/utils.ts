export const getParagraphList = (paragraph: string): string[] => paragraph.split(`*`).filter((item) => item.length !== 0);

export const getCombinedHeadName = (pageNames: string[]) => pageNames.join(` | `);
