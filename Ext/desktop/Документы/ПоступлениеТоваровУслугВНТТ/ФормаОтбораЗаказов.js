﻿Ext.define('Документы.ПоступлениеТоваровУслугВНТТ.ФормаОтбораЗаказов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:660px;height:415px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отобрать заказы поставщикам',
	
	items:
	[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:413px;top:17px;width:233px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВариантОтбора',
			text: 'Вариант отбора:',
			style: 'position:absolute;left:325px;top:17px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНач',
			style: 'position:absolute;left:84px;top:17px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаКон',
			style: 'position:absolute;left:188px;top:17px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'За период с:',
			style: 'position:absolute;left:16px;top:17px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:168px;top:17px;width:15px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:276px;top:17px;width:19px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:227px;width:644px;height:25px;',
			items:
			[
				{
					text:'Включить все',
				},
				{
					text:'Выключить все',
				},
				{
					text:'Инвертировать',
				},
				'-',
				{
					text:'Вверх',
				},
				{
					text:'Вниз',
				},
				'-',
				{
					text:'По возрастанию',
				},
				{
					text:'По убыванию',
				},
				'-',
				{
					text:'Настройка списка',
				},
				'-',
				{
					text:'Анализ',
				},
				'-',
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Заказы',
			style: 'position:absolute;left:8px;top:212px;width:644px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:390px;width:660px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'<<Назад',
				},
				'-',
				{
					text:'Перенести',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:92px;width:644px;height:280px;',
			height: 280,width: 644,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:630px;height:221px;',
			height: 221,width: 630,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Заказ поставщику',
					width:'100',
					dataIndex:'ЗаказПоставщику',
					flex:1,
				},
				{
					text:'Код',
					width:'47',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'77',
					dataIndex:'Артикул',
					flex:1,
				},
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
					text:'Единица измерения',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Добавить в документ',
					width:'86',
					dataIndex:'ДобавитьВДокумент',
					flex:1,
				},
				{
					text:'Запланировано',
					width:'70',
					dataIndex:'Запланировано',
					flex:1,
				},
				{
					text:'Осталось получить',
					width:'70',
					dataIndex:'ОсталосьПолучить',
					flex:1,
				},
				{
					text:'Заполнено',
					width:'70',
					dataIndex:'Заполнено',
					flex:1,
				},
				{
					text:'Размещено',
					width:'70',
					dataIndex:'РазмещенноеКоличество',
					flex:1,
				},
				{
					text:'Внутренний заказ',
					width:'100',
					dataIndex:'Размещение',
					flex:1,
				},
				{
					text:'Флаг заполнено',
					width:'134',
					dataIndex:'ФлагЗаполнено',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоступлениеТоваровУслугВНТТ/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Пометка',
					},
					{
						name:'ЗаказПоставщику',
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
						name:'ЕдиницаИзмерения',
					},
					{
						name:'ДобавитьВДокумент',
					},
					{
						name:'Запланировано',
					},
					{
						name:'ОсталосьПолучить',
					},
					{
						name:'Заполнено',
					},
					{
						name:'РазмещенноеКоличество',
					},
					{
						name:'Размещение',
					},
					{
						name:'ФлагЗаполнено',
					},
				]
			},
		},
					]
				},
				{
					title:'Тара',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:630px;height:221px;',
			height: 221,width: 630,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Заказ поставщику',
					width:'100',
					dataIndex:'ЗаказПоставщику',
					flex:1,
				},
				{
					text:'Код',
					width:'47',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'77',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Единица измерения',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Добавить в документ',
					width:'100',
					dataIndex:'ДобавитьВДокумент',
					flex:1,
				},
				{
					text:'Запланировано',
					width:'70',
					dataIndex:'Запланировано',
					flex:1,
				},
				{
					text:'Осталось получить',
					width:'70',
					dataIndex:'ОсталосьПолучить',
					flex:1,
				},
				{
					text:'Заполнено',
					width:'70',
					dataIndex:'Заполнено',
					flex:1,
				},
				{
					text:'Размещено',
					width:'70',
					dataIndex:'РазмещенноеКоличество',
					flex:1,
				},
				{
					text:'Внутренний заказ',
					width:'100',
					dataIndex:'Размещение',
					flex:1,
				},
				{
					text:'Флаг заполнено',
					width:'133',
					dataIndex:'ФлагЗаполнено',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоступлениеТоваровУслугВНТТ/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Пометка',
					},
					{
						name:'ЗаказПоставщику',
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
						name:'ЕдиницаИзмерения',
					},
					{
						name:'ДобавитьВДокумент',
					},
					{
						name:'Запланировано',
					},
					{
						name:'ОсталосьПолучить',
					},
					{
						name:'Заполнено',
					},
					{
						name:'РазмещенноеКоличество',
					},
					{
						name:'Размещение',
					},
					{
						name:'ФлагЗаполнено',
					},
				]
			},
		},
					]
				},
				{
					title:'Услуги',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:630px;height:221px;',
			height: 221,width: 630,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Заказ поставщику',
					width:'100',
					dataIndex:'ЗаказПоставщику',
					flex:1,
				},
				{
					text:'Код',
					width:'47',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'77',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Единица измерения',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Добавить в документ',
					width:'100',
					dataIndex:'ДобавитьВДокумент',
					flex:1,
				},
				{
					text:'Запланировано',
					width:'70',
					dataIndex:'Запланировано1',
					flex:1,
				},
				{
					text:'Осталось получить',
					width:'70',
					dataIndex:'ОсталосьПолучить',
					flex:1,
				},
				{
					text:'Заполнено',
					width:'70',
					dataIndex:'Заполнено',
					flex:1,
				},
				{
					text:'Флаг заполнено',
					width:'100',
					dataIndex:'ФлагЗаполнено',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоступлениеТоваровУслугВНТТ/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Пометка',
					},
					{
						name:'ЗаказПоставщику',
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
						name:'ЕдиницаИзмерения',
					},
					{
						name:'ДобавитьВДокумент',
					},
					{
						name:'Запланировано1',
					},
					{
						name:'ОсталосьПолучить',
					},
					{
						name:'Заполнено',
					},
					{
						name:'ФлагЗаполнено',
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
			title: 'Заполнение табличных частей',
			style: 'position:absolute;left:8px;top:14px;width:644px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Товары',
			style: 'position:absolute;left:23px;top:38px;width:102px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Возвратная тара',
			style: 'position:absolute;left:145px;top:38px;width:106px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Услуги',
			style: 'position:absolute;left:23px;top:61px;width:102px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:250px;width:644px;height:131px;',
			height: 131,width: 644,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'НеЗаполнять',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'Переносить',
					flex:1,
				},
				{
					text:'Ссылка',
					width:'22',
					dataIndex:'Ссылка',
					flex:1,
				},
				{
					text:'Дата',
					width:'110',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'90',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Вид операции',
					width:'80',
					dataIndex:'ВидОперации',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'110',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор',
					width:'100',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Контактное лицо',
					width:'100',
					dataIndex:'КонтактноеЛицоКонтрагента',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'СуммаДокумента',
					flex:1,
				},
				{
					text:'Валюта',
					width:'30',
					dataIndex:'ВалютаДокумента',
					flex:1,
				},
				{
					text:'Ост. пол.',
					width:'80',
					dataIndex:'ЗаказыОстаток',
					flex:1,
				},
				{
					text:'Кол.',
					width:'30',
					dataIndex:'ЗаказыКоличество',
					flex:1,
				},
				{
					text:'Тара',
					width:'30',
					dataIndex:'ТараКоличество',
					flex:1,
				},
				{
					text:'Ост. опл.',
					width:'80',
					dataIndex:'РасчетыОстаток',
					flex:1,
				},
				{
					text:'Разм.',
					width:'35',
					dataIndex:'РазмещенияКоличество',
					flex:1,
				},
				{
					text:'Тип цен',
					width:'80',
					dataIndex:'ТипЦен',
					flex:1,
				},
				{
					text:'Тип скидки',
					width:'80',
					dataIndex:'ТипСкидкиНаценки',
					flex:1,
				},
				{
					text:'Дата оплаты',
					width:'80',
					dataIndex:'ДатаОплаты',
					flex:1,
				},
				{
					text:'Дата поступления',
					width:'80',
					dataIndex:'ДатаПоступления',
					flex:1,
				},
				{
					text:'Организация',
					width:'100',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Склад',
					width:'100',
					dataIndex:'Склад',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'100',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'100',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Проведен',
					width:'70',
					dataIndex:'Проведен',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоступлениеТоваровУслугВНТТ/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НеЗаполнять',
					},
					{
						name:'Переносить',
					},
					{
						name:'Ссылка',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'ВидОперации',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'КонтактноеЛицоКонтрагента',
					},
					{
						name:'СуммаДокумента',
					},
					{
						name:'ВалютаДокумента',
					},
					{
						name:'ЗаказыОстаток',
					},
					{
						name:'ЗаказыКоличество',
					},
					{
						name:'ТараКоличество',
					},
					{
						name:'РасчетыОстаток',
					},
					{
						name:'РазмещенияКоличество',
					},
					{
						name:'ТипЦен',
					},
					{
						name:'ТипСкидкиНаценки',
					},
					{
						name:'ДатаОплаты',
					},
					{
						name:'ДатаПоступления',
					},
					{
						name:'Организация',
					},
					{
						name:'Склад',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Ответственный',
					},
					{
						name:'Проведен',
					},
				]
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:419px;top:36px;width:233px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособЗаполнения',
			text: 'Способ заполнения:',
			style: 'position:absolute;left:311px;top:36px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:41px;width:644px;height:167px;',
			height: 167,width: 644,
			items:
			[
				{
					title:'Настройки',
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ПолеДатаПоступления',
			style: 'position:absolute;left:258px;top:64px;width:102px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:150px;top:64px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокОтргузки',
			text: 'Дата отгрузки:',
			style: 'position:absolute;left:16px;top:64px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:150px;top:8px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаличиеРазмещений',
			text: 'Наличие размещений:',
			style: 'position:absolute;left:16px;top:8px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:150px;top:40px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеОтгрузки',
			text: 'Поступление товара:',
			style: 'position:absolute;left:16px;top:40px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:364px;top:8px;width:160px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеПросроченоДнейОтгрузки',
			style: 'position:absolute;left:318px;top:64px;width:42px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:150px;top:96px;width:210px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеПросроченоДнейОплаты',
			style: 'position:absolute;left:318px;top:120px;width:42px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:150px;top:120px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеОплаты',
			text: 'Состояние оплаты:',
			style: 'position:absolute;left:16px;top:96px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокОплаты',
			text: 'Дата оплаты:',
			style: 'position:absolute;left:16px;top:120px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ПолеДатаОплаты',
			style: 'position:absolute;left:258px;top:120px;width:102px;height:19px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:630px;height:114px;',
			height: 114,width: 630,
			columns:
			[
				{
					text:'',
					width:'22',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'60',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'100',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'100',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоступлениеТоваровУслугВНТТ/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
					},
				]
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:406px;top:4px;width:219px;height:17px;',
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:390px;width:658px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Далее>>',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});