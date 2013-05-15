﻿Ext.define('Обработки.ТОНастройка.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:866px;height:519px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подключение и настройка торгового оборудования',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:88px;width:850px;height:398px;',
			height: 398,width: 850,
			items:
			[
				{
					title:'Сканеры штрихкода',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:612px;height:359px;',
			height: 359,width: 612,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Подключено',
					flex:1,
				},
				{
					text:'Модель',
					width:'571',
					dataIndex:'Модель',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТОНастройка/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Подключено',
					},
					{
						name:'Модель',
					},
				]
			},
		},
					]
				},
				{
					title:'Фискальные регистраторы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:612px;height:359px;',
			height: 359,width: 612,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Подключено',
					flex:1,
				},
				{
					text:'Модель',
					width:'346',
					dataIndex:'Модель',
					flex:1,
				},
				{
					text:'Касса ККМ',
					width:'225',
					dataIndex:'КассаККМ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТОНастройка/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Подключено',
					},
					{
						name:'Модель',
					},
					{
						name:'КассаККМ',
					},
				]
			},
		},
					]
				},
				{
					title:'Терминалы сбора данных',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:612px;height:359px;',
			height: 359,width: 612,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Подключено',
					flex:1,
				},
				{
					text:'Модель',
					width:'571',
					dataIndex:'Модель',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТОНастройка/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Подключено',
					},
					{
						name:'Модель',
					},
				]
			},
		},
					]
				},
				{
					title:'Дисплеи покупателя',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:612px;height:359px;',
			height: 359,width: 612,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Подключено',
					flex:1,
				},
				{
					text:'Модель',
					width:'346',
					dataIndex:'Модель',
					flex:1,
				},
				{
					text:'Касса ККМ',
					width:'225',
					dataIndex:'КассаККМ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТОНастройка/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Подключено',
					},
					{
						name:'Модель',
					},
					{
						name:'КассаККМ',
					},
				]
			},
		},
					]
				},
				{
					title:'Считыватели магнитных карт',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:612px;height:359px;',
			height: 359,width: 612,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Подключено',
					flex:1,
				},
				{
					text:'Модель',
					width:'571',
					dataIndex:'Модель',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТОНастройка/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Подключено',
					},
					{
						name:'Модель',
					},
				]
			},
		},
					]
				},
				{
					title:'Электронные весы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:612px;height:359px;',
			height: 359,width: 612,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Подключено',
					flex:1,
				},
				{
					text:'Модель',
					width:'571',
					dataIndex:'Модель',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТОНастройка/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Подключено',
					},
					{
						name:'Модель',
					},
				]
			},
		},
					]
				},
				{
					title:'Весы с печатью этикеток',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:612px;height:359px;',
			height: 359,width: 612,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Подключено',
					flex:1,
				},
				{
					text:'Модель',
					width:'571',
					dataIndex:'Модель',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТОНастройка/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Подключено',
					},
					{
						name:'Модель',
					},
				]
			},
		},
					]
				},
				{
					title:'ККМ в режиме Offline',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:612px;height:359px;',
			height: 359,width: 612,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Подключено',
					flex:1,
				},
				{
					text:'Модель',
					width:'346',
					dataIndex:'Модель',
					flex:1,
				},
				{
					text:'Касса ККМ',
					width:'225',
					dataIndex:'КассаККМ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТОНастройка/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Подключено',
					},
					{
						name:'Модель',
					},
					{
						name:'КассаККМ',
					},
				]
			},
		},
					]
				},
				{
					title:'ККМ в режиме Online',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:612px;height:359px;',
			height: 359,width: 612,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Подключено',
					flex:1,
				},
				{
					text:'Модель',
					width:'346',
					dataIndex:'Модель',
					flex:1,
				},
				{
					text:'Касса ККМ',
					width:'225',
					dataIndex:'КассаККМ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТОНастройка/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Подключено',
					},
					{
						name:'Модель',
					},
					{
						name:'КассаККМ',
					},
				]
			},
		},
					]
				},
				{
					title:'Эквайринговые системы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:612px;height:359px;',
			height: 359,width: 612,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Подключено',
					flex:1,
				},
				{
					text:'Модель',
					width:'571',
					dataIndex:'Модель',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТОНастройка/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Подключено',
					},
					{
						name:'Модель',
					},
				]
			},
		},
					]
				},
				{
					title:'Считыватели RFID меток',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:612px;height:359px;',
			height: 359,width: 612,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Подключено',
					flex:1,
				},
				{
					text:'Модель',
					width:'571',
					dataIndex:'Модель',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТОНастройка/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Подключено',
					},
					{
						name:'Модель',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодключениеИНастройкаТорговогоОборудования',
			text: 'Подключение и настройка торгового оборудования',
			style: 'position:absolute;left:8px;top:6px;width:850px;height:26px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'ДляКомпьютера',
			text: 'для компьютера ""',
			style: 'position:absolute;left:8px;top:32px;width:850px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'ПомощникПодключения',
			text: 'Помощник подключения',
			style: 'position:absolute;left:8px;top:57px;width:154px;height:25px;',
		},
		{
			xtype: 'button',
			name: 'ОбработкиОбслуживания',
			text: 'Обработки обслуживания',
			style: 'position:absolute;left:167px;top:57px;width:153px;height:25px;',
		},
		{
			xtype: 'button',
			name: 'Справка',
			text: 'Справка',
			style: 'position:absolute;left:778px;top:57px;width:80px;height:25px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:494px;width:866px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Проверить все подключенное оборудование',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});