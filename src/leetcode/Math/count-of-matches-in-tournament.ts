// * https://leetcode.com/problems/count-of-matches-in-tournament/

export const numberOfMatches = (n: number): number => {
  let teams = n;
  let matches = 0;

  while (teams > 1) {
    const isOddTeams = teams % 2 !== 0;

    if (isOddTeams) {
      matches += (teams - 1) / 2;
      teams = (teams - 1) / 2 + 1;
    } else {
      matches += teams / 2;
      teams = teams / 2;
    }
  }

  return matches;
};
