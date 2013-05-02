﻿Ext.define('Отчеты.РапортРуководителю.НастройкаПараметров',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:356px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка параметров показателя',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:336px;width:356px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:340px;height:320px;',
			height: 320,width: 340,
			columns:
			[
				{
					text:'Параметр',
					width:'120',
					dataIndex:'ПредставлениеПараметра',
					flex:1,
				},
				{
					text:'Значение',
					width:'220',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РапортРуководителю/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ПредставлениеПараметра',
					},
					{
						name:'Значение',
					},
				]
			},
		},
	]
});