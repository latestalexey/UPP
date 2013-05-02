﻿Ext.define('Справочники.НастройкиРасчетаЦеныНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:793px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки расчета цены номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:611px;height:259px;',
			height: 259,width: 611,
			columns:
			[
				{
					text:'',
					width:'33',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'107',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Тип цен',
					width:'114',
					dataIndex:'ТипЦен',
					flex:1,
				},
				{
					text:'Новый док.',
					width:'80',
					dataIndex:'СоздаватьНовыйДокумент',
					flex:1,
				},
				{
					text:'Автоматич.',
					width:'75',
					dataIndex:'ФормироватьДокументыАвтоматически',
					flex:1,
				},
				{
					text:'Упр.',
					width:'32',
					dataIndex:'ОтражатьВУправленческомУчете',
					flex:1,
				},
				{
					text:'Регл.',
					width:'33',
					dataIndex:'ОтражатьВРегламентированномУчете',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиРасчетаЦеныНоменклатуры/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
					{
						name:'ТипЦен',
					},
					{
						name:'СоздаватьНовыйДокумент',
					},
					{
						name:'ФормироватьДокументыАвтоматически',
					},
					{
						name:'ОтражатьВУправленческомУчете',
					},
					{
						name:'ОтражатьВРегламентированномУчете',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:793px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:259px;',
			height: 259,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'159',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиРасчетаЦеныНоменклатуры/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
	]
});