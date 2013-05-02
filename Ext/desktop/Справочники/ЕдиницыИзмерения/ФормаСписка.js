﻿Ext.define('Справочники.ЕдиницыИзмерения.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:688px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Единицы измерения',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:672px;height:280px;',
			height: 280,width: 672,
			columns:
			[
				{
					text:' ',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Владелец',
					width:'120',
					dataIndex:'Владелец',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'По классификатору',
					width:'120',
					dataIndex:'ЕдиницаПоКлассификатору',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Коэффициент',
					width:'80',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Вес',
					width:'80',
					dataIndex:'Вес',
					flex:1,
				},
				{
					text:'Объем',
					width:'80',
					dataIndex:'Объем',
					flex:1,
				},
				{
					text:'Штрихкод',
					width:'120',
					dataIndex:'ШтрихКод',
					flex:1,
				},
				{
					text:'Порог округления',
					width:'70',
					dataIndex:'ПорогОкругления',
					flex:1,
				},
				{
					text:'Предупреждать',
					width:'70',
					dataIndex:'ПредупреждатьОНецелыхМестах',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЕдиницыИзмерения/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Владелец',
					},
					{
						name:'Код',
					},
					{
						name:'ЕдиницаПоКлассификатору',
					},
					{
						name:'Наименование',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'Вес',
					},
					{
						name:'Объем',
					},
					{
						name:'ШтрихКод',
					},
					{
						name:'ПорогОкругления',
					},
					{
						name:'ПредупреждатьОНецелыхМестах',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:688px;height:25px;',
			items:
			[
			]
		},
	]
});