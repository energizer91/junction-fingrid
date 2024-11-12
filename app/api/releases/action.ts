import {
  mockRelease21,
  mockRelease22x,
  mockRelease23,
  mockRelease24,
} from "../../mocks";

const releases = [mockRelease24, mockRelease23, mockRelease22x, mockRelease21];

export const getReleases = async () => {
  "use server";
  return releases;
};

export const getRelease = async (releaseId: string | undefined) => {
  "use server";

  if (!releaseId) return null;

  return releases.find((r) => r.id === releaseId);
};
