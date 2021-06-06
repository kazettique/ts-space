export const getParagraphList = (paragraph: string): string[] => paragraph.split(`*`).filter((item) => item.length !== 0);

export const getCombinedHeadName = (pageNames: string[]) => pageNames.join(` | `);

export const prefix = process.env.NODE_ENV === `production` ? process.env.NEXT_PUBLIC_BASE_PATH : ``;
