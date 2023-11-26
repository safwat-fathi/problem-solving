// https://github.com/turingschool-examples/challenges/blob/master/pattern_generator.markdown

type TPatternChars = "." | "#";

export class PatternGenerator {
  private _rules: Record<TPatternChars, RegExp> = {
    ".": /^[A-Z]+/,
    "#": /^[0-9]+/,
  };

  public verify(str: string, pattern: string): boolean {
    for (let i in str.split("") as TPatternChars[]) {
      const rule = pattern[i] as TPatternChars;
      const regex = this._rules[rule as TPatternChars];
      const char = str[i];

      if (regex.test(char)) continue;
      else return false;
    }

    return true;
  }
}
