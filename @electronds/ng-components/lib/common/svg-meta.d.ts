/**
 * Svg Meta Data
 *
 * @export
 * @interface SvgMeta
 * @typedef {SvgMeta}
 */
export interface SvgMeta {
    /**
     * Path Data
     *
     * @type {string}
     */
    d: string;
    /**
     * ViewBox
     *
     * @type {?string}
     */
    viewBox?: string;
    /**
     * Tailwind classes, size - color - etc.
     *
     * @type {?string}
     */
    iconClass?: string;
}
