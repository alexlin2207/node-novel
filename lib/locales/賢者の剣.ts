/**
 * Created by user on 2017/12/21/021.
 */

import { sp, IWords, vMaybe, sublib } from './index';
import * as StrUtil from 'str-util';
import { _word_en, lazymarks } from './lib/index';

/**
 * 改成小說名字 (可留白 則自動設定為檔案名稱)
 */
export const lang = '';

/**
 * 在這裡放此小說專屬的取代樣本
 */
export const words_source: IWords[] = [

	['ルオン|路恩|盧埃恩', '路恩'],
	['マディン|馬丁', '馬丁'],

	[`路恩${sp}馬丁`, '路恩＝馬丁'],

	/**
	 *
	 */

	[`菲利${sp}阿克雷斯`, '菲利＝阿克雷斯'],
	[`卡蒂${sp}伊蝶特`, '卡蒂＝伊蝶特'],

	/**
	 *
	 */

	['巴魯庫斯|巴魯克斯', '巴魯庫斯'],
	[`艾伊娜${sp}弗古特`, '艾伊娜＝弗古特'],

	[`格拉贊${sp}達丹魯`, '格拉贊＝達丹魯'],
	[`弗歐雷${sp}歐盧拉庫`, '弗歐雷＝歐盧拉庫'],

	['庫洛迪烏斯', '庫洛迪烏斯'],
	['蘇菲莉亞', '蘇菲莉亞'],

	['ナグレイト|拉故雷托', '拉故雷托'],
	['奧達|オーダ', '奧達'],

	['西魯貝特', '西魯貝特'],


	/**
	 *
	 */

	['Nateria|納特利亞', '納特利亞'],
	['聖路奇亞|シェルジア', '聖路奇亞'],

	/**
	 *
	 */

	['奇葩|奇鈀', '奇葩'],

];

/**
 * 實際使用的取代樣式
 */
export const words: IWords[] = sublib._word_zh_all([

	...words_source,

	...sublib.lazymarks['class'],

	...sublib.lazymarks[4],

	...sublib.lazymarks['full_width_001'],
	//...sublib.lazymarks['full_width_002'],

	...sublib.lazymarks[0],
	...sublib.lazymarks[1],
	...sublib.lazymarks[2],
	...sublib.lazymarks[3],
	...sublib.lazymarks[5],

] as IWords[]);

/**
 * 需要人工確認的屏蔽字或錯字用語等等
 */
export const words_maybe: vMaybe = [

	//'需要偵測的字',

] as vMaybe;

/**
 * 分析取代完成後執行的代碼
 *
 * @param {string} text
 * @returns {string}
 */
export function words_callback(text: string): string
{
	return text;
}

/**
 * 其他用途
 *
 * @deprecated
 * @type {{chapter_id: string; chapter_title: string; volume_id: string; volume_title: string}}
 */
export const value = {
	chapter_id: '第{{0}}話',
	chapter_title: `$t(chapter_id, [{{0}}])　{{title}}`,

	volume_id: '第{{0}}章',
	volume_title: `$t(chapter_id, [{{0}}])：{{title}}`,
};

export default exports;
