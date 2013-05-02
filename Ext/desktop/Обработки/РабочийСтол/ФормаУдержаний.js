﻿Ext.define('Обработки.РабочийСтол.ФормаУдержаний',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:745px;height:538px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Удержания',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:745px;height:25px;',
			items:
			[
				'-',
				{
					text:'Данные по организациям',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:370px;top:33px;width:367px;height:497px;',
			height: 497,width: 367,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:367px;height:476px;',
			height: 476,width: 367,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'245',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Способ расчета',
					width:'100',
					dataIndex:'СпособРасчета',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РабочийСтол/ВыбратьПоСсылке/100'},
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
						name:'СпособРасчета',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:352px;height:497px;',
			height: 497,width: 352,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:352px;height:476px;',
			height: 476,width: 352,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'293',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РабочийСтол/ВыбратьПоСсылке/100'},
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
				]
			},
		},
					]
				},
			]
		},
	]
});