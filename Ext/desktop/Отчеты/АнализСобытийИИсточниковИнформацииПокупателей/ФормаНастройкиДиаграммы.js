﻿Ext.define('Отчеты.АнализСобытийИИсточниковИнформацииПокупателей.ФормаНастройкиДиаграммы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:602px;height:301px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка диаграммы ""Анализ событий и источников информации покупателей""',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:276px;width:602px;height:25px;',
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
			style: 'position:absolute;left:8px;top:28px;width:340px;height:240px;',
			height: 240,width: 340,
			columns:
			[
				{
					text:'Серии',
					width:'60',
					dataIndex:'ИспользованиеСерии',
					flex:1,
				},
				{
					text:'Точки',
					width:'60',
					dataIndex:'ИспользованиеТочки',
					flex:1,
				},
				{
					text:'Представление',
					width:'220',
					dataIndex:'Представление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АнализСобытийИИсточниковИнформацииПокупателей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ИспользованиеСерии',
					},
					{
						name:'ИспользованиеТочки',
					},
					{
						name:'Представление',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:354px;top:28px;width:240px;height:240px;',
			height: 240,width: 240,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Представление',
					width:'220',
					dataIndex:'Представление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АнализСобытийИИсточниковИнформацииПокупателей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Представление',
					},
				]
			},
		},
	]
});