import {OutputData} from '../data-formats/output-data';
import {BlockToolData, ToolConfig} from "../tools";
import block from "../../src/components/block";

/**
 * Describes methods to manipulate with Editor`s blocks
 */
export interface Blocks {
  /**
   * Remove all blocks from Editor zone
   */
  clear(): void;

  /**
   * Render passed data
   * @param {OutputData} data
   * @return {Promise<void>}
   */
  render(data: OutputData): Promise<void>;

  /**
   * Render passed HTML string
   * @param {string} data
   * @return {Promise<void>}
   */
  renderFromHTML(data: string): Promise<void>;

  /**
   * Removes current Block
   */
  delete(blockIndex?: number): void;

  /**
   * Swaps two Blocks
   * @param {number} fromIndex - block to swap
   * @param {number} toIndex - block to swap with
   */
  swap(fromIndex: number, toIndex: number): void;

  /**
   * Returns Block holder by Block index
   * @param {number} index
   * @returns {HTMLElement}
   */
  getBlockByIndex(index: number): HTMLElement;

  /**
   * Returns current Block index
   * @returns {number}
   */
  getCurrentBlockIndex(): number;

  /**
   * Mark Block as stretched
   * @param {number} index - Block to mark
   * @param {boolean} status - stretch status
   */
  stretchBlock(index: number, status?: boolean): void;

  /**
   * Returns Blocks count
   * @return {number}
   */
  getBlocksCount(): number;

  /**
   * Insert new Initial Block after current Block
   *
   * @deprecated
   */
  insertNewBlock(): void;

  /**
   * Insert new Block
   *
   * @param {string} type — Tool name
   * @param {BlockToolData} data — Tool data to insert
   * @param {ToolConfig} config — Tool config
   * @param {number?} index — index where to insert new Block
   * @param {boolean?} needToFocus - flag to focus inserted Block
   * @return {string} Block key
   */
  insert(
    type?: string,
    data?: BlockToolData,
    config?: ToolConfig,
    index?: number,
    needToFocus?: boolean,
  ): string;

  /**
   * Insert a block adjacent by key.
   *
   * @param {String} toolName — plugin name, by default method inserts initial block type
   * @param {Object} data — plugin data
   * @param {Object} settings - default settings
   * @param {String} key - Block key
   * @param {boolean} afterBlock - Set true, insert block after the key,
   *                               otherwise set false, insert block before key
   * TODO: @param {boolean} needToFocus flag shows if needed to update current Block index
   * @return {string} Block key
   */
  insertInsertAdjacentByKey(
    toolName: string,
    data: BlockToolData,
    settings: ToolConfig,
    key?: string,
    afterBlock?: boolean,
  ): string

  /**
   * Replace block by key
   *
   * @param {string} key - Target block key
   * @param {String} toolName — plugin name
   * @param {Object} data — plugin data
   * @param {Object} settings - default settings
   */
  replaceByKey(
    key: string,
    toolName: string,
    data: BlockToolData,
    settings: ToolConfig
  ): void

  /**
   * Call a method of block by key
   * @param {string} key - Block key
   * @param {string} method - Method name
   * @param {any} args - Arguments of method
   * @return {any} Block method output
   */
  callBlockMethodByKey(key:string, method:string, ...args:any): any;

  /**
   *  Current block listener
   *
   * @param callBack call when current block is set
   */
  onCurrentBlock(callBack: (Block) => void): void;

  /**
   *  Get block position by key
   *
   * @param {string} key - Block key
   * @return {number} - Block index
   */
  getBlockIndexByKey(key: string): number;
}
