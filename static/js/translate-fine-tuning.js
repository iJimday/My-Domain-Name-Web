translate.language.setUrlParamControl('lang'); //根据URL传参控制以何种语种显示
translate.selectLanguageTag.show = false //设置不显示语言选择的select下拉框
translate.language.setLocal('chinese_simplified'); //设置本地语种为简体中文
translate.language.translateLanguagesRange = ['chinese_simplified']; //只翻译简体中文
translate.setAutoDiscriminateLocalLanguage(); //设置用户第一次用时，自动识别其所使用的语种进行切换
translate.visual.webPageLoadTranslateBeforeHiddenText(); //自动隐藏页面文字，避免先显示原文的缺陷
translate.nomenclature.append('chinese_simplified', 'english', `
	小趴菜 | 小戴米铺=Jimday's Domains
	小趴菜 - 小戴米铺=Jimday's Domains
	小戴米铺=Jimday's Domains
	精选好域名，价格透明；支持担保交易与快速过户=Premium domains, transparent pricing. Support escrow transactions and fast transfers.
	请联系我：=Contact me: 
	含义:=Meaning: 
	注册商=Registrar
	到期时间=Expiry date
	状态=Current status
	价格:=Price: 
	阿里云=Aliyun
	腾讯云=Tencent Cloud
	我的其他米铺=Third-party Marketplaces
	爱名网=22.cn
	易名=ename
	精选=Featured
	特惠=Promotion
	友情链接=Links
	排序方式=Sort by
	默认排序=Default
	价格 低→高=Price Low→High
	价格 高→低=Price High→Low
	域名长度 短→长=Length Short→Long
	域名长度 长→短=Length Long→Short
	到期时间 近→远=Expiry Near→Far
	到期时间 远→近=Expiry Far→Near
	价格合适可售=Reasonable price, can be sold
	¥=CNY
	已售出=Sold
	切换语言=Language
	常见问题 (FAQ)=FAQ
	如何购买？=How to purchase?
	过户需要多久？=How long does transfer take?
	交易是否安全？=Is the transaction safe?
	通过邮箱 =Contact us via email 
	联系我们，告知想购买的域名。您可以附上预算或出价。确认价格后，可选择站内 Push、转移码 (Auth Code) 或第三方平台/担保交易。=and let us know which domain you're interested in. You can provide your budget or make an offer. After confirming the price, you can choose direct push transfer, transfer code (Auth Code), or third-party platform/escrow service.
	站内 Push (同注册商) 通常几分钟完成。转移码转入其他注册商通常需 5-7 天，取决于目标注册商的处理速度。=Direct push transfer (same registrar) typically completes in minutes. Transfer via Auth Code to another registrar usually takes 5-7 days, depending on the receiving registrar's processing time.
	妥的。优先采用第三方平台/担保交易 (阿里云 等) 确保安全。支持支付宝、微信或平台指定支付方式。=Absolutely. We prioritize using third-party platforms and escrow services (Aliyun etc.) to ensure safety. We support Alipay, WeChat, and platform-specific payment methods.
`); //自定义翻译术语
translate.ignore.text.push('中文'); //翻译时忽略指定的文字不翻译
translate.ignore.text.push('English'); //翻译时忽略指定的文字不翻译
