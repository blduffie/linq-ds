/**
 * Where the element is placed/opened in a container
 *
 * @export
 * @typedef {Placement}
 */
export type Placement = 'left' | 'right' | 'top' | 'bottom';
/**
 * Where the modal should be opened
 *
 * @export
 * @typedef {ModalPlacement}
 */
export type ModalPlacement = 'center' | Placement;
/**
 * Placement of Icon in Icon Modal
 *
 * @export
 * @typedef {ModalIconPlacement}
 */
export type ModalIconPlacement = 'center' | 'left';
/**
 * Placement specific to vertical controls
 *
 * @export
 * @typedef {VerticalPlacement}
 */
export type VerticalPlacement = 'top' | 'center' | 'bottom';
/**
 * Placement specific to horizontal controls
 *
 * @export
 * @typedef {HorizontalPlacement}
 */
export type HorizontalPlacement = 'left' | 'center' | 'right';
