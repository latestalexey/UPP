﻿Ext.define('Обработки.ПоискИЗаменаДублирующихсяЭлементов.ФормаПоиска',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:675px;height:182px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Поиск дублирующихся элементов справочников',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:157px;width:675px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Да',
				},
				'-',
				{
					text:'Нет',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:30px;width:659px;height:119px;',
			height: 119,width: 659,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоискИЗаменаДублирующихсяЭлементов/ВыбратьПоСсылке/100'},
				fields:
				[
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСообщение',
			text: '',
			style: 'position:absolute;left:8px;top:2px;width:659px;height:28px;',
		},
	]
});