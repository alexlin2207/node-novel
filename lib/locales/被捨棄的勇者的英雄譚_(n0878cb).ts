/**
 * Created by user on 2017/12/21/021.
 */

import { sp, IWords, vMaybe, sublib } from './index';
import * as StrUtil from 'str-util';
import { _word_en } from './lib/index';

/**
 * 改成小說名字
 */
export const lang = '';

/**
 * 其他用途
 *
 * @type {{chapter_id: string; chapter_title: string; volume_id: string; volume_title: string}}
 */
export const value = {
	chapter_id: '第{{0}}話',
	chapter_title: `$t(chapter_id, [{{0}}])　{{title}}`,

	volume_id: '第{{0}}章',
	volume_title: `$t(chapter_id, [{{0}}])：{{title}}`,
};

/**
 * 在這裡放此小說專屬的取代樣本
 */
export const words: IWords[] = sublib._word_zh_all([

	['ユージ|由吉|雄二', '由吉'],

	['浜風|濱風', '浜風'],
	['朱里|朱理', '朱里'],
	['浜風朱里|濱風朱里', '浜風朱里'],

	['利多列德', '利多列德'],
	['阿基娜|阿奎那|アキナ|亞基拉', '阿基娜'],

	/**
	 *
	 */
	['(?:米亞蕾?|米艾雷|ミアレ|米婭蕾)', '米婭蕾'],
	['米婭蕾(桑|先生)', '米婭蕾桑'],

	['弗魯曼|夫魯曼|ファルマ', '弗魯曼'],

	['米西雅|米俄羅斯', '米西雅'],

	['淫夢魔族', '淫夢魔族'],

	['莉利|リリ一|莉莉|麗麗', '莉莉'],
	['尤蘭亥木|シュラハム|修蘭?哈姆', '修蘭哈姆'],

	['蓋芬庫魯|ガ一ファンクル', '蓋芬庫魯'],
	['魯特娜一多|アルテナイト', '魯特娜一多'],

	/**
	 *
	 */

	['鮫島', '鮫島'],
	['馬原圭斗', '馬原圭斗'],
	['佐島七奈美|佐島木奈美', '佐島七奈美'],

	/**
	 *
	 */

	['庫蕾亞|庫拉莉雅|クラリア', '庫拉莉雅'],

	['羅素爾|拉塞魯|ラッセル', '羅素爾'],

	['瑞噶魯|利嘎魯|瑞嘎魯', '利嘎魯'],

	['特里亞斯|特里艾斯|テリアス|斯特里', '特里亞斯'],

	['羅沙路極亞|ロスタルジア|羅素塔魯加', '羅素塔魯加'],

	['亞里螞蟻', '亞里螞蟻'],

	['地牢|地下城|迷宮', '迷宮'],

	['行會|公會', '公會'],

	['接待姑?娘', '接待娘'],

	['灼熱の?処刑場|灼熱處刑場', '灼熱の処刑場'],

	[/^[　  ]+/gm, ''],

	...sublib.lazymarks['class'],

	...sublib.lazymarks[4],

	_word_en(/\d+g?/ig, function (...m)
	{
		return m[1] + StrUtil.toFullNumber(m[2]);
	}),

	_word_en(/[a-z]/ig, function (...m)
	{
		return m[1] + StrUtil.toFullEnglish(m[2]);
	}),

	[/[【]/g, '「'],
	[/[】]/g, '」'],

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

export default exports;
