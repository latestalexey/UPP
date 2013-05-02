﻿Ext.define('Справочники.НазначенияИспользования.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:500px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Назначения использования',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:484px;height:259px;',
			height: 259,width: 484,
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
					text:'Владелец',
					width:'100',
					dataIndex:'Владелец',
					flex:1,
				},
				{
					text:'Наименование',
					width:'175',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Способ погашения стоимости',
					width:'158',
					dataIndex:'СпособПогашенияСтоимости',
					flex:1,
				},
				{
					text:'Срок полезного использования',
					width:'43',
					dataIndex:'СрокПолезногоИспользования',
					flex:1,
				},
				{
					text:'Количество',
					width:'68',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Единица',
					width:'70',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Способ отражения расходов',
					width:'165',
					dataIndex:'СпособОтраженияРасходов',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НазначенияИспользования/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Владелец',
					},
					{
						name:'Наименование',
					},
					{
						name:'СпособПогашенияСтоимости',
					},
					{
						name:'СрокПолезногоИспользования',
					},
					{
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'СпособОтраженияРасходов',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
			items:
			[
			]
		},
	]
});