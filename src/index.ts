import Color from 'color'

export interface GenPaletteOptions {
  /**
   * @desc generate how many colors
   * @default 10
   * */
  len?: number
  /**
   * @desc rgba range of color
   * @default undefined
   *
   * e.g. [#000, #fff] will generate some gray color
   * */
  rgbaRange?: [string, string]
  /**
   * @desc hsla range of color
   * @default ['hsla(365, 59%, 81%, 1)', 'hsla(0, 59%, 81%, 1)']
   *
   * e.g. ['hsla(365, 59%, 81%, 0.5)', 'hsla(0, 59%, 81%, 0.5)'], [#000, #fff]
   * */
  hslaRange?: [string, string]
  /**
   *  @desc if generate color with alpha
   *  @default false
   * */
  alpha?: boolean
}

export function genPalette(options: GenPaletteOptions = {}) {
  const defaultHslaRange = ['hsla(0, 0%, 0%)', 'hsla(359, 100%, 100%)']
  const { len = 10, rgbaRange, hslaRange = defaultHslaRange, alpha } = options

  if (rgbaRange) {
    const steps = { r: 0, g: 0, b: 0, a: 0 }
    const start = Color(rgbaRange[0] || '#f00')
    const end = Color(rgbaRange[1] || '#000')
    steps.r = (end.red() - start.red()) / (len - 1)
    steps.g = (end.green() - start.green()) / (len - 1)
    steps.b = (end.blue() - start.blue()) / (len - 1)
    if (alpha) steps.a = (end.alpha() - start.alpha()) / (len - 1)
    const colors: string[] = [start.rgb().string()]
    for (let i = 1; i < len - 1; i += 1) {
      colors[i] = start
        .red(start.red() + steps.r * i)
        .green(start.green() + steps.g * i)
        .blue(start.blue() + steps.b * i)
        .alpha(start.alpha() + steps.a * i)
        .rgb()
        .string()
    }
    colors.push(end.rgb().string())
    return colors
  }
  const steps = { h: 0, s: 0, l: 0, a: 0 }
  const start = Color(hslaRange[0] || defaultHslaRange[0])
  const end = Color(hslaRange[1] || defaultHslaRange[1])
  steps.h = (end.hue() - start.hue()) / (len - 1)
  steps.s = (end.saturationl() - start.saturationl()) / (len - 1)
  steps.l = (end.lightness() - start.lightness()) / (len - 1)
  if (alpha) steps.a = (end.alpha() - start.alpha()) / (len - 1)
  const colors: string[] = [start.rgb().string()]
  for (let i = 1; i < len - 1; i += 1) {
    colors[i] = start
      .hue(start.hue() + steps.h * i)
      .saturationl(start.saturationl() + steps.s * i)
      .lightness(start.lightness() + steps.l * i)
      .alpha(start.alpha() + steps.a * i)
      .rgb()
      .string()
  }
  colors.push(end.rgb().string())
  return colors
}

export default genPalette
