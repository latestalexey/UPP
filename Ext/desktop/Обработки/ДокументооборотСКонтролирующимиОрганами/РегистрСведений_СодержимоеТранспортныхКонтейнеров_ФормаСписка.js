﻿Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_СодержимоеТранспортныхКонтейнеров_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:696px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Список Содержимое транспортных контейнеров',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:680px;height:259px;',
			height: 259,width: 680,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Транспортное сообщение',
					width:'159',
					dataIndex:'ТранспортноеСообщение',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'229',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Размер (в байтах)',
					width:'144',
					dataIndex:'Размер',
					flex:1,
				},
				{
					text:'Тип файла отчетности ПФР',
					width:'100',
					dataIndex:'ТипФайлаОтчетностиПФР',
					flex:1,
				},
				{
					text:'Статус проверки ЭЦП',
					width:'141',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Сертификат ключа подписи',
					width:'198',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Имя подписанного файла',
					width:'200',
					dataIndex:'ЭЦПИмяПодписанногоФайла',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'21',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Идентификатор',
					width:'224',
					dataIndex:'Идентификатор',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'ТранспортноеСообщение',
					},
					{
						name:'ИмяФайла',
					},
					{
						name:'Тип',
					},
					{
						name:'Размер',
					},
					{
						name:'ТипФайлаОтчетностиПФР',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПИмяПодписанногоФайла',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'Идентификатор',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:696px;height:25px;',
			items:
			[
				'-',
				{
					text:'Выгрузить',
				},
			]
		},
	]
});