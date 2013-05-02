﻿Ext.define('Обработки.ФормированиеЦен.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:670px;height:331px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Формирование цен',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:34px;width:484px;height:24px;',
			items:
			[
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:58px;width:656px;height:220px;',
			height: 220,width: 656,
			columns:
			[
				{
					text:'№',
					width:'30',
					dataIndex:'Номер строки',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'144',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'103',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Цена базовая',
					width:'84',
					dataIndex:'ЦенаБазовая',
					flex:1,
				},
				{
					text:'Валюта базовая',
					width:'97',
					dataIndex:'ВалютаБазовая',
					flex:1,
				},
				{
					text:'Способ расчета',
					width:'137',
					dataIndex:'СпособРасчетаЦены',
					flex:1,
				},
				{
					text:'% скидки (наценки)',
					width:'46',
					dataIndex:'ПроцентСкидкиНаценки',
					flex:1,
				},
				{
					text:'Цена',
					width:'75',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Валюта',
					width:'77',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Единица измерения',
					width:'55',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеЦен/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Номер строки',
					},
					{
						name:'Пометка',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'ЦенаБазовая',
					},
					{
						name:'ВалютаБазовая',
					},
					{
						name:'СпособРасчетаЦены',
					},
					{
						name:'ПроцентСкидкиНаценки',
					},
					{
						name:'Цена',
					},
					{
						name:'Валюта',
					},
					{
						name:'ЕдиницаИзмерения',
					},
				]
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Пересчитывать цену при изменении других реквизитов',
			style: 'position:absolute;left:6px;top:283px;width:307px;height:15px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:6px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаВеличиныИзменения',
			style: 'position:absolute;left:464px;top:6px;width:48px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:514px;top:6px;width:62px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыполнить',
			text: 'Выполнить',
			style: 'position:absolute;left:582px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаВариантаЗачения',
			style: 'position:absolute;left:228px;top:6px;width:200px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:430px;top:6px;width:32px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаЦен',
			text: 'Дата чтения цен:',
			style: 'position:absolute;left:492px;top:37px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаЦен',
			style: 'position:absolute;left:582px;top:37px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:306px;width:670px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Подставлять валюту из диапазона',
			style: 'position:absolute;left:466px;top:283px;width:196px;height:15px;',
		},
	]
});