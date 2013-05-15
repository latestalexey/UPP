﻿Ext.define('Документы.ФормированиеПотребностей.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:650px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Формирование потребностей',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:88px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:188px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:59px;width:634px;height:332px;',
			height: 332,width: 634,
			items:
			[
				{
					title:'Планы продаж',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сценарий',
					width:'100',
					dataIndex:'Сценарий',
					flex:1,
				},
				{
					text:'Проект',
					width:'100',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'100',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Дата нач.',
					width:'80',
					dataIndex:'ДатаНач',
					flex:1,
				},
				{
					text:'Дата кон.',
					width:'80',
					dataIndex:'ДатаКон',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеПотребностей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Сценарий',
					},
					{
						name:'Проект',
					},
					{
						name:'Подразделение',
					},
					{
						name:'ДатаНач',
					},
					{
						name:'ДатаКон',
					},
				]
			},
		},
					]
				},
				{
					title:'Планы производства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сценарий',
					width:'100',
					dataIndex:'Сценарий',
					flex:1,
				},
				{
					text:'Проект',
					width:'100',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'100',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Дата нач.',
					width:'80',
					dataIndex:'ДатаНач',
					flex:1,
				},
				{
					text:'Дата кон.',
					width:'80',
					dataIndex:'ДатаКон',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеПотребностей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Сценарий',
					},
					{
						name:'Проект',
					},
					{
						name:'Подразделение',
					},
					{
						name:'ДатаНач',
					},
					{
						name:'ДатаКон',
					},
				]
			},
		},
					]
				},
				{
					title:'Планы закупок',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сценарий',
					width:'100',
					dataIndex:'Сценарий',
					flex:1,
				},
				{
					text:'Проект',
					width:'100',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'100',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Дата нач.',
					width:'80',
					dataIndex:'ДатаНач',
					flex:1,
				},
				{
					text:'Дата кон.',
					width:'80',
					dataIndex:'ДатаКон',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеПотребностей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Сценарий',
					},
					{
						name:'Проект',
					},
					{
						name:'Подразделение',
					},
					{
						name:'ДатаНач',
					},
					{
						name:'ДатаКон',
					},
				]
			},
		},
					]
				},
				{
					title:'Внутренние заказы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Заказ',
					width:'220',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Дата потребности',
					width:'100',
					dataIndex:'ДатаПотребности',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеПотребностей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Заказ',
					},
					{
						name:'ДатаПотребности',
					},
				]
			},
		},
					]
				},
				{
					title:'Заказы покупателей',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Заказ',
					width:'220',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Дата потребности',
					width:'100',
					dataIndex:'ДатаПотребности',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеПотребностей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Заказ',
					},
					{
						name:'ДатаПотребности',
					},
				]
			},
		},
					]
				},
				{
					title:'Заказы на производство',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Заказ',
					width:'220',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Дата потребности',
					width:'100',
					dataIndex:'ДатаПотребности',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеПотребностей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Заказ',
					},
					{
						name:'ДатаПотребности',
					},
				]
			},
		},
					]
				},
				{
					title:'Планы посменные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Проект',
					width:'100',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Заказ',
					width:'100',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Дата нач.',
					width:'80',
					dataIndex:'ДатаНач',
					flex:1,
				},
				{
					text:'Дата кон.',
					width:'80',
					dataIndex:'ДатаКон',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеПотребностей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Проект',
					},
					{
						name:'Заказ',
					},
					{
						name:'ДатаНач',
					},
					{
						name:'ДатаКон',
					},
				]
			},
		},
					]
				},
				{
					title:'Потребности',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Дата потребности',
					width:'100',
					dataIndex:'ДатаПотребности',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'60',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'200',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'200',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Количество',
					width:'68',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Ед.',
					width:'50',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'К.',
					width:'45',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Товар/тара',
					width:'70',
					dataIndex:'ТоварТара',
					flex:1,
				},
				{
					text:'Конечная продукция',
					width:'200',
					dataIndex:'КонечнаяПродукция',
					flex:1,
				},
				{
					text:'Заказ',
					width:'200',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Проект',
					width:'200',
					dataIndex:'Проект',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеПотребностей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ДатаПотребности',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'ТоварТара',
					},
					{
						name:'КонечнаяПродукция',
					},
					{
						name:'Заказ',
					},
					{
						name:'Проект',
					},
				]
			},
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:6px;top:53px;width:620px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразд - ние:',
			style: 'position:absolute;left:6px;top:74px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:86px;top:74px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный1',
			text: 'Ответственный:',
			style: 'position:absolute;left:317px;top:74px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:407px;top:74px;width:219px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:16px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Сложение источников',
			style: 'position:absolute;left:6px;top:27px;width:140px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Объединение источников',
			style: 'position:absolute;left:151px;top:27px;width:154px;height:19px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:168px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:398px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:95px;top:398px;width:547px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'Действие открыть свойства',
				},
				{
					text:'Действие открыть категории',
				},
				'-',
				{
					text:'Выбирать даты периодом',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:650px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});