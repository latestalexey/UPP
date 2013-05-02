﻿Ext.define('Документы.Опрос.ФормаВводаОстальныхОтветов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:915px;height:290px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ответ',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:10px;width:899px;height:249px;',
			height: 249,width: 899,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Несколько вариантов ответа',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:899px;height:249px;',
			height: 249,width: 899,
			columns:
			[
				{
					text:'',
					width:'25',
					dataIndex:'Выбор',
					flex:1,
				},
				{
					text:'№',
					width:'35',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Составной ответ',
					width:'204',
					dataIndex:'ВариантОтвета',
					flex:1,
				},
				{
					text:'Развернутый ответ',
					width:'200',
					dataIndex:'Ответ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Опрос/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Выбор',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ВариантОтвета',
					},
					{
						name:'Ответ',
					},
				]
			},
		},
					]
				},
				{
					title:'Табличный',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:899px;height:249px;',
			height: 249,width: 899,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Опрос/ВыбратьПоСсылке/100'},
				fields:
				[
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:265px;width:915px;height:25px;',
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
					text:'Отмена',
				},
			]
		},
	]
});