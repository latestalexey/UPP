﻿Ext.define('Обработки.ФормированиеЦен.ФормаНастройкиКолонок',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:425px;height:208px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Форма настройки показа колонок',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:183px;width:425px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:9px;width:409px;height:166px;',
			height: 166,width: 409,
			columns:
			[
				{
					text:'Колонка',
					width:'225',
					dataIndex:'КолонкаСтрока',
					flex:1,
				},
				{
					text:'Положение',
					width:'168',
					dataIndex:'ПоложениеКолонки',
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
						name:'КолонкаСтрока',
					},
					{
						name:'ПоложениеКолонки',
					},
				]
			},
		},
	]
});