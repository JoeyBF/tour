export type ChapterStep = {
  title: string;
  fileName: string;
  fullPath: string;
};

export type Chapter = {
  title: string;
  folderName: string;
  steps: ChapterStep[];
};

export type ContentOutline = Chapter[];

export type Metadata = {
  title: string;
};
