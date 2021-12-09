export function isLightHigherContrast(hex: string): boolean {
  let white = accessbilityRating(hex, '#ffffff');
  let black = accessbilityRating(hex, '#000000');

  if (white > black) {
    return true;
  } else {
    return false;
  }
}

export function accessbilityRating(
  foregroundHex: String,
  backgroundHex: String
): number {
  let fgLuminance =
    parseInt(foregroundHex.substr(1, 2), 16) * 0.2126 +
    parseInt(foregroundHex.substr(3, 2), 16) * 0.7152 +
    parseInt(foregroundHex.substr(5, 2), 16) * 0.0722;

  let bgLuminance =
    parseInt(backgroundHex.substr(1, 2), 16) * 0.2126 +
    parseInt(backgroundHex.substr(3, 2), 16) * 0.7152 +
    parseInt(backgroundHex.substr(5, 2), 16) * 0.0722;

  // https://www.w3.org/TR/WCAG20-TECHS/G17.html
  // should be >7
  const contrast =
    (Math.max(fgLuminance, bgLuminance) + 0.05) /
    (Math.min(fgLuminance, bgLuminance) + 0.05);

  return contrast;
}

