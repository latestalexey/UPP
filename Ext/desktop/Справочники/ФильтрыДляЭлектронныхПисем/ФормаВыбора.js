﻿Ext.define('Справочники.ФильтрыДляЭлектронныхПисем.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:456px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Фильтры для электронных писем',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:440px;height:280px;',
			height: 280,width: 440,
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
					text:'Операция условия',
					width:'70',
					dataIndex:'ОперацияУсловия',
					flex:1,
				},
				{
					text:'Порядок',
					width:'49',
					dataIndex:'Порядок',
					flex:1,
				},
				{
					text:'Использование',
					width:'70',
					dataIndex:'Использование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФильтрыДляЭлектронныхПисем/ВыбратьПоСсылке/100'},
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
						name:'ОперацияУсловия',
					},
					{
						name:'Порядок',
					},
					{
						name:'Использование',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:456px;height:25px;',
			dock: 'top',
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