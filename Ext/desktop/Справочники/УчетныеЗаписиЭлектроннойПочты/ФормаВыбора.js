﻿Ext.define('Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:566px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Учетные записи электронной почты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:550px;height:320px;',
			height: 320,width: 550,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'SMTPСервер',
					width:'120',
					dataIndex:'SMTPСервер',
					flex:1,
				},
				{
					text:'POP3 сервер',
					width:'350',
					dataIndex:'POP3Сервер',
					flex:1,
				},
				{
					text:'Порт SMTP',
					width:'28',
					dataIndex:'ПортSMTP',
					flex:1,
				},
				{
					text:'Порт POP3',
					width:'28',
					dataIndex:'ПортPOP3',
					flex:1,
				},
				{
					text:'Логин',
					width:'350',
					dataIndex:'Логин',
					flex:1,
				},
				{
					text:'Пароль',
					width:'350',
					dataIndex:'Пароль',
					flex:1,
				},
				{
					text:'Требуется SMTP Аутентификация',
					width:'70',
					dataIndex:'ТребуетсяSMTPАутентификация',
					flex:1,
				},
				{
					text:'Логин SMTP',
					width:'350',
					dataIndex:'ЛогинSMTP',
					flex:1,
				},
				{
					text:'Пароль SMTP',
					width:'350',
					dataIndex:'ПарольSMTP',
					flex:1,
				},
				{
					text:'Время ожидания сервера',
					width:'28',
					dataIndex:'ВремяОжиданияСервера',
					flex:1,
				},
				{
					text:'Оставлять копии сообщений на сервере',
					width:'70',
					dataIndex:'ОставлятьКопииСообщенийНаСервере',
					flex:1,
				},
				{
					text:'Удалять письма с сервера через',
					width:'70',
					dataIndex:'УдалятьПисьмаССервераЧерез',
					flex:1,
				},
				{
					text:'Количество дней удаления писем с сервера',
					width:'21',
					dataIndex:'КоличествоДнейУдаленияПисемССервера',
					flex:1,
				},
				{
					text:'Адрес электронной почты',
					width:'350',
					dataIndex:'АдресЭлектроннойПочты',
					flex:1,
				},
				{
					text:'Группа входящие',
					width:'175',
					dataIndex:'ГруппаВходящие',
					flex:1,
				},
				{
					text:'Группа исходящие',
					width:'175',
					dataIndex:'ГруппаИсходящие',
					flex:1,
				},
				{
					text:'Группа удаленные',
					width:'175',
					dataIndex:'ГруппаУдаленные',
					flex:1,
				},
				{
					text:'Группа черновики',
					width:'175',
					dataIndex:'ГруппаЧерновики',
					flex:1,
				},
				{
					text:'Формат текста письма по умолчанию',
					width:'100',
					dataIndex:'ФорматТекстаПисьмаПоУмолчанию',
					flex:1,
				},
				{
					text:'Текст подписи',
					width:'100',
					dataIndex:'ТекстПодписи',
					flex:1,
				},
				{
					text:'Добавлять подпись к исходящим письмам',
					width:'70',
					dataIndex:'ДобавлятьПодписьКИсходящимПисьмам',
					flex:1,
				},
				{
					text:'Добавлять подпись к ответам и пересылкам',
					width:'70',
					dataIndex:'ДобавлятьПодписьКОтветамИПересылкам',
					flex:1,
				},
				{
					text:'Авто получение/отправка сообщений',
					width:'63',
					dataIndex:'АвтоПолучениеОтправкаСообщений',
					flex:1,
				},
				{
					text:'Интервал авто получения/отправки сообщений (в минутах)',
					width:'21',
					dataIndex:'ИнтервалАвтоПолученияОтправкиСообщений',
					flex:1,
				},
				{
					text:'Ответственный за авто получение отправку сообщений',
					width:'350',
					dataIndex:'ОтветственныйЗаАвтоПолучениеОтправкуСообщений',
					flex:1,
				},
				{
					text:'Помещать ответы и переадресации в туже группу',
					width:'70',
					dataIndex:'ПомещатьОтветыИПереадресацииВТужеГруппу',
					flex:1,
				},
				{
					text:'Действие автополучения отправки сообщений',
					width:'100',
					dataIndex:'ДействиеАвтополученияОтправкиСообщений',
					flex:1,
				},
				{
					text:'Автоматическая установка пометки рассмотрено',
					width:'70',
					dataIndex:'АвтоматическаяУстановкаПометкиРассмотрено',
					flex:1,
				},
				{
					text:'Интервал автоматической установки отметки рассмотрено',
					width:'14',
					dataIndex:'ИнтервалАвтоматическойУстановкиОтметкиРассмотрено',
					flex:1,
				},
				{
					text:'Использовать классификацию писем по предметам',
					width:'70',
					dataIndex:'ИспользоватьКлассификациюПисемПоПредметам',
					flex:1,
				},
				{
					text:'Заполнять пустой предмет для новых писем из темы письма',
					width:'70',
					dataIndex:'ЗаполнятьПустойПредметДляНовыхПисемИзТемыПисьма',
					flex:1,
				},
				{
					text:'Для входящих ответов и переадресаций искать письма основания и заполнять предмет',
					width:'70',
					dataIndex:'ДляВходящихОтветовИПереадресацийИскатьПисьмаОснованияИЗаполнятьПредмет',
					flex:1,
				},
				{
					text:'Для входящих ответов и переадресаций искать письма основания и заполнять основание нового письма',
					width:'70',
					dataIndex:'ДляВходящихОтветовИПереадресацийИскатьПисьмаОснованияИЗаполнятьОснованиеНовогоПисьма',
					flex:1,
				},
				{
					text:'Автосохранение писем',
					width:'70',
					dataIndex:'АвтосохранениеПисем',
					flex:1,
				},
				{
					text:'Интервал автосохранения писем',
					width:'21',
					dataIndex:'ИнтервалАвтосохраненияПисем',
					flex:1,
				},
				{
					text:'Формат письма для ответов и переадресаций брать из исходного',
					width:'70',
					dataIndex:'ФорматПисьмаДляОтветовИПереадресацийБратьИзИсходного',
					flex:1,
				},
				{
					text:'Автоматическая установка пометки рассмотрено при ответе',
					width:'70',
					dataIndex:'АвтоматическаяУстановкаПометкиРассмотреноПриОтвете',
					flex:1,
				},
				{
					text:'Автоматическая установка пометки рассмотрено при ответе или переадресации',
					width:'70',
					dataIndex:'АвтоматическаяУстановкаПометкиРассмотреноПриПолученииОтвета',
					flex:1,
				},
				{
					text:'Для входящих ответов и переадресаций искать письма основания и заполнять группу писем нового письма',
					width:'70',
					dataIndex:'ДляВходящихОтветовИПереадресацийИскатьПисьмаОснованияИЗаполнятьГруппуПисемНовогоПисьма',
					flex:1,
				},
				{
					text:'Кодировка писем по умолчанию',
					width:'350',
					dataIndex:'КодировкаПисемПоУмолчанию',
					flex:1,
				},
				{
					text:'Кодировку письма для ответов брать из исходного',
					width:'70',
					dataIndex:'КодировкуПисьмаДляОтветовБратьИзИсходного',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УчетныеЗаписиЭлектроннойПочты/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'SMTPСервер',
					},
					{
						name:'POP3Сервер',
					},
					{
						name:'ПортSMTP',
					},
					{
						name:'ПортPOP3',
					},
					{
						name:'Логин',
					},
					{
						name:'Пароль',
					},
					{
						name:'ТребуетсяSMTPАутентификация',
					},
					{
						name:'ЛогинSMTP',
					},
					{
						name:'ПарольSMTP',
					},
					{
						name:'ВремяОжиданияСервера',
					},
					{
						name:'ОставлятьКопииСообщенийНаСервере',
					},
					{
						name:'УдалятьПисьмаССервераЧерез',
					},
					{
						name:'КоличествоДнейУдаленияПисемССервера',
					},
					{
						name:'АдресЭлектроннойПочты',
					},
					{
						name:'ГруппаВходящие',
					},
					{
						name:'ГруппаИсходящие',
					},
					{
						name:'ГруппаУдаленные',
					},
					{
						name:'ГруппаЧерновики',
					},
					{
						name:'ФорматТекстаПисьмаПоУмолчанию',
					},
					{
						name:'ТекстПодписи',
					},
					{
						name:'ДобавлятьПодписьКИсходящимПисьмам',
					},
					{
						name:'ДобавлятьПодписьКОтветамИПересылкам',
					},
					{
						name:'АвтоПолучениеОтправкаСообщений',
					},
					{
						name:'ИнтервалАвтоПолученияОтправкиСообщений',
					},
					{
						name:'ОтветственныйЗаАвтоПолучениеОтправкуСообщений',
					},
					{
						name:'ПомещатьОтветыИПереадресацииВТужеГруппу',
					},
					{
						name:'ДействиеАвтополученияОтправкиСообщений',
					},
					{
						name:'АвтоматическаяУстановкаПометкиРассмотрено',
					},
					{
						name:'ИнтервалАвтоматическойУстановкиОтметкиРассмотрено',
					},
					{
						name:'ИспользоватьКлассификациюПисемПоПредметам',
					},
					{
						name:'ЗаполнятьПустойПредметДляНовыхПисемИзТемыПисьма',
					},
					{
						name:'ДляВходящихОтветовИПереадресацийИскатьПисьмаОснованияИЗаполнятьПредмет',
					},
					{
						name:'ДляВходящихОтветовИПереадресацийИскатьПисьмаОснованияИЗаполнятьОснованиеНовогоПисьма',
					},
					{
						name:'АвтосохранениеПисем',
					},
					{
						name:'ИнтервалАвтосохраненияПисем',
					},
					{
						name:'ФорматПисьмаДляОтветовИПереадресацийБратьИзИсходного',
					},
					{
						name:'АвтоматическаяУстановкаПометкиРассмотреноПриОтвете',
					},
					{
						name:'АвтоматическаяУстановкаПометкиРассмотреноПриПолученииОтвета',
					},
					{
						name:'ДляВходящихОтветовИПереадресацийИскатьПисьмаОснованияИЗаполнятьГруппуПисемНовогоПисьма',
					},
					{
						name:'КодировкаПисемПоУмолчанию',
					},
					{
						name:'КодировкуПисьмаДляОтветовБратьИзИсходного',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:566px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});