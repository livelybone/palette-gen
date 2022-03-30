interface GenPaletteOptions {
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
declare function genPalette(options?: GenPaletteOptions): string[]

export { GenPaletteOptions, genPalette as default, genPalette }
