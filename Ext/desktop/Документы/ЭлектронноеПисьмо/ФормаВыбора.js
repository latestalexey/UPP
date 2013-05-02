﻿Ext.define('Документы.ЭлектронноеПисьмо.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:350px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Электронные письма',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:309px;',
			height: 309,width: 764,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'НеРассмотрено',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'СостояниеПотомкаПисьма',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'ЕстьВложения',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'СтатусПисьма',
					flex:1,
				},
				{
					text:'Дата создания',
					width:'98',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Дата отправления',
					width:'130',
					dataIndex:'ДатаОтправления',
					flex:1,
				},
				{
					text:'Дата транспорта',
					width:'130',
					dataIndex:'ДатаТранспорта',
					flex:1,
				},
				{
					text:'От кого',
					width:'120',
					dataIndex:'ОтправительИмя',
					flex:1,
				},
				{
					text:'Кому',
					width:'112',
					dataIndex:'КомуПредставление',
					flex:1,
				},
				{
					text:'Тема',
					width:'126',
					dataIndex:'Тема',
					flex:1,
				},
				{
					text:'Номер',
					width:'79',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Учетная запись',
					width:'122',
					dataIndex:'УчетнаяЗапись',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'172',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Основание',
					width:'86',
					dataIndex:'Основание',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЭлектронноеПисьмо/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НеРассмотрено',
					},
					{
						name:'СостояниеПотомкаПисьма',
					},
					{
						name:'ЕстьВложения',
					},
					{
						name:'СтатусПисьма',
					},
					{
						name:'Дата',
					},
					{
						name:'ДатаОтправления',
					},
					{
						name:'ДатаТранспорта',
					},
					{
						name:'ОтправительИмя',
					},
					{
						name:'КомуПредставление',
					},
					{
						name:'Тема',
					},
					{
						name:'Номер',
					},
					{
						name:'УчетнаяЗапись',
					},
					{
						name:'Ответственный',
					},
					{
						name:'Основание',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				'-',
					]
				},
			]
		},
	]
});