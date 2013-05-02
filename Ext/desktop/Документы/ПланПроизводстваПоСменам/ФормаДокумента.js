﻿Ext.define('Документы.ПланПроизводстваПоСменам.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:670px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'План производства по сменам',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомера',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДаты',
			text: 'от',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:368px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:368px;width:568px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
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
					text:'Выполнить планирование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:395px;width:670px;height:25px;',
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
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:58px;width:654px;height:303px;',
			height: 303,width: 654,
			items:
			[
				{
					title:'Производство по планам',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:640px;height:247px;',
			height: 247,width: 640,
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
					width:'167',
					dataIndex:'Сценарий',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'137',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Проект',
					width:'123',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Дата нач',
					width:'80',
					dataIndex:'ДатаНач',
					flex:1,
				},
				{
					text:'Дата кон',
					width:'80',
					dataIndex:'ДатаКон',
					flex:1,
				},
				{
					text:'Дата запуска',
					width:'80',
					dataIndex:'ДатаЗапуска',
					flex:1,
				},
				{
					text:'Дата выпуска',
					width:'80',
					dataIndex:'ДатаВыпуска',
					flex:1,
				},
				{
					text:'Вариант распределения',
					width:'200',
					dataIndex:'ВариантРаспределенияВыпусков',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланПроизводстваПоСменам/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Сценарий',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Проект',
					},
					{
						name:'ДатаНач',
					},
					{
						name:'ДатаКон',
					},
					{
						name:'ДатаЗапуска',
					},
					{
						name:'ДатаВыпуска',
					},
					{
						name:'ВариантРаспределенияВыпусков',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Производство по заказам',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:640px;height:247px;',
			height: 247,width: 640,
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
					text:'Проект',
					width:'100',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Дата запуска',
					width:'80',
					dataIndex:'ДатаЗапуска',
					flex:1,
				},
				{
					text:'Дата выпуска',
					width:'80',
					dataIndex:'ДатаВыпуска',
					flex:1,
				},
				{
					text:'Вариант распределения',
					width:'200',
					dataIndex:'ВариантРаспределенияВыпусков',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланПроизводстваПоСменам/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Заказ',
					},
					{
						name:'Проект',
					},
					{
						name:'ДатаЗапуска',
					},
					{
						name:'ДатаВыпуска',
					},
					{
						name:'ВариантРаспределенияВыпусков',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Индивидуальные выпуски',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Параметры',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:640px;height:247px;',
			height: 247,width: 640,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Код',
					width:'100',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'120',
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
					width:'45',
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
					text:'Дата запуска',
					width:'80',
					dataIndex:'ДатаЗапуска',
					flex:1,
				},
				{
					text:'Дата выпуска',
					width:'80',
					dataIndex:'ДатаВыпуска',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'200',
					dataIndex:'Спецификация',
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
					width:'100',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Вариант распределения',
					width:'200',
					dataIndex:'ВариантРаспределенияВыпусков',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланПроизводстваПоСменам/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
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
						name:'ДатаЗапуска',
					},
					{
						name:'ДатаВыпуска',
					},
					{
						name:'Спецификация',
					},
					{
						name:'Заказ',
					},
					{
						name:'Проект',
					},
					{
						name:'ВариантРаспределенияВыпусков',
					},
				]
			},
		},
					]
				},
				{
					title:'Детальное планирование',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:24px;',
			items:
			[
				'-',
				{
					text:'Свернуть дерево',
				},
				{
					text:'Раскрыть дерево',
				},
				'-',
				{
					text:'Получить данные',
				},
				'-',
				{
					text:'Свернуть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:640px;height:200px;',
			height: 200,width: 640,
			columns:
			[
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'100',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Вид воспроизводства',
					width:'100',
					dataIndex:'ВидВоспроизводства',
					flex:1,
				},
				{
					text:'Количество',
					width:'100',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'100',
					dataIndex:'Спецификация',
					flex:1,
				},
				{
					text:'Заказ',
					width:'100',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Проект',
					width:'100',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Дата запуска',
					width:'100',
					dataIndex:'ДатаЗапуска',
					flex:1,
				},
				{
					text:'Дата выпуска',
					width:'100',
					dataIndex:'ДатаВыпуска',
					flex:1,
				},
				{
					text:'Вариант распределения выпусков',
					width:'100',
					dataIndex:'ВариантРаспределенияВыпусков',
					flex:1,
				},
				{
					text:'В рамках плана',
					width:'100',
					dataIndex:'ВРамкахПлана',
					flex:1,
				},
				{
					text:'По данным планов',
					width:'100',
					dataIndex:'ПоДаннымПланов',
					flex:1,
				},
				{
					text:'Конечная продукция',
					width:'100',
					dataIndex:'КонечнаяПродукция',
					flex:1,
				},
				{
					text:'Количество по спецификации',
					width:'89',
					dataIndex:'КоличествоПоСпецификации',
					flex:1,
				},
				{
					text:'Ключ строки',
					width:'111',
					dataIndex:'КлючСтроки',
					flex:1,
				},
				{
					text:'Номер операции',
					width:'100',
					dataIndex:'НомерОперацииМаршрута',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланПроизводстваПоСменам/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'ВидВоспроизводства',
					},
					{
						name:'Количество',
					},
					{
						name:'Спецификация',
					},
					{
						name:'Заказ',
					},
					{
						name:'Проект',
					},
					{
						name:'ДатаЗапуска',
					},
					{
						name:'ДатаВыпуска',
					},
					{
						name:'ВариантРаспределенияВыпусков',
					},
					{
						name:'ВРамкахПлана',
					},
					{
						name:'ПоДаннымПланов',
					},
					{
						name:'КонечнаяПродукция',
					},
					{
						name:'КоличествоПоСпецификации',
					},
					{
						name:'КлючСтроки',
					},
					{
						name:'НомерОперацииМаршрута',
					},
				]
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать детальное планирование',
			style: 'position:absolute;left:6px;top:235px;width:225px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Разузловывать данные при получении',
			style: 'position:absolute;left:6px;top:255px;width:225px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Автоматически сворачивать данные при получении',
			style: 'position:absolute;left:333px;top:235px;width:285px;height:15px;',
		},
					]
				},
				{
					title:'Занятость рабочих центров',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:640px;height:247px;',
			height: 247,width: 640,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'120',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'120',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
				{
					text:'Рабочий центр',
					width:'100',
					dataIndex:'РабочийЦентр',
					flex:1,
				},
				{
					text:'Смена',
					width:'100',
					dataIndex:'Смена',
					flex:1,
				},
				{
					text:'Тех операция',
					width:'100',
					dataIndex:'ТехОперация',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'100',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'100',
					dataIndex:'Спецификация',
					flex:1,
				},
				{
					text:'Конечная продукция',
					width:'100',
					dataIndex:'КонечнаяПродукция',
					flex:1,
				},
				{
					text:'Заказ',
					width:'100',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Проект',
					width:'100',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Количество',
					width:'100',
					dataIndex:'Количество',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланПроизводстваПоСменам/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Период',
					},
					{
						name:'ДатаОкончания',
					},
					{
						name:'РабочийЦентр',
					},
					{
						name:'Смена',
					},
					{
						name:'ТехОперация',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'Спецификация',
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
					{
						name:'Количество',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Потребности производства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:640px;height:247px;',
			height: 247,width: 640,
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
					width:'120',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Смена',
					width:'100',
					dataIndex:'Смена',
					flex:1,
				},
				{
					text:'Рабочий центр',
					width:'100',
					dataIndex:'РабочийЦентр',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'100',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'100',
					dataIndex:'Спецификация',
					flex:1,
				},
				{
					text:'Конечная продукция',
					width:'100',
					dataIndex:'КонечнаяПродукция',
					flex:1,
				},
				{
					text:'Количество извне',
					width:'100',
					dataIndex:'КоличествоИзвне',
					flex:1,
				},
				{
					text:'Количество внутри',
					width:'100',
					dataIndex:'КоличествоВнутри',
					flex:1,
				},
				{
					text:'Заказ',
					width:'100',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Проект',
					width:'100',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланПроизводстваПоСменам/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Период',
					},
					{
						name:'Смена',
					},
					{
						name:'РабочийЦентр',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'Спецификация',
					},
					{
						name:'КонечнаяПродукция',
					},
					{
						name:'КоличествоИзвне',
					},
					{
						name:'КоличествоВнутри',
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтветсвенный',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:234px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:426px;top:234px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:234px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:96px;top:234px;width:220px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:99px;width:640px;height:108px;',
			height: 108,width: 640,
			columns:
			[
				{
					text:'№',
					width:'30',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Склад',
					width:'100',
					dataIndex:'Склад',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланПроизводстваПоСменам/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Склад',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьМоментЗапасов',
			text: 'Момент определения запасов:',
			style: 'position:absolute;left:6px;top:30px;width:205px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МоментЗапасов',
			style: 'position:absolute;left:211px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНачальнаяГраница',
			text: 'Начальная граница перепланирования:',
			style: 'position:absolute;left:6px;top:6px;width:205px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачальнаяГраница',
			style: 'position:absolute;left:211px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:75px;width:640px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:6px;top:258px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:96px;top:258px;width:220px;height:19px;',
		},
					]
				},
			]
		},
	]
});