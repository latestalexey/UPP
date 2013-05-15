﻿Ext.define('Документы.ЗаявлениеОбОбменеДубликатеСтраховогоСвидетельства.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:644px;height:464px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заявление об обмене, дубликате страхового свидетельства',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:439px;width:644px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Программой CheckXML',
				},
				{
					text:'Программой CheckUFA',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:412px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:412px;width:546px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:628px;height:115px;',
			height: 115,width: 628,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:0px;top:0px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:82px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:164px;top:0px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:182px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:24px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:82px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Вид заявлений',
			style: 'position:absolute;left:0px;top:51px;width:628px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:322px;top:0px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Исполнитель',
			style: 'position:absolute;left:413px;top:0px;width:215px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПачки',
			text: 'Номер пачки:',
			style: 'position:absolute;left:322px;top:24px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПачки',
			style: 'position:absolute;left:413px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Об обмене страхового свидетельства (АДВ-2)',
			style: 'position:absolute;left:6px;top:72px;width:252px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'О выдаче дубликата страхового свидетельства (АДВ-3)',
			style: 'position:absolute;left:6px;top:92px;width:300px;height:15px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:189px;width:628px;height:197px;',
			height: 197,width: 628,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:21px;width:628px;height:176px;',
			height: 176,width: 628,
			items:
			[
				{
					title:'Сотрудники',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:614px;height:125px;',
			height: 125,width: 614,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'220',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Дата получения свидетельства',
					width:'180',
					dataIndex:'ДатаПолученияСвидетельства',
					flex:1,
				},
				{
					text:'Отметка о представлении сведений',
					width:'188',
					dataIndex:'ОтметкаОПредставленииСведений',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаявлениеОбОбменеДубликатеСтраховогоСвидетельства/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'ДатаПолученияСвидетельства',
					},
					{
						name:'ОтметкаОПредставленииСведений',
					},
				]
			},
		},
					]
				},
				{
					title:'Данные, указанные в свидетельстве',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:614px;height:125px;',
			height: 125,width: 614,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Физическое лицо',
					width:'235',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Пол',
					width:'45',
					dataIndex:'ПолВСвидетельстве',
					flex:1,
				},
				{
					text:'Дата рождения',
					width:'90',
					dataIndex:'ДатаРожденияВСвидетельстве',
					flex:1,
				},
				{
					text:'№ свидетельства',
					width:'100',
					dataIndex:'СтраховойНомерПФРВСвидетельстве',
					flex:1,
				},
				{
					text:'Фамилия',
					width:'130',
					dataIndex:'ФамилияВСвидетельстве',
					flex:1,
				},
				{
					text:'Имя',
					width:'60',
					dataIndex:'ИмяВСвидетельстве',
					flex:1,
				},
				{
					text:'Отчество',
					width:'70',
					dataIndex:'ОтчествоВСвидетельстве',
					flex:1,
				},
				{
					text:'Место рождения',
					width:'150',
					dataIndex:'МестоРожденияВСвидетельстве',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаявлениеОбОбменеДубликатеСтраховогоСвидетельства/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'ПолВСвидетельстве',
					},
					{
						name:'ДатаРожденияВСвидетельстве',
					},
					{
						name:'СтраховойНомерПФРВСвидетельстве',
					},
					{
						name:'ФамилияВСвидетельстве',
					},
					{
						name:'ИмяВСвидетельстве',
					},
					{
						name:'ОтчествоВСвидетельстве',
					},
					{
						name:'МестоРожденияВСвидетельстве',
					},
				]
			},
		},
					]
				},
				{
					title:'Изменившиеся данные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:614px;height:125px;',
			height: 125,width: 614,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Физическое лицо',
					width:'135',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Пол',
					width:'45',
					dataIndex:'Пол',
					flex:1,
				},
				{
					text:'Дата рождения',
					width:'90',
					dataIndex:'ДатаРождения',
					flex:1,
				},
				{
					text:'Фамилия',
					width:'60',
					dataIndex:'Фамилия',
					flex:1,
				},
				{
					text:'Имя',
					width:'60',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Отчество',
					width:'60',
					dataIndex:'Отчество',
					flex:1,
				},
				{
					text:'Отменено',
					width:'60',
					dataIndex:'ПризнакОтменыОтчества',
					flex:1,
				},
				{
					text:'Место рождения',
					width:'120',
					dataIndex:'МестоРождения',
					flex:1,
				},
				{
					text:'Отменено',
					width:'60',
					dataIndex:'ПризнакОтменыМестаРождения',
					flex:1,
				},
				{
					text:'Адрес регистрации',
					width:'90',
					dataIndex:'АдресРегистрации',
					flex:1,
				},
				{
					text:'Адрес фактический',
					width:'90',
					dataIndex:'АдресФактический',
					flex:1,
				},
				{
					text:'Гражданство',
					width:'80',
					dataIndex:'Гражданство',
					flex:1,
				},
				{
					text:'Телефоны',
					width:'60',
					dataIndex:'Телефоны',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаявлениеОбОбменеДубликатеСтраховогоСвидетельства/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'Пол',
					},
					{
						name:'ДатаРождения',
					},
					{
						name:'Фамилия',
					},
					{
						name:'Имя',
					},
					{
						name:'Отчество',
					},
					{
						name:'ПризнакОтменыОтчества',
					},
					{
						name:'МестоРождения',
					},
					{
						name:'ПризнакОтменыМестаРождения',
					},
					{
						name:'АдресРегистрации',
					},
					{
						name:'АдресФактический',
					},
					{
						name:'Гражданство',
					},
					{
						name:'Телефоны',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Список заявлений',
			style: 'position:absolute;left:0px;top:0px;width:628px;height:16px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:628px;height:41px;',
			height: 41,width: 628,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:628px;height:35px;',
			height: 35,width: 628,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Заменять букву "ё"',
			style: 'position:absolute;left:8px;top:394px;width:614px;height:15px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:644px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
});