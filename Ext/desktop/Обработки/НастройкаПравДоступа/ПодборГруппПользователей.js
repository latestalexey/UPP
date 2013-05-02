﻿Ext.define('Обработки.НастройкаПравДоступа.ПодборГруппПользователей',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:354px;height:330px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подбор групп пользователей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:305px;width:354px;height:25px;',
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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:30px;width:338px;height:267px;',
			height: 267,width: 338,
			columns:
			[
				{
					text:'Наименование',
					width:'229',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Код',
					width:'57',
					dataIndex:'Код',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
					{
						name:'Код',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:354px;height:26px;',
			items:
			[
			]
		},
	]
});