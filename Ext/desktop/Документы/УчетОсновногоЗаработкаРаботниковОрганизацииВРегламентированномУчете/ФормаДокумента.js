﻿Ext.define('Документы.УчетОсновногоЗаработкаРаботниковОрганизацииВРегламентированномУчете.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:643px;height:401px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Учет основного заработка сотрудников организации в регламентированном учете',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:179px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:197px;top:33px;width:119px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:643px;height:25px;',
			items:
			[
				{
					text:'Списком сотрудников',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:349px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:349px;width:539px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:376px;width:643px;height:25px;',
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
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:121px;width:627px;height:220px;',
			height: 220,width: 627,
			columns:
			[
				{
					text:'№',
					width:'31',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Таб. №',
					width:'80',
					dataIndex:'ТабельныйНомерСтрока',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'150',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Дата изменения',
					width:'73',
					dataIndex:'ДатаИзменения',
					flex:1,
				},
				{
					text:'Бух. учет',
					width:'139',
					dataIndex:'СпособОтраженияВБухучете',
					flex:1,
				},
				{
					text:'ЕНВД',
					width:'42',
					dataIndex:'ПодпадаетПодЕНВД',
					flex:1,
				},
				{
					text:'До 2011 года. Отражение б/л за счет работодателя',
					width:'102',
					dataIndex:'СпособОтраженияВБухучетеБольничногоЗаСчетРаботодателя',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УчетОсновногоЗаработкаРаботниковОрганизацииВРегламентированномУчете/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ТабельныйНомерСтрока',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'ДатаИзменения',
					},
					{
						name:'СпособОтраженияВБухучете',
					},
					{
						name:'ПодпадаетПодЕНВД',
					},
					{
						name:'СпособОтраженияВБухучетеБольничногоЗаСчетРаботодателя',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:97px;width:627px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:327px;top:57px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтветственныйЗаДокумент',
			style: 'position:absolute;left:415px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтражаемыйДокумент',
			style: 'position:absolute;left:415px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОснование',
			text: 'Основание:',
			style: 'position:absolute;left:327px;top:33px;width:86px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Сотрудники организации',
			style: 'position:absolute;left:8px;top:81px;width:627px;height:16px;',
		},
	],
	dockedItems:
	[
	]
});