import { ImageMeta } from './image-meta';
/**
 * Data to bind for images/icons
 *
 * @export
 * @interface IconMeta
 * @typedef {IconMeta}
 */
export interface IconMeta extends ImageMeta {
    /**
     * Class (tailwind icon size utility) for sizing icon
     *
     * @type {string}
     */
    iconClass: string;
}
