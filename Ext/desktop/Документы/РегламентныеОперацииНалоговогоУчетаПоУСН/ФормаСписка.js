﻿Ext.define('Документы.РегламентныеОперацииНалоговогоУчетаПоУСН.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регламентные операции налогового учета (УСН)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:380px;',
			height: 380,width: 764,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'132',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Организация',
					width:'104',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'За период',
					width:'100',
					dataIndex:'ЗаПериод',
					flex:1,
				},
				{
					text:'Распределение расходов по видам деятельности',
					width:'70',
					dataIndex:'РаспределениеРасходовПоВидамДеятельности',
					flex:1,
				},
				{
					text:'Признание расходов на приобретение ОС',
					width:'70',
					dataIndex:'ПризнаниеРасходовНаПриобретениеОСУСН',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегламентныеОперацииНалоговогоУчетаПоУСН/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'Организация',
					},
					{
						name:'ЗаПериод',
					},
					{
						name:'РаспределениеРасходовПоВидамДеятельности',
					},
					{
						name:'ПризнаниеРасходовНаПриобретениеОСУСН',
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
			]
		},
	]
});