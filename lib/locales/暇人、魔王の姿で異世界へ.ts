/**
 * Created by user on 2017/12/21/021.
 */

import { sp, IWords, vMaybe, sublib } from './index';
import * as StrUtil from 'str-util';

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

	['カイヴォン|凱馮|馮凱', '凱馮'],

	['露耶|リュエ', '露耶'],
	['賽彌耶魯|セミエール', '賽彌耶魯'],

	['蕾絲|レイス', '蕾絲'],
	['雷斯特|レスト|蕾絲忒', '雷斯特'],

	['庫洛姆威魯|クロムウェル', '庫洛姆威魯'],
	['艾索德|アイソード', '艾索德'],
	['理希德|リヒト', '理希德'],

	['蓮', '蓮'],
	['レン', 'レン'],

	['吉田|ヨシダ', '吉田'],
	['イグゾウ|伊久造', '伊久造'],

	['イル|伊魯|依琉', '依琉'],

	['伊久造・吉田', '伊久造・吉田'],
	['吉田・伊久造', '吉田・伊久造'],


	['普雷希德|プレシード', '普雷希德'],

	['萊拉|蕾拉', '蕾拉'],
	['布萊特', '布萊特'],

	['露庫斯貝露|リュクスベル|露庫絲貝露', '露庫絲貝露'],
	['依庫絲貝露|イクスペル', '依庫絲貝露'],
	['愛露絲貝露|エルスペル', '愛露絲貝露'],

	['愛露絲|エルス', '愛露絲'],
	['依庫絲|イクス', '依庫絲'],
	['絲貝露|スペル|斯貝露', '絲貝露'],

	['達利亞|ダリア', '達利亞'],
	['布萊特|ブライト', '布萊特'],

	['歐因克|オインク', '歐因克'],
	['アール|婭露', '婭露'],
	['アキミヤ|阿基米婭', '阿基米婭'],


	['索魯托伯古', '索魯托伯古'],



	['蘭特', '蘭特'],

	['斯蒂麗亞|スティリア', '斯蒂麗亞'],
	['シェザード|謝扎德', '謝扎德'],

	['藍堂|ランドウ', '藍堂'],
	['那央|ナオ', '那央'],

	['フォレスト|佛雷斯特|フォ雷斯特', '佛雷斯特'],
	['麥肯齊|マッケンジー', '麥肯齊'],

	['アーカム|阿卡姆', '阿卡姆'],
	['フィナル|菲納魯', '菲納魯'],
	['蘭德希魯特|ランドシルト', '蘭德希魯特'],

	['柯尼希|ケーニッヒ', '柯尼希'],

	['リシャル|里夏爾', '里夏爾'],
	['利茲洛特|リーズロート', '利茲洛特'],

	['ヴィオ|薇奧', '薇奧'],

	/**
	 *
	 */
	['職業☆Miss少女|職業乙女', '職業乙女'],
	['利布拉里|リブラリー', '利布拉里'],
	['セカン達利亞|セカンダリア|塞坎達利亞|塞坎達里亞', '塞坎達利亞'],
	['サーディス|薩迪斯', '薩迪斯'],
	['阿紀達魯|アキダル', '阿紀達魯'],

	['ガルデウス|迦魯迪烏斯', '迦魯迪烏斯'],

	['瑪英茲穀|瑪英茲谷|マインズバレー', '瑪英茲谷'],
	['ファストリア|法斯特利亞', '法斯特利亞'],

	['エンドレシア|恩德雷希亞|恩格雷希亞|恩德雷西亞|エンドレ西亞', '恩德雷希亞'],
	['瑟彌法那爾|セミフィナル|塞米菲爾|塞西菲爾|セミ菲納魯', '瑟彌法那爾'],

	['ウィング雷斯特|ウィングレスト|溫古・?雷斯特|溫古斯特|ウィング・?レスト', '溫古・雷斯特'],

	['恩迪亞|エンディア', '恩迪亞'],

	['サイエス|塞耶斯', '塞耶斯'],



	['サーズガルド|薩茲加魯德', '薩茲加魯德'],
	['亞爾維斯|アルヴィース', '亞爾維斯'],

	['ソルトバーグ|塞爾托巴博|索魯托伯古', '索魯托伯古'],

	['ブライトネスアーチ|布萊特涅斯亞奇', '布萊特涅斯亞奇'],

	/**
	 *
	 */
	['大媽媽|偉大母親|グランドマザー|伟大之母|偉大なる母|偉大的母親|GrandMother|Grandmother', '偉大母親', 'ig'],

	['GRANDIA SEED|グランディアシード', 'GRANDIA SEED', 'ig'],
	['Online Game|線上遊戲', '線上遊戲', 'ig'],

	['盧庫斯|ルクス', '盧庫斯'],

	['Kujata|庫亞塔', '庫亞塔'],

	['Meister|大師|マイスター', '大師'],

	['サクリファイス|犧牲', '犧牲'],

	['港口都市|港口城市|港口城鎮', '港口都市'],

	['フォースドコレクション|強制收集', '強制收集'],

	['波動斬|WaveMotion', '波動斬'],

	['借貸禮物', '借貸禮物'],

	['Creature|生物', '生物'],

	['ニブルヘイム|尼福爾海姆', '尼福爾海姆'],

	['InsanityPhoenix|狂亂不死鳥', '狂亂不死鳥'],

	['洞窟蝙蝠|CaveBad|ケイブバッド', '洞窟蝙蝠', 'ig'],
	['AshPhoenix|灰燼不死鳥|灰盡不死鳥', '灰燼不死鳥', 'ig'],
	['Phoenix|不死鳥', '不死鳥', 'ig'],

	['Chronos・Eater|時空・吞噬', '時空・吞噬', 'ig'],
	['AbsoluteZero|絶對零度', '絶對零度', 'ig'],
	['Charge|充能', '充能', 'ig'],

	['指鎧|ArmourRing', '指鎧', 'ig'],

	['路線|Course', '路線', 'ig'],

	/**
	 *
	 */
	['精靈|Efl|Elf', '精靈'],
	['回復魔法', '回復魔法'],

	['回[复]', '回復'],

	['等級|Level', '等級'],
	['技能|Skill', '技能'],
	['Status|狀態', '狀態'],

	['elder ?精靈|高等精靈', '高等精靈', 'ig'],

	['對象', '對象'],
	['印像', '印象'],

	['选单', '選單'],
	['職業', '職業'],

	['註意|注意', '注意'],

	['藍', '藍'],
	['達', '達'],
	['彌', '彌'],
	['馮', '馮'],

	/**
	 *
	 */

	[/([\u4E00-\u9FFF。，…]|\n)(\d+)(?=[\u4E00-\u9FFF。…，])/g, function (...m)
	{
		m[2] = StrUtil.toFullNumber(m[2]);
		return m[1] + StrUtil.toFullNumber(m[2]);
	}],

	[/　 /g, '　　'],
	['──── ────', '────────'],

	...sublib.lazymarks['class'],

	...sublib.lazymarks[4],

	...sublib.lazymarks[0],
	...sublib.lazymarks[1],
	...sublib.lazymarks[2],
	...sublib.lazymarks[3],
	...sublib.lazymarks[5],

	[/^(【[^\n]+)\n{2}(?=【[^\n]+】[^\n]+)/gm, '$1\n'],
	[/^(【[^\n]+)\n{2}(?=　)/gm, '$1\n'],
	[/^(　[^\n]+)\n{2}(?=　{2,})/gm, '$1\n'],
	[/^(　『[^\n]+)\n{2}(?=　『)/gm, '$1\n'],

	[/([^\s\-─])\n{1,2}(?=【Name】)/gm, '$1\n\n\n'],

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
