﻿Ext.define('Справочники.ВидыНалоговыхОрганов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:554px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Виды налоговых органов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:538px;height:259px;',
			height: 259,width: 538,
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
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'300',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВидыНалоговыхОрганов/ВыбратьПоСсылке/100'},
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
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:554px;height:25px;',
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