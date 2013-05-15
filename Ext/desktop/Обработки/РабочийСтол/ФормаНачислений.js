﻿Ext.define('Обработки.РабочийСтол.ФормаНачислений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:745px;height:538px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Начисления',
	
	items:
	[
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
			xtype: 'fieldset',
			title: 'Основные начисления',
			style: 'position:absolute;left:0px;top:0px;width:367px;height:16px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:367px;height:256px;',
			height: 256,width: 367,
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
					width:'60',
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
					text:'Способ расчета',
					width:'120',
					dataIndex:'СпособРасчета',
					flex:1,
				},
				{
					text:'Категория начисления',
					width:'120',
					dataIndex:'КатегорияРасчета',
					flex:1,
				},
				{
					text:'Вид времени',
					width:'120',
					dataIndex:'ВидВремени',
					flex:1,
				},
				{
					text:'Учет рабочего времени',
					width:'120',
					dataIndex:'ОбозначениеВТабелеУчетаРабочегоВремени',
					flex:1,
				},
				{
					text:'Учет по НДФЛ',
					width:'80',
					dataIndex:'КодДоходаНДФЛ',
					flex:1,
				},
				{
					text:'Учет по ЕСН',
					width:'80',
					dataIndex:'КодДоходаЕСН',
					flex:1,
				},
				{
					text:'Расход по ст.255 НК',
					width:'100',
					dataIndex:'ВидНачисленияПоСт255НК',
					flex:1,
				},
				{
					text:'Учет по ЕНВД',
					width:'120',
					dataIndex:'ОтнесениеРасходовКДеятельностиЕНВД',
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
					{
						name:'КатегорияРасчета',
					},
					{
						name:'ВидВремени',
					},
					{
						name:'ОбозначениеВТабелеУчетаРабочегоВремени',
					},
					{
						name:'КодДоходаНДФЛ',
					},
					{
						name:'КодДоходаЕСН',
					},
					{
						name:'ВидНачисленияПоСт255НК',
					},
					{
						name:'ОтнесениеРасходовКДеятельностиЕНВД',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Дополнительные начисления',
			style: 'position:absolute;left:0px;top:285px;width:367px;height:16px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:304px;width:367px;height:193px;',
			height: 193,width: 367,
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
					width:'60',
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
					text:'Способ расчета',
					width:'120',
					dataIndex:'СпособРасчета',
					flex:1,
				},
				{
					text:'Категория начисления',
					width:'120',
					dataIndex:'КатегорияРасчета',
					flex:1,
				},
				{
					text:'Код дохода НДФЛ',
					width:'120',
					dataIndex:'КодДоходаНДФЛ',
					flex:1,
				},
				{
					text:'Учет по ЕСН',
					width:'120',
					dataIndex:'КодДоходаЕСН',
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
					{
						name:'КатегорияРасчета',
					},
					{
						name:'КодДоходаНДФЛ',
					},
					{
						name:'КодДоходаЕСН',
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
			xtype: 'fieldset',
			title: 'Начисления предприятия',
			style: 'position:absolute;left:0px;top:0px;width:352px;height:16px;',
		},
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
					width:'46',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'152',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Категория расчета',
					width:'69',
					dataIndex:'КатегорияРасчета',
					flex:1,
				},
				{
					text:'Способ отражения в упр учете',
					width:'90',
					dataIndex:'СпособОтраженияВУпрУчете',
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
						name:'КатегорияРасчета',
					},
					{
						name:'СпособОтраженияВУпрУчете',
					},
				]
			},
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:745px;height:25px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Данные по организациям',
				},
			]
		},
	]
});