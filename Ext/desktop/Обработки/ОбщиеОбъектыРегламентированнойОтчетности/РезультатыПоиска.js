﻿Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.РезультатыПоиска',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:728px;height:235px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Результаты поиска',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:25px;width:728px;height:210px;',
			height: 210,width: 728,
			columns:
			[
				{
					text:'Наименование раздела',
					width:'255',
					dataIndex:'НаименованиеЛиста',
					flex:1,
				},
				{
					text:'№ листа',
					width:'87',
					dataIndex:'Страница',
					flex:1,
				},
				{
					text:'Найдено в строке',
					width:'374',
					dataIndex:'НайденоВСтроке',
					flex:1,
				},
				{
					text:'Ячейка',
					width:'185',
					dataIndex:'ИмяЯчейки',
					flex:1,
				},
				{
					text:'Раздел',
					width:'63',
					dataIndex:'Раздел',
					flex:1,
				},
				{
					text:'СтрокаПП',
					width:'58',
					dataIndex:'СтрокаПП',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбщиеОбъектыРегламентированнойОтчетности/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НаименованиеЛиста',
					},
					{
						name:'Страница',
					},
					{
						name:'НайденоВСтроке',
					},
					{
						name:'ИмяЯчейки',
					},
					{
						name:'Раздел',
					},
					{
						name:'СтрокаПП',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНайдено',
			text: '',
			style: 'position:absolute;left:100px;top:5px;width:622px;height:15px;text-align:right;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:728px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Назад',
				},
				{
					text:'Вперед',
				},
				'-',
			]
		},
	]
});