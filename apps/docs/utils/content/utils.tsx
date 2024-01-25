import type { DocumentGen } from "contentlayer/core";
import * as fs from "node:fs/promises";
import path from "node:path";
// import { DocumentTypesn } from "content";

export const contentDirPath = "content";

// export const urlFromFilePath = (doc: DocumentGen): string => {
//   let urlPath = doc._raw.flattenedPath.replace(/^pages\/?/, "/");
//   if (!urlPath.startsWith("/")) urlPath = `/${urlPath}`;
//   if ("global_id" in doc) urlPath += `-${doc.global_id}`;
//   // Remove preceding indexes from path segments
//   urlPath = urlPath
//     .split("/")
//     .map((segment) => segment.replace(/^\d\d\d\-/, ""))
//     .join("/");
//   return urlPath;
// };

export const urlFromFilePath = (doc: DocumentGen): string => {
  let urlPath = doc._raw.flattenedPath.replace(/^pages\/?/, "/");
  if (!urlPath.startsWith("/")) urlPath = `/${urlPath}`;
  // Remove preceding indexes from path segments
  urlPath = urlPath
    .split("/")
    .map((segment) => segment.replace(/^\d\d\d\-/, ""))
    .filter((segment) => segment !== "global_id")
    .join("/");
  return urlPath;
};

export const getLastEditedDate = async (doc: DocumentGen): Promise<Date> => {
  const stats = await fs.stat(
    path.join(contentDirPath, doc._raw.sourceFilePath)
  );
  return stats.mtime;
};

// export async function validateDuplicateIds(allDocuments: Doc[]) {
//   const ids = allDocuments.map((doc) => doc.global_id);

//   const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
//   if (duplicates.length) {
//     throw new Error(`[Error] Duplicate ids found: ${duplicates.join(", ")}`);
//   }

//   console.log("No duplicate ids found");
// }
