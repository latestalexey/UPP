﻿Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_НеформализованныйДокументНалогоплательщика_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:445px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Неформализованные документы налогоплательщиков',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:684px;height:404px;',
			height: 404,width: 684,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Номер',
					width:'132',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Дата',
					width:'124',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'120',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Тип файла',
					width:'120',
					dataIndex:'ТипФайла',
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
						name:'Номер',
					},
					{
						name:'Дата',
					},
					{
						name:'Организация',
					},
					{
						name:'ИмяФайла',
					},
					{
						name:'ТипФайла',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Показать циклы обмена, связанные с документом',
				},
					]
				},
			]
		},
	]
});