﻿Ext.define('Обработки.ПакетныйВводДокументов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:364px;height:243px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отбор по номенклатуре',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:348px;height:202px;',
			height: 202,width: 348,
			columns:
			[
				{
					text:'Представление поля',
					width:'197',
					dataIndex:'ПредставлениеПоля',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПакетныйВводДокументов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ПредставлениеПоля',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:218px;width:364px;height:25px;',
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
				'-',
				{
					text:'Справка',
				},
			]
		},
	],
	dockedItems:
	[
	]
});