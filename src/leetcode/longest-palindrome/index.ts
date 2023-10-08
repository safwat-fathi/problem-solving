// https://leetcode.com/problems/longest-palindrome/

// const s0 = "a";
// const s1 = "abccccdd";
// const s2 = "aa";
// const s3 = "aAbAccccdd";
// const s4 = "bananas";
// const s5 =
//   "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
// const s6 = "naaabbbn";
// const s7 = "aaabbc";

export const longestPalindrome = (s: string): number => {
  let oddsCount = 0;
  const letters: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];

    if (letters[letter]) letters[letter]++;
    else letters[letter] = 1;

    const letterCount = letters[letter];
    const isOdd = letterCount % 2 === 1;

    if (isOdd) oddsCount++;
    else oddsCount--;
  }

  return oddsCount > 0 ? s.length - oddsCount + 1 : s.length;
};
