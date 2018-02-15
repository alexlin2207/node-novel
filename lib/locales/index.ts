/**
 * Created by user on 2017/12/9/009.
 *
 * @see https://tieba.baidu.com/p/5197931833
 */

import { IWordsOutput, IRegExpCallback } from 'novel-text';
import * as StrUtil from 'str-util';
import sublib from './lib';
import baidu from './lib/baidu';

export { sublib, IWordsOutput, IRegExpCallback }

export interface IWords extends IWordsOutput
{
	[0]: string | RegExp,
	[1]: string | IRegExpCallback,
	[2]?: string,
}

export type vMaybe = Array<string | RegExp | Function | Array<string | RegExp>>;

export const lang = 'zh';

export const value = {
	chapter_id: '第{{0}}話',
	chapter_title: `$t(chapter_id, [{{0}}])　{{title}}`,

	volume_id: '第{{0}}章',
	volume_title: `$t(chapter_id, [{{0}}])：{{title}}`,
};

export const sp = '#_@_#';
export const sp2 = '[・。\\\?]';

export const words: IWords[] = [

	// BOM
	...sublib.lazymarks['c000'],

	...baidu.getTable({
		tables: [
			//
		],
	}),
	...sublib.lazymarks['zh'],
	...sublib.lazymarks['zh2'],

	['位什麼', '為什麼'],
	['(不死者?)[話话]', '$1化'],
	['而后在', '之後在'],

	['多余', '多餘'],

	['解開實，', '解開時，'],
	['四肢成現', '四肢呈現'],
	['看來身前', '看來生前'],
	['進化灰飛', '進化會飛'],
	['馬車行不死', '馬車型不死'],

	['回來的之後', '回來之後'],

	[/混\+蛋/g, '混蛋'],

	[/\*\*[纵縱]/g, '操縱'],

	['敲si', '敲死'],
	['弓虽', '強'],
	//['女干(?!部)', '奸'],
	['強女干(?!部)', '強奸'],

	['強奸', '強姦'],

	['捋军', '将军'],

	['很方面', '很方便'],

	['娼婦|娼婦', '娼婦'],

	['壹([声身])', '一$1'],

	['就事就', '就是就'],
	['(困難)就事', '$1就是'],

	//[/([^\w]|^)boss(?!\w)/ig, '$1BOSS'],
	...sublib.lazymarks['en'],

	['咀咒', '诅咒'],

	['詳細其況', '詳細況'],

	['之配者', '支配者'],

	['範圍得大小', '範圍的大小'],

	['肉體語言', '肢體語言'],

	['后坐力', '後座力'],

	['元(玩家|随从)', '原$1'],

	// @todo 擊
	['(不斷擊|暈|昏)到', '$1倒'],
	['一樣擊到的', '一樣擊倒的'],
	['被擊到', '被擊倒'],

	[`前現(${sp}|[，、。也\n]|$)`, '前線$1'],
	[`選像(${sp}|[，、。也\n]|$)`, '選項$1'],

	['社會行像', '社會形象'],

	['哥雷魯|哥雷姆|格雷姆', '哥雷姆'],
	['阿[拉剌]克[尼涅涅妮捏]|阿剌克涅|阿剌克捏', '阿剌克涅'],
	['被首再', '被守在'],
	['拉米[亚亞娅雅]|阿米拉米亚克|拉米亚克|拉米那克', '拉米亞'],

	['卻時是', '確實是'],
	['不负责人', '不负责任'],

	['也受(露出)', '野獸$1'],

	['(能)就值(跟)?', '$1確實就職$2'],

	['攻擊範為', '攻擊範圍'],

	['(工|女王|墓園|兵隊)綘', '$1蜂'],

	['多於(的)', '多餘$1'],
	['(太)多於', '$1多餘'],

	['發案者', '提案者'],
	['(教學|贈與|信仰)(對像|對相|對象)', '$1對象'],

	['好象', '好像'],


	['方變活動', '方便活動'],

	['初新者', '初心者'],

	['待再(?!次)', '待在'],
	['感知道', '感知到'],

	['成為裡想', '成為理想'],
	['掉以輕新', '掉以輕心'],
	['全原的', '全員的'],
	['用興鍛鍊', '用心鍛鍊'],
	['這麼用興', '這麼用心'],
	['輕意', '輕易'],
	['與背其他', '與被其他'],

	// @todo 已/以
	['已經受入', '已經收入'],
	['已([你一自班是]|不堪)', '以$1'],
	['还已权', '还以权'],
	['我已那', '我以那'],
	['要已公', '要以公'],
	['，已阿', '，以阿'],

	['玩全部一樣', '完不一樣'],

	['在[裡裏里](社會|社会)', '在裏社會'],

	['不[觉覚覺]的', '不覺得'],

	// @todo 复覆復
	['([反答])[复覆復]', '$1覆'],
	['重[復复](着|这道|了几遍|同样|回想)', '重覆$1'],
	['恢覆', '恢復'],
	['多次重[復复]', '多次重覆'],
	['[復复]活', '復活'],

	['沒發絕', '沒發覺'],

	['哪里', '哪裡'],
	['那里后', '那裡後'],

	['傍([边觀])', '旁$1'],

	['简直向就是', '简直像就是'],

	[/^([^\s　]*)師附/mg, '$1師父'],
	[/^([^\s　]*)指少/mg, '$1至少'],

	['從新編篡', '重新編篡'],
	['將這先經驗', '將這些經驗'],
	['時代得我', '時代的我'],
	['不要對決果抱', '不要對結果抱'],
	['獲得任合', '獲得任何'],
	['自身其忘的', '自身期望的'],
	['中為發現的', '中未發現的'],
	['的人重、', '的人種、'],
	['一邊盡型', '一邊進行'],
	['(.)性課人', '$1性客人'],
	['是故問，', '是顧問，'],
	['或者缺發', '或者缺乏'],
	['個話做', '個化作'],

	['凯凯而谈', '侃侃而谈'],
	['为止却步', '为之却步'],
	['不止步与村内', '不止步于村内'],
	['将渡逢舟', '绝渡逢舟'],

	['至始至终', '自始至终'],

	['真是可啪', '真是可怕'],

	['[觉覚覺]察', '察覺'],

	['某者意義', '某種意義'],

	['冷茎|冷靜', '冷靜'],

	[/樣阿([\?？])/g, '樣啊$1'],

	//['奴隶|奴隷', '奴隷'],

	['飯餸|飯餚', '飯餚'],

	[/(.+)[（\(]\1[）\)]/g, '$1'],

	[/\n+([ \-\=＝－─＊◇◆☆◊]+)\n+/mg, '\n\n$1\n\n'],

	['([。”])\n+[,，﹑]\n+', '$1\n\n'],

	[/，([”』」])/g, '$1'],

	[/(.)（·）(.)/g, '$1$2'],

	...sublib.lazymarks['c050'],

	[/^(第[^\n]+話[^\n]*)\n+/g, '$1\n\n'],

	[/\n[ ]*([^：\n【】]+：[^\n【】]*)\n{2,}([ ]*[^：\n【】]+：)/ug, '\n$1\n$2'],
	[/\n[ ]*([^：\n]+：[^\n]*)\n{2,}([ ]*[^：\n]+\n)/ug, '\n$1\n\n$2'],

	[/\n+[\(（\[]*完[\)）\]]*[。\-]*$/g, ''],
	[/[──＝=]+$/g, ''],

	...sublib.lazymarks['c100'],

	...sublib.lazymarks['ln'],

];

export function words_callback(text)
{
	let lightnovel_copy = '(?:图源|扫图|录入|翻译|翻译|作者|原名|插画|校对|日语原名|书名|转自|简介|目录)';

	// @fixme unknow bug
	text = text
		.toString()
		//.replace(new RegExp(`(^|\\n)((?:[ \\t　]*)${lightnovel_copy}：(?:[^\\n]*))\\n+(?!(?:[^\\n]+：|[＝－\=\\-]))`, 'ug'), '$1$2\n\n')
		.replace(new RegExp(`(^|\\n)((?:[ \\t　]*)${lightnovel_copy}：(?:[^\\n]*))\\n{2,}(?!(?:[^\\n]+：|[＝－\=\\-─]))`, 'ug'), '$1$2\n\n')

		.replace(new RegExp(`((?:[ \\t　]*)?${lightnovel_copy}：(?:[^\\n]*))\\n+(?=[^\\n：]+)`, 'ug'), '$1\n')

		.replace(new RegExp(`((?:[ \\t　]*)?${lightnovel_copy}：(?:[^\\n]*))\\n+(?=[＝－\\=\\-─])`, 'g'), '$1\n')

		.replace(new RegExp(`\\n([＝－\\=\\-─]+)\\n+((?:[ \\t　]*)?${lightnovel_copy}：)`, 'g'), '\n$1\n$2')
	;

	//text = text.replace(/^(「[^\n」]+)\n*(\n[^\n「」]+)*\n*(\n[^\n「]+」)/gm, '$1$2$3');

	return text;
}

export const words_maybe: vMaybe = [

	'\\*+',

	'&(gt|lt|amp|nbsp);?',
	//'&(gt|lt|amp);?',

	'\n+[^\n]{1,2}\n+',

	'成保',
	'[裡裏里]社[會会]',
	'叫說',
	'成強',
	'成原',
	'首再',
	'裡想',
	'受入',
	'為發現',
	'故問',

	'借口',

	'加增',
	'選擇肢',

	'[镜景][像象]',

	//['[只指][是示]', /只是因/],

	//'一[直只]',

	//'坐(?!着)',
	//'座(?!位)',

	//['[目墓][的地]', /的目的/],

	//'[仅紧]{2,}',

	//'[勿无]论',
	'[勿]论',

	'某者',
	'尽然',

	'莫种',

	'只道',
	'先带',

	'穿戴者',

	'女[支昌]',

	'指少',

	//'得我',
	'任合',
	'課人',

	/**
	 * @todo 不常見的用字
	 */
	'傍',

	'既得',

	//'原[意因]',

	//'代表[着者]',

	//'[以一][来为位]',

	//'血[清亲]',

	//'巨[汗汉]',

	//'把[我握]',
	//'[接借]住',
	//['这[件间]', /这件事/],
	//'[出除]去',

	//'正[式是]',

	'当方面',

	//'大工(?!程)',
	//'枪械',
	'不呱',
	'就值',
	'進話',
	'就事',
	//'慢生活',

	'從新',

	'尋問',

	'玩全',
	//'全部(?!人)',

	//['已(?![经經。喔])', /早已被/],

	// @todo 那哪
	//['那(?=[里能有])', ],
	//['哪(?=[里能有])', ],

	//'时期|士气',
	//'[伸身]长',

	'赤果|果体',

	'\\<(?!img)',

	///(.{1,3})?((?:勇者|神)\?)(.{1,3})?/g,

	//'之巢|巢穴',

	//'[覆](?![盖盖])',
	//'[复復](?![讐前中兴杂数])',
	'受命(?!令)',
	'期理',
	'身前',
	'具集',
	//'在世(?!界)',
	'行像',

	//'灰飛',
	//'也受(?!到)',

	'也事',
	//'是为(?!了)',

	'壹',

	//'草者',
	'大加',
	['限在', /极限在/],
	'是實',
	'後辦',
	//'成为',

	//'越有',

	'關西',

	'维和',

	'甄别',

	'維目包',

	'龙杀',

	//'魅了',

	'選像',
	'前現',

	// @todo 再在
	//'再(?!次)',
	//['在(?!床|物理|[那意此眼刚他身脑前这第店内我显泥头地其海腹体效脖影了远日])', /(?:[现刻倒滴坐杵站存装])在|不在的|就在这/],

	//'刚在',

	'强先',

	//'送开',

	'向往',

	//'制服',

	//'女[心性]',

	//'应为',
	//'常识',

	sublib._word_zh('回.举报', '回复举报')[0],

	//'[×]',
	/.{1,3}?[^a-z][x][^a-z].{1,3}?/ig,

	//'另',
	//'令(?!人)',

	// @todo 道到倒
	//['道', /[街知]道|法道具/],
	//['到(?![那达])', /[不觉搁虑做撞碰感受回直想但类看上说入解认听]到|到(?:昨天|底)/],
	'擊到',
	'成現(?!金)',

	/^([^“”\n]+)([“”])([^“”\n]+)(\2|“).{1,3}?/umg,
	///^.{1,3}?([^“”\n]+)([”])([^“”\n]+)[“”].{1,3}?/mg,

	//'[奥奧歐][克格]',

	'',

	/[\u4E00-\u9FFF]{1,3}[\?＝\=\-][\u4E00-\u9FFF]{1,3}/ig,

];

//console.log(words_maybe);

import * as self from './index';
import { lazymarks } from './lib/index';

export default self;
