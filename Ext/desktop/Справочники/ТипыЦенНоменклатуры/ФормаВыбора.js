﻿Ext.define('Справочники.ТипыЦенНоменклатуры.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:496px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Типы цен номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:480px;height:259px;',
			height: 259,width: 480,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Валюта',
					width:'45',
					dataIndex:'ВалютаЦены',
					flex:1,
				},
				{
					text:'Базовый тип цен',
					width:'239',
					dataIndex:'БазовыйТипЦен',
					flex:1,
				},
				{
					text:'Рассчитывается',
					width:'91',
					dataIndex:'Рассчитывается',
					flex:1,
				},
				{
					text:'Процент',
					width:'50',
					dataIndex:'ПроцентСкидкиНаценки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТипыЦенНоменклатуры/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'ВалютаЦены',
					},
					{
						name:'БазовыйТипЦен',
					},
					{
						name:'Рассчитывается',
					},
					{
						name:'ПроцентСкидкиНаценки',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:496px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});