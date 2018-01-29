/**
 * Created by user on 2017/12/18/018.
 */

import * as StrUtil from 'str-util';

import { sp, IWords } from '.';
import sublib from './lib';

export const lang = '四度目は嫌な死属性魔術師';

export const value = {
	chapter_id: '{{0, num2zh}}話',
	chapter_title: `$t(chapter_id, [{{0}}])　{{title}}`,
};

export function words_callback(text)
{
	return StrUtil.toFullNumber(text);
}

export const words: IWords[] = [

	//达露西亚 ダルシア
	['[达達塔塔妲妲][爾尔露][希西希][亞亚]', '达露西亞'],
	[/[範范班泛班](?:[達达達]?[爾尔鲁魯贝貝]|[贝貝達达達][爾尔鲁魯]?)|班達爾/g, '班达魯'],
	[/[範范班泛班](大人|身邊|君)/g, '班$1'],
	[/([，。！、【一])[範范班泛班]([一，。！、])/g, '$1班$2'],

	// @todo 女僕
	['[沙莎薩萨][利莉][娅雅亚亞]|萨里亚', '沙利娅'],
	['[丽麗利莉][塔萨薩]', '丽塔'],
	['[萨薩][姆姆]', '薩姆'],

	// @todo 食屍鬼/古尔
	['[薩萨][緹蒂提缇][莉莉][絲斯丝]', '薩蒂莉斯'],
	['[巴帕][絲斯絲丝][緹提蒂蒂][亞亚雅]|巴斯提雅', '巴斯蒂亞'],
	['[维維维][格賈贾][罗羅]|彼伽洛|彼伽罗|彼伽羅', '维格罗'],

	['[塔达塔][利蕾雷莉][亚亞]', '塔利亞'],

	['卡[奇契][亚亞]|卡西[亚亞]', '卡奇亞'],

	//ビルデ_(協助研究食屍鬼少子化的女食屍鬼_食屍鬼)
	['毕露媞|妣耳跌|彼魯帖', '毕露媞'],

	/**
	 * @todo 新生
	 * #37 #99
	 *
	 * ブラガ 布拉格 BLACK GOBLIN(黑哥布林)
	 *
	 * 則曼多 ゼメド 泽米多 ANUBIS(阿努比斯) 哥
	 * メメディガ 媚媚蒂嘉 梅美迪嘉 ANUBIS(阿努比斯) 妹
	 *
	 * 伯格 ANUBIS(阿努比斯)
	 *
	 * ゴーバ 戈巴 ORCUS(奥库斯)
	 *
	 * #49
	 *
	 * 嘉妲露|佳妲爾 ジャダル 食屍鬼
	 *
	 * #42
	 *
	 * パウヴィナ (活死人偽轉生_高貴豬頭人混血) 帕烏維納 帕碧娜 法奥碧娜 宝琳娜 女
	 */
	['布拉卡|布拉格|布拉伽', '布拉格'],
	['果巴|戈巴|果帕|锅巴', '戈巴'],
	['梅玫迪伽|媚媚蒂嘉|梅美迪嘉', '梅美迪嘉'],
	['泽梅多|則曼多|泽米多', '泽米多'],

	['[嘉佳伽伽][妲妲達达达][露爾尔尔]|賈达魯', '嘉妲露'],

	['帕(碧|[烏乌][維维])[娜納奈娜娜那]|法[奥奧]碧[娜納奈娜娜那]|帕[烏乌]维[娜納奈娜娜那]|帕烏維納', '帕碧娜'],

	//
	//拉批艾薩裘和亞瑪妲

	/**
	 * 骸骨要塞 骨人 酷诺翰
	 * 維比(ヴァービ)
	 * 拉比艾薩裘(ラピエサージュ) 菈比艾莎舒 女 #54 #59
	 *
	 * 雷慕鲁斯
	 *
	 * 八俣是拥有着九个脑袋的多头蛇 蒂尼西亞用最高级个体的尸体做出来的亡灵
	 */
	['[拉菈][批比彼][艾伊][薩萨莎][裘舒久]|拉彼伊萨久', '菈比艾薩裘'],
	['[酷庫库酷克][諾诺諾诺诺][翰翰漢亨汉]', '庫諾漢'],
	['維比|范彼', '維比'],
	['八俣|雅玛塔', '雅玛塔'],

	/**
	 * @todo 蟲
	 *
	 * 比多|皮特
	 * 培因
	 */
	['比多|皮特|彼多|皮托|彼特', '皮特'],
	['培因|佩恩', '培因'],

	/**
	 * 不死树魔
	 */
	['艾赞|艾善|蓝染', '艾赞'],

	// 史萊姆
	['奇尤魯|可爾|[庫库][鲁魯]', '可爾'],

	// 肉块
	['雷吉欧|雷奇奧', '雷吉欧'],

	/**
	 * @todo 巨人
	 *
	 * ザンディア_(巨人族英雄《小小天才》_第二王女_全屬性適應_殭屍) 桑提亞
	 * ジーナ_(巨人族英雄《聖女》_原祭司長_殭屍) 吉娜
	 * ダタラ_(巨人族鍛造師_殭屍) 達塔拉
	 * ズラン_(巨人族斥侯轉忍者_殭屍) 茲蘭
	 */
	['波庫斯|博克斯|沃[尔爾]克斯', '沃尔克斯'],
	['努阿扎|[努奴]阿[薩萨]|[诺努][阿亚亞][莎扎]|努阿薩', '努阿扎'],

	['[蕾雷][比碧][亞亚雅]|利维亞|利維[亞亚]|蕾比雅', '蕾比雅'],

	['桑提赞亞|[萨莎][提蒂][亚亞]|桑提亞|赞蒂亚|莎蒂亞', '莎蒂亞'],
	['吉娜', '吉娜'],
	['鞑塔拉|達塔拉|达塔拉', '達塔拉'],

	// #83 沃尔克斯的女儿戈法
	['贡法|歌法|戈法|歌法', '歌法'],

	['巨人族|巨人种族?', '巨人种'],

	['[茲兹]楠|[茲兹]蘭|兹楠|祖伦', '祖伦'],

	// @todo 人
	['[路鲁魯][切其奇][里里][亞亚][诺諾]|路切里阿久|路西里亚诺', '魯奇里亞诺'],

	['卢沙|贝萨', '卢沙'],

	['汉娜|汉萨', '汉娜'],

	// @todo 吸血鬼
	['[特蒂][涅尼]西[亞亚]', '蒂尼西亞'],
	['[爱愛艾][莲蓮]', '愛莲'],
	['[比彼][爾尔鲁魯][凱凯凯][因恩]', '比尔凯恩'],
	['比古巴蒙|谷巴蒙|古巴蒙', '谷巴蒙'],
	['[蓓贝貝][爾尔][蒙蒙][多德]', '貝尔蒙德'],

	['[馬马]伊魯[茲兹]', '馬伊魯茲'],
	['埃兰|艾拉', '艾拉'],

	/**
	 * @todo 神
	 *
	 * 紀錄之神?裘拉托斯（記録の神　キュラトス）
	 *
	 * 詹達庫（ザンターク）
	 * 炎與破壞的戰神・詹達庫
	 *
	 * 《大地与匠的母神》博蒂所选召的勇者，希爾維洛
	 *
	 *
	 */
	['[羅罗]多(可[爾尔]特|特[鲁魯]特)|羅多可爾特|罗多可尔特', '罗多特魯特'],
	['阿[尔爾]达|阿魯達|阿納达|阿[纳納][达達]', '阿尔达'],
	['非非流修咯咯', '西里酥卡卡'],

	[`邪神${sp}巴魯魯夏培`, '邪神・巴魯魯夏培'],

	//魔王古杜兰斯
	['古督拉尼斯|古杜兰斯|古敦拉尼斯', '古杜兰斯'],

	// フィトゥン => fitun => 菲頓
	['电场|场电|菲頓|fitun', '菲頓'],
	['雷电之神', '雷雲の神'],

	['[維维][妲达塔達]|維達', '維達'],
	['维达新種(?!族)', '维达新種族'],
	['维达的?皇子|维达御子', '维达的御子'],

	['赞塔庫|詹達庫|赞塔克', '詹達庫'],

	//『冰之神』尤配翁
	['尤佩昂|尤配翁|尤培因', '尤佩昂'],

	['希薩利翁|西萨利翁', '希薩利翁'],

	//时间和法术之神
	['理刻[連连]多|利[庫库]伦', '理刻連多'],
	//创造和空间之神
	['[茲兹兹祖][鲁魯][旺温温]|茲魯溫', '祖魯旺'],

	/**
	 * 墮醉之邪神・珠莉咱娜妣（堕酔の邪神　ヂュリザーナピ）轉生體的莉莎娜
	 * 「暴虐之嵐」之中的澤多（ゾッド）……其實是原種吸血鬼澤爾哥多力歐（ゾルコドリオ）
	 *
	 * 《迅雷》修奈達
	 * 女矮人族梅爾汀
	 * 多爾頓
	 */
	['莉莎娜|莉莎娜', '莉莎娜'],
	['施耐德|修奈達|施奈德', '修奈達'],

	/**
	 * @todo 勇者
	 *
	 * 奈茵絡德（ナインロード）：
	 * 勇者・奈茵絡德，風與藝術之神・希薩利翁所召喚的勇者，本名九道陽菜
	 *
	 * ザッカートの試練
	 * 寨卡特
	 *
	 * 而她选择了打算在市镇小工厂上吊自杀的青年坂户启介。也就是之后的寨卡特。
	 */

	['[薩萨]卡特|寨卡特|寨卡特|劄坎托', '寨卡特'],
	['米[亥海][尔爾]|米海耶爾', '米亥爾'],
	['奈洛特|奈茵絡德', '奈茵絡德'],

	['海茵茲|海因茨|海恩兹|海因茲|海[因茵恩][茲茨]', '海因茨'],

	/**
	 * @todo 龍
	 *
	 * 五惡龍神?菲提魯古（五悪龍神フィディルグ）與暴邪龍神?魯維茲馮爾
	 * 龍皇神?瑪爾敦庫
	 * 暴邪龍神・魯維茲馮爾
	 */
	['弗迪[尔爾]克|菲提魯古|菲的卢戈', '菲提魯古'],

	//原《鳞王》
	['里昂|力歐', '里昂'],

	//卢卡斯

	['卡爾康|卡[尔爾]坎', '卡尔坎'],

	// @todo 卡西姆
	['卡希姆|卡西姆', '卡西姆'],
	['[費费菲][斯施斯][塔特塔]|菲斯塔', '费施特'],
	['傑諾|泽诺|杰諾', '泽诺'],
	['[莉丽莉][奈娜娜那]', '丽娜'],
	['丽(─+)娜', '丽$1娜'],

	/**
	 * 将军 / 宰相
	 *
	 * 哥 切薩雷 切萨雷 切札列
	 * 弟 庫爾特・雷酷斯德  雷庫斯德
	 *
	 * 托马斯・帕尔帕库 托马斯・帕鲁巴佩克
	 */
	['切[札萨薩][列雷]|切扎爾', '切薩雷'],
	['庫爾[特德]', '庫爾特'],
	['雷酷斯德|雷庫斯德', '雷庫斯德'],


	['托[马馬]斯|多瑪斯', '托馬斯'],
	['帕尔帕库|帕[鲁魯]巴佩克|帕爾帕貝庫|帕魯巴佩克', '帕爾巴佩克'],

	//戈尔单

	['拉伊蘭度|奈茵蘭多', '拉伊蘭度'],

	//尼阿奇鎮（ニアーキの町）：哈托納公爵領，遇到海茵茲的城鎮，dead907閣下翻作"米納其"
	['尼阿奇|米[納纳][其奇]', '米納其'],

	['塔罗斯海姆|塔洛斯海姆|塔洛海姆斯', '塔洛斯海姆'],

	/**
	 * @todo 薩烏隆公爵領
	 */
	['绍恩|[薩萨][烏乌][隆罗]|索伦|塞伦|薩烏羅', '薩烏隆'],

	['伊莉絲|伊莉斯|伊利斯', '伊莉絲'],
	['貝阿哈魯特|贝尔哈[鲁魯]德', '貝爾哈魯德'],
	[/\?(貝爾哈魯德)/ig, '・$1'],

	/**
	 * 力克・帕利斯（リック・パリス）
	 * 雷盟多・帕利斯（レイモンド・パリス）
	 */
	['力克|利克', '利克'],
	['雷盟多|雷蒙德', '雷蒙德'],
	['帕利斯|帕里斯|帕裏斯', '帕里斯'],

	//哈托納公爵領
	['哈[德托][纳納]|哈多那|哈多那|哈托納|哈托拉', '哈托納'],

	//巴爾切布魯古

	// 選王國
	['歐爾巴烏姆|欧鲍姆|[奥奧]卢邦', '奧卢邦'],

	//米爾古盾國
	['(?:米爾|米[鲁魯])[古固]盾[国國]|米魯庫盾国', '米魯固盾国'],

	/**
	 * 巴恩蓋亞大陸南部
	 */
	['邦盖[亞亚]|[巴伯]恩[蓋盖][亞亚]|柏凱恩', '巴恩蓋亞'],

	/**
	 * 山铜（古希腊语：Ὀρείχαλκος， 英语：Orichalcum，又译奧利哈鋼、俄瑞卡尔科斯、奥里哈鲁根、奧利哈康或王者金屬)
	 */
	['[奥奧歐][里理利][哈][爾尔鲁魯]?[鋼鋼康根]|山铜', '奧里哈鋼'],

	/**
	 * DUN #36
	 *
	 * 加朗之谷、多伦水宴洞、沃尔克斯亚龙草原、巴利肯减命山
	 *
	 * 扎納爾帕多娜地下的通稱為《避難所》的場所，其正式名稱為《無殼的曠野》
	 */
	['巴里根减少的生命山|巴里根减命山|巴利肯减命山|巴里肯滅命山', '巴利肯减命山'],
	['杜蘭水宴洞|多伦水宴洞', '多伦水宴洞'],
	['加蘭之谷|加朗之谷', '加朗之谷'],
	['(波庫斯|沃[尔爾]克斯)[亞亚][龙龍]草原', '沃尔克斯亚龙草原'],
	['[鳞|鱗]王(巢穴|之巢)', '鱗王之巢'],

	// オリジン

	['Origin', 'ORIGIN', 'ig'],
	['Lambda', 'LAMBDA', 'ig'],
	[/EARTH|亞斯\(アース\)/ig, 'EARTH'],
	['拉姆达|拉姆妲|拉姆達|拉姆达|拉姆妲', 'LAMBDA'],
	['[奥奧]利俊|歐力金|欧力金|起源之地', 'ORIGIN'],

	/**
	 * @todo 貝武多
	 *
	 * 阿密多帝國
	 * 馬修庫札爾・馮・貝爾烏德・阿密多
	 * マシュクザール・フォン・ベルウッド・アミッド
	 *
	 * 邪砕十五剑！？拯救过初代皇帝巴鲁修米特
	 * 初代皇帝巴尔施米特
	 */
	['[亚亞阿]密[特多]|阿米多|阿米德', '阿密特'],

	['冯|馮', '馮'],
	['[貝贝]武多|[貝贝][爾尔][烏乌]德|貝爾烏多|貝爾烏托', '貝武多'],
	['馬修庫札爾|玛修克札[鲁魯]|玛仕库扎[尔爾]|玛修克札[鲁魯]|馬修庫紮魯', '馬修庫札爾'],

	['巴尔施米特|巴鲁修米特', '巴鲁修米特'],

	['勇者[貝贝][鲁魯]特', '勇者貝武多'],

	/**
	 * @todo 豬頭人
	 *
	 * 神拉伯彼法多
	 *
	 * 布波比奥
	 *
	 * 布塔里昂皇子
	 *
	 * 高贵歐克天穹王，布奇帝
	 *
	 * 布奇塔斯
	 *
	 * 馬爾默公爵 皇帝馬修庫紮魯的堂兄弟
	 *
	 * 庫奧克・拉古修 库奥克是被美味食材所吸引的抵抗组织《萨乌罗解放战线》的内奸
	 *
	 * 肉婦好像就是指《墮肥的惡神》慕噗噗傑戈用自己的肉片創造出來給予豬人和高貴豬人的魔物
	 * 『堕肥的邪神』姆布布姜戈
	 */
	['布格甘|噗咯剛|普果刚|布格甘|普果剛', '布格甘'],
	['[猪豬][头頭]?人|[奥奧歐]克|豬人', '歐克'],
	['布塔力歐|布塔里昂|布塔裏昂', '布塔里昂'],

	['拉波比法多|拉伯彼法多|拉波彼法多|拉多彼法多|拉波比法特|拉波比法德', '拉波彼法多'],

	['姆布布姜戈|慕噗噗傑戈|姆布布杰戈', '姆布布姜戈'],
	['墮肥的惡神|堕肥悪神|堕肥的邪神', '堕肥の悪神'],


	//['布弗迪恩', '布弗迪恩'],
	['布迪魯特|布迪爾德', '布迪魯特'],

	/**
	 * @todo 狗头人
	 *
	 * 《猎之神》利沙雷
	 */
	['伽爾亞|伽爾奇', '伽爾亞'],

	//哥魯檔大祭司

	[`^　　+`, '　', 'mg'],

	/**
	 * @todo 食尸鬼
	 *
	 * 《佐佐冈提大森林》
	 * 守护着大陆南部食尸鬼们的神明，《暗与森的邪神》佐佐冈提
	 */
	['古尔|食尸鬼', '食尸鬼'],

	/**
	 * @todo SCYLLA 斯库拉
	 *
	 * LAMIA(拉米亚：蛇女)、SCYLLA(锡拉：章鱼女)、ARACHNE(阿拉克尼：蜘蛛女)、CENTAURS(萨托斯：半人马)、HARPY(哈比：鸟身女妖)和魔人族
	 */
	['锡[拉菈]|斯[库庫卡][拉菈]|斯卡拉|斯基拉', '斯库拉'],

	['[奥奧][爾尔][比莉][雅亞亚娅]|奥莉薇[雅亞亚娅]|奧利維[亞亚]', '奧爾比雅'],
	['梅雷彼[贝貝][爾尔]|梅烈[贝貝]伊尔|梅雷佩[贝貝][爾尔]|梅勒貝貝[鲁魯]|梅勒貝貝依爾', '梅烈貝伊爾'],
	['佩莉[贝貝][爾尔]|佩莉[贝貝]尔', '佩莉貝爾'],
	['普莉[贝貝][爾尔]', '普莉貝爾'],

	/**
	 * @todo 蜥人
	 */
	//傳奇蜥人戰士（リザードマンジェロニモ），夏咻加

	['勇士', '勇者'],
	['蜥蜴?人', '蜥人'],

	/**
	 * @todo 阿剌克涅
	 *
	 * 《甲壳与復眼的邪恶神》札納魯帕多那
	 *
	 * 《甲壳的邪神》札纳尔和《复眼的恶神》帕多娜这两柱神
	 * 和她们信奉的神明相同的名字《扎纳尔帕多娜》
	 *
	 * 庫涅莉亞公主
	 * 吉札尼亚
	 * 慕莎
	 * 多娜涅莉斯女王
	 *
	 *
	 **/
	['库内莉[亞亚]|庫涅莉[亞亚]', '庫涅莉亞'],
	['吉劄尼亞|吉札尼亞|吉札尼[亞亚]', '吉札尼亞'],

	['扎纳[爾尔]帕多娜|劄納[爾尔]帕多娜|札納魯帕多那|扎纳[爾尔]帕多娜|扎纳爾帕多娜|帕爾帕多娜', '扎納爾帕多娜'],
	['扎纳尔', '扎納爾'],
	['帕多那', '帕多娜'],

	['亲愛的饰品|亲密的饰品|親愛首飾|親愛的飾品', '亲密的饰品'],

	/**
	 * @todo 安普莎
	 *
	 * 慕莎
	 **/

	['(戰士|勇者|皇家衛士|騎兵)(蜥人|斯库拉)', '$2$1'],

	[`二米半`, '兩米半'],

	['畜力', '蓄力'],

	[`光${sp}生命属性`, '$1・$2'],
	[`神${sp}[魯菲瑪巴裘梅魯沛]`, '$1・$2'],
	[`勇者${sp}[寨娑]`, '$1・$2'],

	['成保', '城堡'],
	['成強', '城牆'],

	['成原', '成員'],

	['死属性魅了', '死属性魅惑'],

	['甄别', '徵選'],

	['炮[术術]', '砲術'],
	['炮', '砲'],

	//鎗

	[`^${sp}((?:独特|主动|被动)技能)`, '・$1', 'mg'],
	[`^${sp}(名前|種族|年齢|二つ名|ジョブ|レベル|ジョブ履歴|能力値|パッシブスキル|アクティブスキル|ユニークスキル|魔王の欠片|呪い)`, '・$1', 'mg'],
	['选举王[国國]', '选王国'],

	['首相', '宰相'],
	['維目包', '為目的'],

	['統合人', '統管者'],

	[/\n+(\(￣▽￣\)"?|（￣）￣）↗|\(\*\/ω＼\*\))\n+/g, '\n\n$1\n\n'],

	['付上', '附上'],

	['不死製者', '不死者'],
	['布死者', '不死者'],

	[/GOLEM/ig, 'GOLEM'],
	['(魔[像象]|哥雷姆|哥雷魯|GOLEM)(?!\\(?(?:魔[像象]|哥雷姆|GOLEM))', '魔像'],

	['(晉|進)[階阶](?!梯)', '晉階'],
	['[阶階]位|位[阶階]|[阶階][级級]', '位階'],

	[/(位階|Rank) *(\d+) */ig, function (..._m)
	{
		return _m[1] + StrUtil.toFullNumber(_m[2]);
	}],

	[/ *([a-z]) *(級)/ig, function (..._m)
	{
		return StrUtil.toFullEnglish(_m[1]) + _m[2];
	}],

	[/(級) *([a-z]) *(?![a-z0-9])/ig, function (..._m)
	{
		return _m[1] + StrUtil.toFullEnglish(_m[2]);
	}],

	['<-', '←'],

	//['板金', '板金'],
	['的種板金', '的重板金'],

	['女將屍', '女殭屍'],
	['占领君', '占领军'],

	//[/BOSS/ig, 'BOSS'],
	[/Rank/ig, 'Rank'],
	//[/GHOUL/ig, 'GHOUL'],
	[/Dampire|GHOUL|ELF|BOSS|DARK|undead|status/ig, function (...m)
	{
		return m[0].toUpperCase();
	}],

	['精靈', '精灵'],
	['(暗黑|黑暗|闇|暗)(精[灵靈]|艾尔芙)|(黑?暗|暗黑|黑暗|闇)精靈', '暗黑艾尔芙'],
	['(混血|半)精[灵靈]', '$1艾尔芙'],

	['壹', '一'],

	['禦使', '御使'],
	['墓园蜜蜂', '墓园蜂'],

	['level', 'LV', 'ig'],

	/**
	 * 维基感知
	 * 直感
	 */
	['维基感知|危险感知|危机感知', '危机感知'],
	['魔道引诱|魔道诱引', '魔道誘引'],
	['導き：魔道|引导：魔道', '引導：魔道'],
	['魔王[的の]?[再在][临来世]', '魔王再世'],
	['炼成|錬成', '錬成'],
	['创成|創成', '創成'],
	['创|創', '創'],
	['炼|錬', '錬'],
	['[魔魔]王[之的の][碎肉欠残殘]片|魔王の欠片|魔王殘片', '魔王の欠片'],
	['[魔魔]王[之的の]墨[袋汁]?', '魔王の墨'],

	['导士|導士', '導士'],
	['[轮輪][回廻]', '輪廻'],
	['[轮輪][回廻]转生|輪廻転生', '輪廻転生'],

	/**
	 * @todo 第八引导
	 *
	 * 布魯托（プルートー）
	 */
	['第八指引|第八引导|第八引導', '第八引導'],

	/**
	 * @todo Bravers
	 */
	[/Bravers/ig, 'Bravers'],
	[/《(布雷伯斯|勇者們)》/ig, '《Bravers》'],

	//海藤卡纳塔(彼方)
	['海腾|海藤', '海藤'],
	['海藤カナタ', '海藤卡纳塔'],

	//《演算》男
	['町田|町田', '町田'],
	['亞亂|亜乱', '亜乱'],

	//《監察官》女
	['島田泉|島田泉|岛田泉', '島田泉'],

	['圆藤硬弥|圓藤硬彌|円藤硬弥', '円藤硬弥'],
	['狮方院真理', '獅方院真理'],
	['成濑成美', '成瀬成美'],
	['三波浅黄', '三波浅黄'],

	['寛人|宽人', '寛人'],
	['博人', '博人'],

	['禦子|御子|禦子', '御子'],
	['国|國', '国'],
	['印像壁', '印象'],

	['属性|屬性', '属性'],

	[/^[ \t　]+/gm, ''],
	[/^_+\n/g, ''],
	[/\n,\n/g, '\n\n'],
	[/([・：]) /g, '$1'],

	[/\n+\(￣▽￣\)"\n+/g, '\n\n\n\n'],

	[/\<\-/g, '←'],

	//[/([」』）])[ ]*\[([^\[\]\n]+)\]$/gm, '$1《$2》'],

	[/〔([^\n〔〕（）\(\)]+)〕/g, '（$1）'],

	[/^【([^【】\n]+)】$/gm, '「$1」'],

	[/^\*(?!\*)/gm, '＊'],

	...sublib.lazymarks[4],

	...sublib.lazymarks[0],
	...sublib.lazymarks[1],
	...sublib.lazymarks[2],
	...sublib.lazymarks[3],

];

// 需要人工確認的屏蔽字或錯字用語等等
export const words_maybe = [
	// 將對主角用的用語改為 小家伙
	'小.?子',

	/(.{1,2})?(不死(?!者|巨人|骷髏|沃[尔爾]克斯|小虫|化|骷髅|虫|树魔|性|族))(.{1,2})?/g,
	'亞斯',

	'艾赞',

	'[範范班泛](?![達达達][爾尔鲁魯]|大人|[围圍疇于起畴])',

	'贝鲁特',

];

import * as self from './四度目は嫌な死属性魔術師';

export default self;
