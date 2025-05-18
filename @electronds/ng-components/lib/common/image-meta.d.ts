/**
 * Data to bind for images/icons
 *
 * @export
 * @interface ImageMeta
 * @typedef {ImageMeta}
 */
export interface ImageMeta {
    /**
     * Location path
     *
     * @type {string}
     */
    src: string;
    /**
     * Alt text when image/icon is unavailable
     *
     * @type {?string}
     */
    altText?: string;
}
