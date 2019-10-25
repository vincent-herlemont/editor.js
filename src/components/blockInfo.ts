import Block from './block';
import {BlockInfo as _BlockInfo} from '../../types/data-formats/block-info';

export default class BlockInfo implements _BlockInfo {

  /**
   * Holder of block
   */
  public holder: HTMLElement;

  /**
   * Key Block
   */
  public key: string;

  /**
   * @param block - Initial block
   */
  constructor(block: Block) {
    this.holder = block.holder;
    this.key = block.key;
  }
}
